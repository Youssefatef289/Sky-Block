import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import './ProductsPage.css';

const ProductsPage = ({ onAddToCart }) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(t('all'));
  
  const categories = [t('all'), ...new Set(products.map(p => p.category))];
  
  const filteredProducts = selectedCategory === t('all') 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="container">
          <h1>{t('ourProducts')}</h1>
          <p>{t('productsSubtitle')}</p>
        </div>
      </section>

      <section className="products-content">
        <div className="container">
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
