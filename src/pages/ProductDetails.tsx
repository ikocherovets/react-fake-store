import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../loader";
import { Product } from "../types/Product";
import { fetchProductById } from "../services/fetchProducts";

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id as string);
        setProduct(data);
      } catch (error) {
        console.error(`Error fetching product with id: ${id}`, error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <section className="section">
      <div className="container">
        {product && (
          <div className="columns">
            <div className="column is-one-third">
              <figure className="image is-4by3">
                <img src={product.image} alt={product.title} />
              </figure>
            </div>
            <div className="column">
              <h1 className="title">{product.title}</h1>
              <p className="subtitle">{product.description}</p>
              <p className="has-text-weight-bold">
                Category: {product.category}
              </p>
              <p className="has-text-weight-bold">
                Rating: {product.rating?.rate} ({product.rating?.count} reviews)
              </p>
              <p className="title is-4">Price: ${product.price}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
