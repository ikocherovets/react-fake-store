import React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const lastVisitedProduct = localStorage.getItem("lastVisitedProduct");

  return (
    <section className="hero is-primary is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Welcome to the Fake Store</h1>
          <p className="subtitle">
            Explore our products and find the best deals!
          </p>
          {lastVisitedProduct && (
            <Link
              to={`/products/${lastVisitedProduct}`}
              className="button is-link is-large"
            >
              Go back to last viewed product
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
