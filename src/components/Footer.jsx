import React from 'react';
import { 
  FaWhatsapp, 
  FaFacebook, 
  FaInstagram, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaHome,
  FaInfoCircle,
  FaShoppingBag,
  FaCog
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = ({ onPageChange }) => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/imag/logo.png" alt="Sky Block" className="footer-logo-image" />
              <h3>Sky Block</h3>
            </div>
            <p className="footer-description">
              {t('footerDescription')}
            </p>
            <div className="footer-contact-info">
              <div className="contact-item">
                <FaPhone />
                <span>+963 980 892 904</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>skyblock904@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>{t('addressDesc')}</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">{t('quickLinks')}</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); onPageChange('home'); }}>
                  <FaHome />
                  <span>{t('home')}</span>
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); onPageChange('about'); }}>
                  <FaInfoCircle />
                  <span>{t('about')}</span>
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); onPageChange('services'); }}>
                  <FaCog />
                  <span>{t('services')}</span>
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => { e.preventDefault(); onPageChange('products'); }}>
                  <FaShoppingBag />
                  <span>{t('products')}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">{t('ourServicesFooter')}</h4>
            <ul className="footer-services">
              <li>{t('fastDelivery')}</li>
              <li>{t('qualityGuarantee')}</li>
              <li>{t('support247')}</li>
              <li>{t('competitivePrices')}</li>
              <li>{t('technicalConsultations')}</li>
              <li>{t('b2bService')}</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">{t('followUsFooter')}</h4>
            <p className="footer-social-text">{t('followUs')}</p>
            <div className="footer-social-links">
              <a 
                href="https://wa.me/963980892904" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link whatsapp"
                aria-label={t('whatsapp')}
              >
                <FaWhatsapp />
              </a>
              <a 
                href="https://www.facebook.com/share/16f9GmNtxA/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link facebook"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://www.instagram.com/skyblock488?igsh=MXhidGxhdm1ycXdwbA==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="footer-newsletter">
              <p>{t('subscribeNewsletter')}</p>
              <div className="newsletter-form">
                <input type="email" placeholder={t('enterEmail')} />
                <button type="submit">{t('subscribe')}</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Sky Block. {t('allRightsReserved')}.
            </p>
            <div className="footer-legal">
              <a href="#privacy">{t('privacyPolicy')}</a>
              <span>|</span>
              <a href="#terms">{t('termsOfUse')}</a>
              <span>|</span>
              <a href="#refund">{t('returnPolicy')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
