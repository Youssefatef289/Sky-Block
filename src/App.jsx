import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ShoppingCart from './components/ShoppingCart';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CheckoutPage from './pages/CheckoutPage';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    setIsCartOpen(false);
    handlePageChange('checkout');
  };

  const handleOrderComplete = (orderData) => {
    // Here you can handle the order data (send to API, etc.)
    console.log('Order completed:', orderData);
    // Clear cart after order completion
    setCart([]);
  };

  // Scroll to top and animate page transition
  const handlePageChange = (page) => {
    setIsPageTransitioning(true);
    
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Small delay for smooth transition
    setTimeout(() => {
      setCurrentPage(page);
      setIsPageTransitioning(false);
    }, 150);
  };

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigateToProducts={() => setCurrentPage('products')} onAddToCart={addToCart} />;
      case 'products':
        return <ProductsPage onAddToCart={addToCart} />;
      case 'services':
        return <ServicesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'checkout':
        return (
          <CheckoutPage 
            cart={cart}
            onBack={() => setCurrentPage('home')}
            onOrderComplete={handleOrderComplete}
          />
        );
      default:
        return <HomePage onNavigateToProducts={() => setCurrentPage('products')} onAddToCart={addToCart} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="App">
        <Header 
          cartCount={cartCount} 
          onCartClick={() => setIsCartOpen(!isCartOpen)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          isCartOpen={isCartOpen}
        />
        
        <main className={`main-content ${isPageTransitioning ? 'page-transitioning' : ''}`}>
          <div className={`page-wrapper ${isPageTransitioning ? 'fade-out' : 'fade-in'}`}>
            {renderPage()}
          </div>
        </main>

        <Footer onPageChange={setCurrentPage} />

        <WhatsAppFloat />

        <ShoppingCart
          cart={cart}
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeItem}
          onClearCart={clearCart}
          onCheckout={handleCheckout}
        />
      </div>
    </LanguageProvider>
  );
}

export default App;
