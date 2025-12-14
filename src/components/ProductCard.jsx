import React from 'react';
import { FaShoppingCart, FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const { language, t } = useLanguage();

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          <div className="image-overlay">
            <div className="overlay-content">
              <div className="overlay-icon">
                <FaShoppingCart />
              </div>
              <span className="view-details">{language === 'ar' ? 'عرض التفاصيل' : 'View Details'}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="product-info">
        <div className="product-header">
          <div className="product-title-section">
            <h3 className="product-name">{product.name}</h3>
            <div className="product-features">
              <span className="feature-tag">
                <FaCheckCircle />
                <span>{language === 'ar' ? 'جودة عالية' : 'High Quality'}</span>
              </span>
              <span className="category-tag-inline">
                {product.category}
              </span>
            </div>
          </div>
        </div>
        
        <div className="product-description-wrapper">
          <p className="product-description">{product.description}</p>
        </div>
        
        <div className="product-footer">
          <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
            <FaShoppingCart />
            <span>{language === 'ar' ? 'إضافة للسلة' : 'Add to Cart'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
