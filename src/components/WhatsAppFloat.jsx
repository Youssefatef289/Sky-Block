import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  const { t } = useLanguage();
  const phoneNumber = '963980892904';
  const message = encodeURIComponent(
    t('language') === 'ar' 
      ? 'مرحباً، أريد الاستفسار عن مواد البناء' 
      : 'Hello, I would like to inquire about building materials'
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label={t('contactUsFloat')}
    >
      <FaWhatsapp />
      <span className="whatsapp-tooltip">{t('contactUsFloat')}</span>
    </a>
  );
};

export default WhatsAppFloat;
