import React from 'react';
import { FaShoppingCart, FaTimes, FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './ShoppingCart.css';

const ShoppingCart = ({ cart, isOpen, onClose, onUpdateQuantity, onRemoveItem, onClearCart, onCheckout }) => {
  const { language } = useLanguage();

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose}></div>}
      <div className={`shopping-cart ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>
            <FaShoppingCart /> {language === 'ar' ? 'سلة التسوق' : 'Shopping Cart'}
          </h2>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="cart-content">
          {/* تعليمات أعلى المودال */}
          {cart.length > 0 && (
            <div className="cart-note">
              {language === 'ar' ? 'اكتب كميتك' : 'Enter your quantity'}
            </div>
          )}
          {cart.length === 0 ? (
            <div className="empty-cart">
              <FaShoppingCart size={60} />
              <p>{language === 'ar' ? 'السلة فارغة' : 'Cart is empty'}</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                    </div>
                    <div className="item-controls">
                      <div className="quantity-controls">
                        {/* حقل إدخال الكمية بدلاً من أزرار الزيادة والنقصان */}
                        <input
                          type="number"
                          min="1"
                          className="quantity-input"
                          value={item.quantity}
                          onChange={(e) => {
                            const value = parseInt(e.target.value, 10);
                            // إذا كانت القيمة غير صالحة أو أقل من 1 نرجعها إلى 1
                            const safeValue = Number.isNaN(value) || value < 1 ? 1 : value;
                            onUpdateQuantity(item.id, safeValue);
                          }}
                        />
                      </div>
                      <button className="remove-btn" onClick={() => onRemoveItem(item.id)}>
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-footer">
                <div className="cart-actions">
                  <button className="clear-cart-btn" onClick={onClearCart}>
                    {language === 'ar' ? 'مسح السلة' : 'Clear Cart'}
                  </button>
                  <button className="checkout-btn" onClick={onCheckout}>
                    {language === 'ar' ? 'إتمام الطلب' : 'Checkout'}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;

