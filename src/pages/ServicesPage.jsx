import React from 'react';
import { FaTruck, FaWarehouse, FaTools, FaHandshake, FaHeadset, FaCreditCard, FaShieldAlt, FaClock } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './ServicesPage.css';

const ServicesPage = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: <FaTruck />,
      titleKey: 'fastDeliveryService',
      descKey: 'fastDeliveryServiceDesc'
    },
    {
      icon: <FaWarehouse />,
      titleKey: 'largeWarehouses',
      descKey: 'largeWarehousesDesc'
    },
    {
      icon: <FaTools />,
      titleKey: 'technicalConsultations',
      descKey: 'technicalConsultationsDesc'
    },
    {
      icon: <FaHandshake />,
      titleKey: 'b2bService',
      descKey: 'b2bServiceDesc'
    },
    {
      icon: <FaHeadset />,
      titleKey: 'technicalSupport247',
      descKey: 'technicalSupport247Desc'
    },
    {
      icon: <FaCreditCard />,
      titleKey: 'multiplePaymentMethods',
      descKey: 'multiplePaymentMethodsDesc'
    },
    {
      icon: <FaShieldAlt />,
      titleKey: 'qualityWarranty',
      descKey: 'qualityWarrantyDesc'
    },
    {
      icon: <FaClock />,
      titleKey: 'onTimeDelivery',
      descKey: 'onTimeDeliveryDesc'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>{t('ourServices')}</h1>
          <p>{t('servicesSubtitle')}</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{t(service.titleKey)}</h3>
                <p>{t(service.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <div className="cta-box">
            <h2>{t('needHelp')}</h2>
            <p>{t('expertsReady')}</p>
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

export default ServicesPage;
