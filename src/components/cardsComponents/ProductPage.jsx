// this is ProductPage.jsx 

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductPage() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setProduct(json));
  }, [id]);

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h1 className="product-title">{product.title}</h1>
      <p className="product-description">
        {showFullDescription
          ? product.description
          : `${product.description.slice(0, 100)}...`}
      </p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <div className="button-container">
        <button className="buy-btn">Buy Now</button>
        <button className="details-btn" onClick={toggleDescription}>
          {showFullDescription ? "Show Less" : "More Details"}
        </button>
      </div>
    </div>
  );
}
