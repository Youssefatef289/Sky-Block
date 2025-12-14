import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

const Header = ({ cartCount, onCartClick, currentPage, onPageChange, isCartOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => onPageChange('home')}>
          <img src="/imag/logo.png" alt="Sky Block" className="logo-image" />
          <h1>Sky Block</h1>
        </div>
        
        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a 
            href="#home" 
            className={currentPage === 'home' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); onPageChange('home'); setMobileMenuOpen(false); }}
          >
            {language === 'ar' ? 'الرئيسية' : 'Home'}
          </a>
          <a 
            href="#services" 
            className={currentPage === 'services' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); onPageChange('services'); setMobileMenuOpen(false); }}
          >
            {language === 'ar' ? 'الخدمات' : 'Services'}
          </a>
          <a 
            href="#about" 
            className={currentPage === 'about' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); onPageChange('about'); setMobileMenuOpen(false); }}
          >
            {language === 'ar' ? 'من نحن' : 'About Us'}
          </a>
          <a 
            href="#products" 
            className={currentPage === 'products' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); onPageChange('products'); setMobileMenuOpen(false); }}
          >
            {language === 'ar' ? 'المنتجات' : 'Products'}
          </a>
          <a 
            href="#contact" 
            className={currentPage === 'contact' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); onPageChange('contact'); setMobileMenuOpen(false); }}
          >
            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </a>
        </nav>

        <div className="header-actions">
          <button className="language-toggle" onClick={toggleLanguage} title={language === 'ar' ? 'Switch to English' : 'التحويل للعربية'}>
            <FaGlobe />
            <span>{language === 'ar' ? 'EN' : 'AR'}</span>
          </button>

          <button className={`cart-button ${isCartOpen ? 'cart-close' : ''}`} onClick={onCartClick}>
            {isCartOpen ? <FaTimes /> : <FaShoppingCart />}
            {!isCartOpen && cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
