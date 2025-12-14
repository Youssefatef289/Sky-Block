import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'ar';
  });
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
    localStorage.setItem('language', language);
  }, [language]);

  const translations = {
    ar: {
      // Navigation
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'من نحن',
      products: 'المنتجات',
      contact: 'تواصل معنا',
      
      // Company Name
      companyName: 'Sky Block',
      
      // Home Page
      heroBadge: 'المنصة الأفضل في سوريا',
      heroTitle1: 'Sky Block',
      heroTitle2: 'أول منصة مواد بناء في سوريا',
      heroDescription: 'نوفر لك جميع مواد البناء عالية الجودة بأفضل الأسعار. خدمة عملاء ممتازة وتوصيل سريع لجميع أنحاء سوريا.',
      browseProducts: 'تصفح المنتجات',
      callNow: 'اتصل بنا الآن',
      materialTypes: 'نوع من المواد',
      satisfiedClients: 'عميل راضٍ',
      yearsExperience: 'سنة خبرة',
      customerService: 'خدمة عملاء',
      deliveredOrders: 'طلب تم توصيله',
      
      // Features
      whyBest: 'لماذا نحن الأفضل؟',
      featuresSubtitle: 'نقدم لك أفضل الخدمات والحلول لمشاريعك',
      fastDelivery: 'توصيل سريع',
      fastDeliveryDesc: 'نوصل طلبك في أسرع وقت ممكن لجميع أنحاء سوريا',
      qualityGuarantee: 'ضمان الجودة',
      qualityGuaranteeDesc: 'جميع منتجاتنا معتمدة وذات جودة عالية ومضمونة',
      support247: 'خدمة عملاء 24/7',
      support247Desc: 'فريق خدمة عملاء متاح على مدار الساعة لمساعدتك',
      competitivePrices: 'أسعار تنافسية',
      competitivePricesDesc: 'أفضل الأسعار في السوق مع عروض وخصومات حصرية',
      learnMore: 'اعرف المزيد',
      
      // Stats
      readyToStart: 'جاهز لبدء مشروعك؟',
      readyToStartDesc: 'تواصل معنا الآن واحصل على أفضل العروض والخدمات',
      contactWhatsApp: 'تواصل عبر واتساب',
      
      // Services Page
      ourServices: 'خدماتنا المميزة',
      servicesSubtitle: 'نقدم لك مجموعة شاملة من الخدمات لتلبية جميع احتياجاتك في مواد البناء',
      needHelp: 'هل تحتاج مساعدة في اختيار المواد المناسبة؟',
      expertsReady: 'فريقنا من الخبراء جاهز لمساعدتك في أي وقت',
      
      // About Page
      aboutUs: 'من نحن',
      ourStory: 'قصتنا',
      ourValues: 'قيمنا',
      ourAchievements: 'إنجازاتنا',
      joinFamily: 'انضم إلى عائلة عملائنا',
      joinFamilyDesc: 'نحن هنا لمساعدتك في تحقيق أحلامك في البناء',
      
      // Products Page
      ourProducts: 'منتجاتنا',
      productsSubtitle: 'أفضل مواد البناء بجودة عالية وأسعار منافسة',
      all: 'الكل',
      featuredProducts: 'منتجات مميزة',
      featuredProductsDesc: 'اكتشف مجموعة مختارة من أفضل منتجاتنا',
      viewAllProducts: 'عرض جميع المنتجات',
      
      // Contact Page
      contactUs: 'تواصل معنا',
      contactSubtitle: 'نحن هنا لمساعدتك في أي وقت. تواصل معنا عبر أي من الطرق التالية',
      whatsapp: 'واتساب',
      whatsappDesc: 'تواصل معنا مباشرة عبر واتساب',
      openWhatsApp: 'فتح واتساب',
      phone: 'هاتف',
      phoneDesc: 'اتصل بنا مباشرة',
      email: 'بريد إلكتروني',
      emailDesc: 'أرسل لنا بريد إلكتروني',
      address: 'العنوان',
      addressDesc: 'سوريا',
      sendMessage: 'أرسل لنا رسالة',
      sendMessageDesc: 'املأ النموذج أدناه وسنتواصل معك في أقرب وقت',
      fullName: 'الاسم الكامل',
      enterName: 'أدخل اسمك',
      enterPhone: 'أدخل رقم الهاتف',
      message: 'الرسالة',
      enterMessage: 'اكتب رسالتك هنا...',
      send: 'إرسال الرسالة',
      followUs: 'تابعنا على وسائل التواصل الاجتماعي',
      workingHours: 'ساعات العمل',
      satThu: 'السبت - الخميس:',
      friday: 'الجمعة:',
      closed: 'مغلق',
      hours: '9:00 ص - 6:00 م',
      hours24: 'خلال 24 ساعة',
      guaranteed: '100% مضمون',
      qualityGuaranteed: 'جودة مضمونة',
      allProductsCertified: 'جميع منتجاتنا معتمدة',
      
      // Services translations
      fastDeliveryService: 'توصيل سريع',
      fastDeliveryServiceDesc: 'نوصل طلبك في أسرع وقت ممكن لجميع أنحاء سوريا مع فريق توصيل محترف',
      largeWarehouses: 'مستودعات ضخمة',
      largeWarehousesDesc: 'مستودعاتنا مجهزة بأحدث التقنيات لتخزين المواد بشكل آمن ومحكم',
      technicalConsultations: 'استشارات فنية',
      technicalConsultationsDesc: 'فريق من المهندسين المتخصصين لمساعدتك في اختيار المواد المناسبة لمشروعك',
      b2bService: 'خدمة B2B',
      b2bServiceDesc: 'خدمات خاصة للمقاولين والشركات مع عروض وخصومات حصرية',
      technicalSupport247: 'دعم فني 24/7',
      technicalSupport247Desc: 'فريق خدمة عملاء متاح على مدار الساعة للإجابة على استفساراتك',
      multiplePaymentMethods: 'طرق دفع متعددة',
      multiplePaymentMethodsDesc: 'نقبل جميع طرق الدفع: نقداً، بطاقات، تحويل بنكي، وأقساط',
      qualityWarranty: 'ضمان الجودة',
      qualityWarrantyDesc: 'جميع منتجاتنا معتمدة وذات جودة عالية مع ضمان شامل على جميع المواد',
      onTimeDelivery: 'تسليم في الوقت المحدد',
      onTimeDeliveryDesc: 'نلتزم بمواعيد التسليم المتفق عليها مع ضمان عدم التأخير',
      
      // About translations
      successStory: 'قصة نجاح بدأت بحلم ووصلت إلى واقع',
      storyText1: 'بدأت رحلتنا قبل أكثر من 15 عاماً بحلم بسيط: توفير مواد بناء عالية الجودة بأسعار مناسبة لجميع العملاء. اليوم، نحن فخورون بأننا أصبحنا منصة رائدة في مجال بيع مواد البناء في سوريا.',
      storyText2: 'نؤمن بأن البناء يبدأ بمواد عالية الجودة، لذلك نحرص على اختيار أفضل المواد من موردين موثوقين ومعتمدين. فريقنا من الخبراء يعمل بجد لضمان حصولك على أفضل المنتجات والخدمات.',
      storyText3: 'رؤيتنا هي أن نكون الشريك المفضل لجميع مشاريع البناء، من المنازل الصغيرة إلى المشاريع الضخمة. نقدم خدمات شاملة تشمل الاستشارات الفنية، التوصيل السريع، وضمان الجودة.',
      experienceYears: '15+ سنة خبرة',
      qualityFirst: 'الجودة أولاً',
      qualityFirstDesc: 'نلتزم بتقديم أفضل المواد بمعايير جودة عالمية',
      trustTransparency: 'الثقة والشفافية',
      trustTransparencyDesc: 'علاقاتنا مع العملاء مبنية على الثقة والشفافية الكاملة',
      customerSatisfaction: 'رضا العملاء',
      customerSatisfactionDesc: 'هدفنا الأول والأخير هو رضا عملائنا الكرام',
      continuousDevelopment: 'التطوير المستمر',
      continuousDevelopmentDesc: 'نسعى دائماً لتطوير خدماتنا وتحسين تجربة العملاء',
      achievement1: 'أكثر من 15 سنة من الخبرة في مجال مواد البناء',
      achievement2: 'خدمة أكثر من 1000 عميل راضٍ في جميع أنحاء سوريا',
      achievement3: 'شبكة واسعة من الموردين والشركاء الموثوقين',
      achievement4: 'فريق محترف من المهندسين والمختصين',
      achievement5: 'مستودعات حديثة ومجهزة بأحدث التقنيات',
      achievement6: 'شهادات جودة ومعايير عالمية',
      
      // Checkout
      checkout: 'إتمام الطلب',
      customerInfo: 'معلومات العميل',
      fullNameRequired: 'الاسم الكامل',
      enterFullName: 'أدخل اسمك الكامل',
      phoneRequired: 'رقم الهاتف',
      addressRequired: 'العنوان',
      enterAddress: 'أدخل العنوان الكامل',
      comments: 'تعليقات أو ملاحظات',
      commentsPlaceholder: 'أخبرنا عن احتياجاتك الخاصة أو أي تعليقات إضافية...',
      cancel: 'إلغاء',
      submitOrder: 'إرسال الطلب',
      sending: 'جاري الإرسال...',
      orderSuccess: 'تم إرسال طلبك بنجاح!',
      orderSuccessDesc: 'شكراً لك على ثقتك بنا. سنتواصل معك قريباً لتأكيد الطلب.',
      orderSummary: 'ملخص الطلب',
      backToHome: 'العودة للصفحة الرئيسية',
      
      // Cart
      shoppingCart: 'سلة التسوق',
      emptyCart: 'السلة فارغة',
      clearCart: 'مسح السلة',
      total: 'الإجمالي',
      
      // Common
      addToCart: 'إضافة للسلة',
      required: '*',
      nameRequired: 'الاسم مطلوب',
      phoneRequiredError: 'رقم الهاتف مطلوب',
      phoneInvalid: 'رقم الهاتف غير صحيح',
      addressRequiredError: 'العنوان مطلوب',
      
      // Footer
      footerDescription: 'نوفر لك جميع مواد البناء عالية الجودة بأفضل الأسعار. خدمة عملاء ممتازة وتوصيل سريع لجميع أنحاء سوريا.',
      quickLinks: 'روابط سريعة',
      ourServicesFooter: 'خدماتنا',
      followUsFooter: 'تابعنا',
      subscribeNewsletter: 'اشترك في النشرة الإخبارية',
      enterEmail: 'أدخل بريدك الإلكتروني',
      subscribe: 'اشترك',
      allRightsReserved: 'جميع الحقوق محفوظة',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfUse: 'شروط الاستخدام',
      returnPolicy: 'سياسة الإرجاع',
      contactUsFloat: 'تواصل معنا',
    },
    en: {
      // Navigation
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      products: 'Products',
      contact: 'Contact Us',
      
      // Company Name
      companyName: 'Sky Block',
      
      // Home Page
      heroBadge: 'The Best Platform in Syria',
      heroTitle1: 'Sky Block',
      heroTitle2: 'First Building Materials Platform in Syria',
      heroDescription: 'We provide you with all high-quality building materials at the best prices. Excellent customer service and fast delivery throughout Syria.',
      browseProducts: 'Browse Products',
      callNow: 'Call Us Now',
      materialTypes: 'Types of Materials',
      satisfiedClients: 'Satisfied Clients',
      yearsExperience: 'Years Experience',
      customerService: 'Customer Service',
      deliveredOrders: 'Delivered Orders',
      
      // Features
      whyBest: 'Why We Are The Best?',
      featuresSubtitle: 'We provide you with the best services and solutions for your projects',
      fastDelivery: 'Fast Delivery',
      fastDeliveryDesc: 'We deliver your order as quickly as possible throughout Syria',
      qualityGuarantee: 'Quality Guarantee',
      qualityGuaranteeDesc: 'All our products are certified, high quality and guaranteed',
      support247: '24/7 Customer Service',
      support247Desc: 'Customer service team available around the clock to help you',
      competitivePrices: 'Competitive Prices',
      competitivePricesDesc: 'Best prices in the market with exclusive offers and discounts',
      learnMore: 'Learn More',
      
      // Stats
      readyToStart: 'Ready to Start Your Project?',
      readyToStartDesc: 'Contact us now and get the best offers and services',
      contactWhatsApp: 'Contact via WhatsApp',
      
      // Services Page
      ourServices: 'Our Distinguished Services',
      servicesSubtitle: 'We provide you with a comprehensive range of services to meet all your building materials needs',
      needHelp: 'Do you need help choosing the right materials?',
      expertsReady: 'Our team of experts is ready to help you at any time',
      
      // About Page
      aboutUs: 'About Us',
      ourStory: 'Our Story',
      ourValues: 'Our Values',
      ourAchievements: 'Our Achievements',
      joinFamily: 'Join Our Customer Family',
      joinFamilyDesc: 'We are here to help you achieve your building dreams',
      
      // Products Page
      ourProducts: 'Our Products',
      productsSubtitle: 'Best building materials with high quality and competitive prices',
      all: 'All',
      featuredProducts: 'Featured Products',
      featuredProductsDesc: 'Discover a selection of our best products',
      viewAllProducts: 'View All Products',
      
      // Contact Page
      contactUs: 'Contact Us',
      contactSubtitle: 'We are here to help you at any time. Contact us through any of the following methods',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Contact us directly via WhatsApp',
      openWhatsApp: 'Open WhatsApp',
      phone: 'Phone',
      phoneDesc: 'Call us directly',
      email: 'Email',
      emailDesc: 'Send us an email',
      address: 'Address',
      addressDesc: 'Syria',
      sendMessage: 'Send Us a Message',
      sendMessageDesc: 'Fill out the form below and we will contact you as soon as possible',
      fullName: 'Full Name',
      enterName: 'Enter your name',
      enterPhone: 'Enter phone number',
      message: 'Message',
      enterMessage: 'Write your message here...',
      send: 'Send Message',
      followUs: 'Follow Us on Social Media',
      workingHours: 'Working Hours',
      satThu: 'Saturday - Thursday:',
      friday: 'Friday:',
      closed: 'Closed',
      hours: '9:00 AM - 6:00 PM',
      hours24: 'Within 24 hours',
      guaranteed: '100% Guaranteed',
      qualityGuaranteed: 'Quality Guaranteed',
      allProductsCertified: 'All our products are certified',
      
      // Services translations
      fastDeliveryService: 'Fast Delivery',
      fastDeliveryServiceDesc: 'We deliver your order as quickly as possible throughout Syria with a professional delivery team',
      largeWarehouses: 'Large Warehouses',
      largeWarehousesDesc: 'Our warehouses are equipped with the latest technologies to store materials safely and securely',
      technicalConsultations: 'Technical Consultations',
      technicalConsultationsDesc: 'A team of specialized engineers to help you choose the right materials for your project',
      b2bService: 'B2B Service',
      b2bServiceDesc: 'Special services for contractors and companies with exclusive offers and discounts',
      technicalSupport247: '24/7 Technical Support',
      technicalSupport247Desc: 'Customer service team available around the clock to answer your inquiries',
      multiplePaymentMethods: 'Multiple Payment Methods',
      multiplePaymentMethodsDesc: 'We accept all payment methods: cash, cards, bank transfer, and installments',
      qualityWarranty: 'Quality Warranty',
      qualityWarrantyDesc: 'All our products are certified and of high quality with a comprehensive warranty on all materials',
      onTimeDelivery: 'On-Time Delivery',
      onTimeDeliveryDesc: 'We commit to agreed delivery dates with a guarantee of no delays',
      
      // About translations
      successStory: 'A success story that started with a dream and became reality',
      storyText1: 'Our journey began more than 15 years ago with a simple dream: providing high-quality building materials at affordable prices for all customers. Today, we are proud to have become a leading platform in the field of building materials sales in Syria.',
      storyText2: 'We believe that building starts with high-quality materials, so we carefully select the best materials from trusted and certified suppliers. Our team of experts works hard to ensure you get the best products and services.',
      storyText3: 'Our vision is to be the preferred partner for all construction projects, from small homes to massive projects. We provide comprehensive services including technical consultations, fast delivery, and quality guarantee.',
      experienceYears: '15+ Years Experience',
      qualityFirst: 'Quality First',
      qualityFirstDesc: 'We are committed to providing the best materials with international quality standards',
      trustTransparency: 'Trust and Transparency',
      trustTransparencyDesc: 'Our relationships with customers are based on trust and complete transparency',
      customerSatisfaction: 'Customer Satisfaction',
      customerSatisfactionDesc: 'Our first and last goal is the satisfaction of our valued customers',
      continuousDevelopment: 'Continuous Development',
      continuousDevelopmentDesc: 'We always strive to develop our services and improve the customer experience',
      achievement1: 'More than 15 years of experience in building materials',
      achievement2: 'Serving more than 1000 satisfied customers throughout Syria',
      achievement3: 'A wide network of trusted suppliers and partners',
      achievement4: 'A professional team of engineers and specialists',
      achievement5: 'Modern warehouses equipped with the latest technologies',
      achievement6: 'Quality certificates and international standards',
      
      // Checkout
      checkout: 'Checkout',
      customerInfo: 'Customer Information',
      fullNameRequired: 'Full Name',
      enterFullName: 'Enter your full name',
      phoneRequired: 'Phone Number',
      addressRequired: 'Address',
      enterAddress: 'Enter full address',
      comments: 'Comments or Notes',
      commentsPlaceholder: 'Tell us about your special needs or any additional comments...',
      cancel: 'Cancel',
      submitOrder: 'Submit Order',
      sending: 'Sending...',
      orderSuccess: 'Your Order Has Been Sent Successfully!',
      orderSuccessDesc: 'Thank you for trusting us. We will contact you soon to confirm the order.',
      orderSummary: 'Order Summary',
      backToHome: 'Back to Home',
      
      // Cart
      shoppingCart: 'Shopping Cart',
      emptyCart: 'Cart is empty',
      clearCart: 'Clear Cart',
      total: 'Total',
      
      // Common
      addToCart: 'Add to Cart',
      required: '*',
      nameRequired: 'Name is required',
      phoneRequiredError: 'Phone number is required',
      phoneInvalid: 'Invalid phone number',
      addressRequiredError: 'Address is required',
      
      // Footer
      footerDescription: 'We provide you with all high-quality building materials at the best prices. Excellent customer service and fast delivery throughout Syria.',
      quickLinks: 'Quick Links',
      ourServicesFooter: 'Our Services',
      followUsFooter: 'Follow Us',
      subscribeNewsletter: 'Subscribe to Newsletter',
      enterEmail: 'Enter your email',
      subscribe: 'Subscribe',
      allRightsReserved: 'All Rights Reserved',
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use',
      returnPolicy: 'Return Policy',
      contactUsFloat: 'Contact Us',
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'ar' ? 'en' : 'ar';
      document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', newLang);
      return newLang;
    });
  };

  const toggleCurrency = () => {
    setCurrency(prev => prev === 'USD' ? 'SYP' : 'USD');
  };

  const formatPrice = (price) => {
    let convertedPrice = price;
    if (currency === 'SYP') {
      convertedPrice = price * 2500;
    }
    if (currency === 'USD') {
      return convertedPrice.toFixed(2);
    } else {
      return Math.round(convertedPrice).toLocaleString();
    }
  };

  const getCurrencySymbol = () => {
    return currency === 'USD' ? '$' : 'ل.س';
  };

  return (
    <LanguageContext.Provider value={{
      language,
      currency,
      t,
      toggleLanguage,
      toggleCurrency,
      formatPrice,
      getCurrencySymbol
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
