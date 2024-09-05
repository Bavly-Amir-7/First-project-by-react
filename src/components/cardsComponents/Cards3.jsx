import React, { useEffect, useState } from 'react';

export default function Cards3() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  const truncateTitle = (title) => {
    const maxLength = 50;
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
  };

  // حساب الكروت التي ستظهر في الصفحة الحالية
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="custom-card-container3">
      {currentItems.map(product => (
        <div key={product.id} className="custom-card3">
          <div className="custom-card-img-container3">
            <img src={product.image} alt={product.title} className="custom-card-img3" />
          </div>
          <div className="custom-card-body3">
            <h5 className="custom-card-title3">{truncateTitle(product.title)}</h5>
            <p className="custom-card-price3">${product.price}</p>
          </div>
        </div>
      ))}

      {/* Pagination Buttons */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / itemsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
