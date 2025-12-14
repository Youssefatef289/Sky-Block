import React, { useState } from 'react';
import { 
  FaWhatsapp, 
  FaPhone, 
  FaFacebook, 
  FaInstagram, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './ContactPage.css';

const ContactPage = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    // السماح للنموذج بالإرسال مباشرة عبر form action
    setIsSubmitting(true);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>{t('contactUs')}</h1>
          <p>{t('contactSubtitle')}</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-section">
              <div className="contact-card">
                <div className="contact-icon whatsapp">
                  <FaWhatsapp />
                </div>
                <h3>{t('whatsapp')}</h3>
                <p>{t('whatsappDesc')}</p>
                <a href="https://wa.me/963980892904" target="_blank" rel="noopener noreferrer" className="contact-link-btn">
                  <FaWhatsapp />
                  <span>{t('openWhatsApp')}</span>
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon phone">
                  <FaPhone />
                </div>
                <h3>{t('phone')}</h3>
                <p>{t('phoneDesc')}</p>
                <a href="tel:+963980892904" className="contact-link-btn">
                  <FaPhone />
                  <span>+963 980 892 904</span>
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon email">
                  <FaEnvelope />
                </div>
                <h3>{t('email')}</h3>
                <p>{t('emailDesc')}</p>
                <a href="mailto:skyblock904@gmail.com" className="contact-link-btn">
                  <FaEnvelope />
                  <span>skyblock904@gmail.com</span>
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon location">
                  <FaMapMarkerAlt />
                </div>
                <h3>{t('address')}</h3>
                <p>{t('addressDesc')}</p>
                <div className="contact-link-btn disabled">
                  <FaMapMarkerAlt />
                  <span>{t('addressDesc')}</span>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <div className="contact-form-card">
                <h2>{t('sendMessage')}</h2>
                <p>{t('sendMessageDesc')}</p>
                
                <form 
                  action="https://formsubmit.co/skyblock904@gmail.com" 
                  method="POST"
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  {/* Hidden inputs for FormSubmit configuration */}
                  <input type="hidden" name="_subject" value={language === 'ar' ? 'رسالة جديدة من موقع Sky Block' : 'New message from Sky Block website'} />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_autoresponse" value={language === 'ar' ? 'شكراً لك على تواصلك معنا. سنرد عليك قريباً.' : 'Thank you for contacting us. We will reply soon.'} />
                  <input type="hidden" name="_next" value={window.location.href} />
                  <div className="form-group">
                    <label htmlFor="name">{t('fullName')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('enterName')}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">{t('email')}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('enterEmail')}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">{t('phoneRequired')}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('enterPhone')}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">{t('message')}</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('enterMessage')}
                      rows="5"
                      required
                    />
                  </div>

                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    <FaPaperPlane />
                    <span>{isSubmitting ? (language === 'ar' ? 'جاري الإرسال...' : 'Sending...') : t('send')}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="social-media-section">
            <h2>{t('followUs')}</h2>
            <div className="social-links-grid">
              <a href="https://wa.me/963980892904" target="_blank" rel="noopener noreferrer" className="social-link-card whatsapp">
                <FaWhatsapp />
                <span>{t('whatsapp')}</span>
              </a>
              <a href="https://www.facebook.com/share/16f9GmNtxA/" target="_blank" rel="noopener noreferrer" className="social-link-card facebook">
                <FaFacebook />
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/skyblock488?igsh=MXhidGxhdm1ycXdwbA==" target="_blank" rel="noopener noreferrer" className="social-link-card instagram">
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div className="working-hours">
            <div className="hours-card">
              <FaClock />
              <h3>{t('workingHours')}</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span>{t('satThu')}</span>
                  <span>{t('hours')}</span>
                </div>
                <div className="hours-item">
                  <span>{t('friday')}</span>
                  <span>{t('closed')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
