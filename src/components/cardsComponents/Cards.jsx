import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cards() {
  const [products, setProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  const truncateTitle = (title) => {
    const maxLength = 50; 
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
  };

  return (
    <>
      <div className="custom-card-container">
        {products.slice(0, showMore ? products.length : 4).map(product => (
          <div key={product.id} className="custom-card">
            <Link to={`/product/${product.id}`}> 
              <div className="custom-card-img-container">
                <img src={product.image} alt={product.title} className="custom-card-img" />
              </div>
              <div className="custom-card-body">
                <h5 className="custom-card-title">{truncateTitle(product.title)}</h5>
                <p className="custom-card-price">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="button-container">
        {!showMore && (
          <button className="show-more-button" onClick={handleShowMore}>
            View All
          </button>
        )}

        {showMore && (
          <button className="show-less-button" onClick={handleShowLess}>
            Show Less
          </button>
        )}
      </div>
    </>
  );
}
