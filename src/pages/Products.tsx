import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '../loader';
import { Product } from '../types/Product';

import { sortProducts } from '../services/sortProducts';
import { fetchProducts } from '../services/fetchProducts';

export const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [originalProducts, setOriginalProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts(); 
        setProducts(data);
        setOriginalProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleSort = (option: string) => {
    setSortOption(option);
    const sorted = sortProducts(products, originalProducts, option);
    setProducts(sorted);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">Our Products</h1>
        <div className="field is-grouped is-grouped-centered">
          <label className="label">Sort by:</label>
          <div className="control">
            <div className="select is-primary">
              <select 
                value={sortOption} 
                onChange={(event) => handleSort(event.target.value)}
              >
                <option value="default">Default</option>
                <option value="title">Title</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>
        </div>
        <div className="columns is-multiline">
          {products.map((product) => (
            <div className="column is-one-quarter" key={product.id}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-3by4">
                    <img src={product.image} alt={product.title} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{product.title}</p>
                      <p className="subtitle is-6">${product.price}</p>
                    </div>
                  </div>
                  <div className="content">
                    <Link to={`/products/${product.id}`} className="button is-link is-fullwidth">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
