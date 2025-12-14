import React, { useState } from 'react';
import { FaUser, FaPhone, FaMapMarkerAlt, FaComment, FaArrowRight, FaCheckCircle, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './CheckoutPage.css';

const CheckoutPage = ({ cart, onBack, onOrderComplete }) => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    comments: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('nameRequired');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('phoneRequiredError');
    }

    if (!formData.address.trim()) {
      newErrors.address = t('addressRequiredError');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const recipientEmail = 'skyblock904@gmail.com';

    try {
      // إعداد محتوى البريد الإلكتروني
      const orderItems = cart.map((item, index) => 
        language === 'ar'
          ? `${index + 1}. ${item.name} - الكمية: ${item.quantity}`
          : `${index + 1}. ${item.name} - Quantity: ${item.quantity}`
      ).join('\n');

      const emailBody = language === 'ar'
        ? `طلب جديد من موقع Sky Block

معلومات العميل:
الاسم: ${formData.name}
رقم الهاتف: ${formData.phone}
العنوان: ${formData.address}
${formData.comments ? `التعليقات: ${formData.comments}` : ''}

تفاصيل الطلب:
${orderItems}

عدد المنتجات: ${cart.length}
إجمالي الكمية: ${cart.reduce((sum, item) => sum + item.quantity, 0)}

تاريخ الطلب: ${new Date().toLocaleString('ar-SA')}`
        : `New Order from Sky Block Website

Customer Information:
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
${formData.comments ? `Comments: ${formData.comments}` : ''}

Order Details:
${orderItems}

Total Items: ${cart.length}
Total Quantity: ${cart.reduce((sum, item) => sum + item.quantity, 0)}

Order Date: ${new Date().toLocaleString('en-US')}`;

      // استخدام FormSubmit لإرسال البريد إلى skyblock904@gmail.com
      // FormSubmit: https://formsubmit.co/
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('comments', formData.comments || '');
      formDataToSend.append('order_items', orderItems);
      formDataToSend.append('total_items', cart.length.toString());
      formDataToSend.append('total_quantity', cart.reduce((sum, item) => sum + item.quantity, 0).toString());
      formDataToSend.append('order_date', new Date().toLocaleString());
      formDataToSend.append('message', emailBody);
      formDataToSend.append('_to', recipientEmail);
      formDataToSend.append('_subject', language === 'ar' 
        ? `طلب جديد من ${formData.name} - Sky Block` 
        : `New Order from ${formData.name} - Sky Block`);
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');
      formDataToSend.append('_autoresponse', language === 'ar'
        ? 'شكراً لك! تم استلام طلبك بنجاح. سنتواصل معك قريباً.'
        : 'Thank you! Your order has been received successfully. We will contact you soon.');
      formDataToSend.append('_next', window.location.origin + window.location.pathname + '?order=success');

      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setOrderSubmitted(true);
        
        // Call callback if provided
        if (onOrderComplete) {
          onOrderComplete({
            ...formData,
            cart,
            orderDate: new Date().toISOString()
          });
        }
      } else {
        console.error('FormSubmit error:', result);
        throw new Error(result.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending order email:', error);
      
      // حتى لو فشل إرسال البريد، نكمل عملية الطلب
      setIsSubmitting(false);
      setOrderSubmitted(true);
      
      // Call callback if provided
      if (onOrderComplete) {
        onOrderComplete({
          ...formData,
          cart,
          orderDate: new Date().toISOString()
        });
      }
    }
  };

  if (orderSubmitted) {
    return (
      <div className="checkout-page">
        <div className="checkout-container">
          <div className="order-success">
            <div className="success-icon">
              <FaCheckCircle />
            </div>
            <h2>{t('orderSuccess')}</h2>
            <p>{t('orderSuccessDesc')}</p>
            <div className="order-summary">
              <h3>{t('orderSummary')}</h3>
              <div className="summary-item">
                <span>{t('fullNameRequired')}:</span>
                <span>{formData.name}</span>
              </div>
              <div className="summary-item">
                <span>{t('phoneRequired')}:</span>
                <span>{formData.phone}</span>
              </div>
              <div className="summary-item">
                <span>{t('addressRequired')}:</span>
                <span>{formData.address}</span>
              </div>
            </div>
            <button className="btn-primary" onClick={onBack}>
              {t('backToHome')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-header">
          <button className="back-btn" onClick={onBack}>
            <FaTimes />
            <span>{t('cancel')}</span>
          </button>
          <h1>{t('checkout')}</h1>
        </div>

        <div className="checkout-content">
          <div className="checkout-form-section">
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-section">
                <h2 className="form-section-title">
                  <FaUser />
                  {t('customerInfo')}
                </h2>

                <div className="form-group">
                  <label htmlFor="name">
                    <FaUser />
                    {t('fullNameRequired')} <span className="required">{t('required')}</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('enterFullName')}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <FaPhone />
                    {t('phoneRequired')} <span className="required">{t('required')}</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('enterPhone')}
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="address">
                    <FaMapMarkerAlt />
                    {t('addressRequired')} <span className="required">{t('required')}</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder={t('enterAddress')}
                    rows="3"
                    className={errors.address ? 'error' : ''}
                  />
                  {errors.address && <span className="error-message">{errors.address}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="comments">
                    <FaComment />
                    {t('comments')}
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    placeholder={t('commentsPlaceholder')}
                    rows="4"
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn-secondary" onClick={onBack}>
                  {t('cancel')}
                </button>
                <button type="submit" className="btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      {t('sending')}
                    </>
                  ) : (
                    <>
                      <span>{t('submitOrder')}</span>
                      <FaArrowRight />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="order-summary-section">
            <div className="order-summary-card">
              <h2>{t('orderSummary')}</h2>
              <div className="order-items">
                {cart.map((item) => (
                  <div key={item.id} className="order-item">
                    <div className="order-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="order-item-details">
                      <h4>{item.name}</h4>
                      <p>{language === 'ar' ? `الكمية: ${item.quantity}` : `Quantity: ${item.quantity}`}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

