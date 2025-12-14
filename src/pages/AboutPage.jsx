import React, { useEffect, useRef } from 'react';
import { FaAward, FaUsers, FaHandshake, FaRocket, FaCheckCircle, FaBuilding, FaTruck, FaCertificate, FaStar } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './AboutPage.css';

const AboutPage = () => {
  const { t } = useLanguage();
  const statsRef = useRef([]);
  
  const stats = [
    { icon: <FaBuilding />, number: '15+', label: 'experienceYears' },
    { icon: <FaUsers />, number: '1000+', label: 'satisfiedClients' },
    { icon: <FaTruck />, number: '5000+', label: 'deliveredOrders' },
    { icon: <FaCertificate />, number: '100%', label: 'qualityGuaranteed' }
  ];
  
  const values = [
    {
      icon: <FaAward />,
      titleKey: 'qualityFirst',
      descKey: 'qualityFirstDesc'
    },
    {
      icon: <FaHandshake />,
      titleKey: 'trustTransparency',
      descKey: 'trustTransparencyDesc'
    },
    {
      icon: <FaUsers />,
      titleKey: 'customerSatisfaction',
      descKey: 'customerSatisfactionDesc'
    },
    {
      icon: <FaRocket />,
      titleKey: 'continuousDevelopment',
      descKey: 'continuousDevelopmentDesc'
    }
  ];

  const achievements = [
    'achievement1',
    'achievement2',
    'achievement3',
    'achievement4',
    'achievement5',
    'achievement6'
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    statsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      statsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>{t('aboutUs')}</h1>
          <p>{t('successStory')}</p>
        </div>
      </section>

      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="stat-card"
                ref={(el) => (statsRef.current[index] = el)}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{t(stat.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>{t('ourStory')}</h2>
              <p>{t('storyText1')}</p>
              <p>{t('storyText2')}</p>
              <p>{t('storyText3')}</p>
            </div>
            <div className="story-image">
              <div className="story-image-wrapper">
                <div className="image-overlay"></div>
                <img 
                  src="/imag/WhatsApp Image 2025-12-13 at 8.19.58 PM (2).jpeg" 
                  alt="Sky Block Team" 
                  className="story-photo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="section-title">{t('ourValues')}</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{t(value.titleKey)}</h3>
                <p>{t(value.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-achievements">
        <div className="container">
          <h2 className="section-title">{t('ourAchievements')}</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <div className="achievement-icon-wrapper">
                  <FaCheckCircle className="check-icon" />
                </div>
                <span>{t(achievement)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>{t('joinFamily')}</h2>
            <p>{t('joinFamilyDesc')}</p>
            <div className="cta-buttons">
              <a href="https://wa.me/963980892904" target="_blank" rel="noopener noreferrer" className="btn-primary">
                {t('contactUs')}
              </a>
              <a href="tel:+963980892904" className="btn-secondary">
                {t('callNow')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
