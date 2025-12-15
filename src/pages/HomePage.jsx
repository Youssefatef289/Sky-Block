import React from 'react';
import { FaArrowDown, FaCheckCircle, FaTruck, FaShieldAlt, FaHeadset, FaAward, FaStar, FaRocket, FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './HomePage.css';

const HomePage = ({ onNavigateToProducts, onAddToCart }) => {
  const { t } = useLanguage();
  
  // عرض أول 6 منتجات في الصفحة الرئيسية
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="home-page page-enter">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <FaStar />
              <span>{t('heroBadge')}</span>
            </div>
            <h1 className="hero-title">
              {t('heroTitle1')}
              <span className="gradient-text"> {t('heroTitle2')}</span>
            </h1>
            <p className="hero-description">
              {t('heroDescription')}
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={onNavigateToProducts}>
                <span>{t('browseProducts')}</span>
                <FaArrowDown />
              </button>
              <a href="tel:+963 980 892 904" className="btn-secondary">
                <FaRocket />
                <span>{t('callNow')}</span>
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <h3>20+</h3>
                <p>{t('materialTypes')}</p>
              </div>
              <div className="hero-stat">
                <h3>1000+</h3>
                <p>{t('satisfiedClients')}</p>
              </div>
              <div className="hero-stat">
                <h3>15+</h3>
                <p>{t('yearsExperience')}</p>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-photo-card">
              <div className="hero-photo-overlay"></div>
              <img
                src="/imag/hero .jpeg"
                alt="Sky Block main building"
                className="hero-photo"
              />
              <div className="hero-photo-label">
                <FaAward />
                <span>{t('qualityGuarantee')}</span>
              </div>
            </div>
            <div className="hero-info-band">
              <div className="hero-info-item">
                <FaTruck />
                <span>{t('fastDelivery')}</span>
              </div>
              <div className="hero-info-item">
                <FaShieldAlt />
                <span>{t('qualityGuarantee')}</span>
              </div>
              <div className="hero-info-item">
                <FaHeadset />
                <span>{t('support247')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('whyBest')}</h2>
            <p className="section-subtitle">{t('featuresSubtitle')}</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  <FaTruck />
                </div>
                <div className="feature-icon-bg"></div>
              </div>
              <h3>{t('fastDelivery')}</h3>
              <p>{t('fastDeliveryDesc')}</p>
              <div className="feature-link">
                <span>{t('learnMore')}</span>
                <FaArrowDown />
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  <FaShieldAlt />
                </div>
                <div className="feature-icon-bg"></div>
              </div>
              <h3>{t('qualityGuarantee')}</h3>
              <p>{t('qualityGuaranteeDesc')}</p>
              <div className="feature-link">
                <span>{t('learnMore')}</span>
                <FaArrowDown />
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  <FaHeadset />
                </div>
                <div className="feature-icon-bg"></div>
              </div>
              <h3>{t('support247')}</h3>
              <p>{t('support247Desc')}</p>
              <div className="feature-link">
                <span>{t('learnMore')}</span>
                <FaArrowDown />
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  <FaAward />
                </div>
                <div className="feature-icon-bg"></div>
              </div>
              <h3>{t('competitivePrices')}</h3>
              <p>{t('competitivePricesDesc')}</p>
              <div className="feature-link">
                <span>{t('learnMore')}</span>
                <FaArrowDown />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section">
        <div className="container">
          <div className="section-header">
            <div className="section-header-top">
              <h2 className="section-title">{t('featuredProducts')}</h2>
              <button className="view-all-btn" onClick={onNavigateToProducts}>
                <span>{t('viewAllProducts')}</span>
                <FaArrowLeft />
              </button>
            </div>
            <p className="section-subtitle">{t('featuredProductsDesc')}</p>
          </div>
          <div className="featured-products-grid">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <FaAward />
              </div>
              <h3>20+</h3>
              <p>{t('materialTypes')}</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FaCheckCircle />
              </div>
              <h3>1000+</h3>
              <p>{t('satisfiedClients')}</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FaStar />
              </div>
              <h3>15+</h3>
              <p>{t('yearsExperience')}</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FaHeadset />
              </div>
              <h3>24/7</h3>
              <p>{t('customerService')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">
              <FaRocket />
            </div>
            <h2>{t('readyToStart')}</h2>
            <p>{t('readyToStartDesc')}</p>
            <div className="cta-buttons">
              <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="btn-primary">
                {t('contactWhatsApp')}
              </a>
              <a href="tel:+966500000000" className="btn-secondary">
                {t('callNow')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
