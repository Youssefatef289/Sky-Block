export const products = [
  // {
  //   id: 1,
  //   name: 'أسمنت بورتلاند',
  //   price: 12, // USD
  //   description: 'أسمنت عالي الجودة مناسب لجميع أعمال البناء',
  //   image: 'https://images.unsplash.com/photo-1615874959471-d37d7db2d2fd?w=600&h=400&fit=crop&q=80',
  //   category: 'أسمنت'
  // },
  // {
  //   id: 2,
  //   name: 'حديد تسليح 12مم',
  //   price: 850, // USD (converted from 8500 SAR)
  //   description: 'حديد تسليح عالي الجودة مقاس 12 ملم',
  //   image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&q=80',
  //   category: 'حديد'
  // },
  // {
  //   id: 3,
  //   name: 'بلوك أحمر',
  //   price: 0.13, // USD
  //   description: 'بلوك أحمر عالي الجودة للمباني',
  //   image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80',
  //   category: 'بلوك'
  // },
  // {
  //   id: 4,
  //   name: 'رمل ناعم',
  //   price: 7, // USD
  //   description: 'رمل ناعم منقى للخرسانة والبناء',
  //   image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&q=80',
  //   category: 'رمل'
  // },
  // {
  //   id: 5,
  //   name: 'أسمنت مقاوم للكبريتات',
  //   price: 15, // USD
  //   description: 'أسمنت خاص مقاوم للكبريتات والملوحة',
  //   image: 'https://images.unsplash.com/photo-1615874959471-d37d7db2d2fd?w=600&h=400&fit=crop&q=80',
  //   category: 'أسمنت'
  // },
  // {
  //   id: 6,
  //   name: 'حديد تسليح 16مم',
  //   price: 1200, // USD
  //   description: 'حديد تسليح قوي مقاس 16 ملم',
  //   image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&q=80',
  //   category: 'حديد'
  // },
  // {
  //   id: 7,
  //   name: 'بلوك أسمنتي',
  //   price: 0.21, // USD
  //   description: 'بلوك أسمنتي متين واقتصادي',
  //   image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80',
  //   category: 'بلوك'
  // },
  // {
  //   id: 8,
  //   name: 'رمل خشن',
  //   price: 5, // USD
  //   description: 'رمل خشن للبناء والأساسات',
  //   image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&q=80',
  //   category: 'رمل'
  // },
  // {
  //   id: 9,
  //   name: 'أسمنت أبيض',
  //   price: 17, // USD
  //   description: 'أسمنت أبيض للديكورات والواجهات',
  //   image: 'https://images.unsplash.com/photo-1615874959471-d37d7db2d2fd?w=600&h=400&fit=crop&q=80',
  //   category: 'أسمنت'
  // },
  // {
  //   id: 10,
  //   name: 'حديد تسليح 10مم',
  //   price: 750, // USD
  //   description: 'حديد تسليح مقاس 10 ملم',
  //   image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&q=80',
  //   category: 'حديد'
  // },
  // {
  //   id: 11,
  //   name: 'بلاط سيراميك',
  //   price: 9, // USD
  //   description: 'بلاط سيراميك عالي الجودة',
  //   image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop&q=80',
  //   category: 'بلاط'
  // },
  // {
  //   id: 12,
  //   name: 'جبس',
  //   price: 4, // USD
  //   description: 'جبس للديكورات الداخلية',
  //   image: 'https://images.unsplash.com/photo-1581091226033-d5c48150d11a?w=600&h=400&fit=crop&q=80',
  //   category: 'ديكور'
  // },
  // {
  //   id: 13,
  //   name: 'أخشاب',
  //   price: 53, // USD
  //   description: 'أخشاب عالية الجودة للبناء',
  //   image: 'https://images.unsplash.com/photo-1581091226033-d5c48150d11a?w=600&h=400&fit=crop&q=80',
  //   category: 'أخشاب'
  // },
  // {
  //   id: 14,
  //   name: 'زجاج',
  //   price: 21, // USD
  //   description: 'زجاج مقوى للنوافذ',
  //   image: 'https://images.unsplash.com/photo-1581091226033-d5c48150d11a?w=600&h=400&fit=crop&q=80',
  //   category: 'زجاج'
  // },
  // {
  //   id: 15,
  //   name: 'ألمنيوم',
  //   price: 40, // USD
  //   description: 'ألمنيوم للنوافذ والأبواب',
  //   image: 'https://images.unsplash.com/photo-1581091226033-d5c48150d11a?w=600&h=400&fit=crop&q=80',
  //   category: 'ألمنيوم'
  // },
  // {
  //   id: 16,
  //   name: 'دهان',
  //   price: 11, // USD
  //   description: 'دهان عالي الجودة للمنازل',
  //   image: 'https://images.unsplash.com/photo-1581091226033-d5c48150d11a?w=600&h=400&fit=crop&q=80',
  //   category: 'دهان'
  // },
  // {
  //   id: 17,
  //   name: 'بلاط رخام',
  //   price: 32, // USD
  //   description: 'بلاط رخام فاخر',
  //   image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop&q=80',
  //   category: 'بلاط'
  // },
  // {
  //   id: 18,
  //   name: 'أنابيب PVC',
  //   price: 8, // USD
  //   description: 'أنابيب PVC للسباكة',
  //   image: 'https://images.unsplash.com/photo-1581091226033-d5c48150d11a?w=600&h=400&fit=crop&q=80',
  //   category: 'سباكة'
  // },
  // {
  //   id: 19,
  //   name: 'أسلاك كهربائية',
  //   price: 7, // USD
  //   description: 'أسلاك كهربائية معتمدة',
  //   image: 'https://images.unsplash.com/photo-1581091226033-d5c48150d11a?w=600&h=400&fit=crop&q=80',
  //   category: 'كهرباء'
  // },
  // {
  //   id: 20,
  //   name: 'عزل حراري',
  //   price: 13, // USD
  //   description: 'مواد عزل حراري عالية الجودة',
  //   image: 'https://images.unsplash.com/photo-1581091226033-d5c48150d11a?w=600&h=400&fit=crop&q=80',
  //   category: 'عزل'
  // },
  {
    id: 21,
    name: 'بلوك قياس 15',
    price: 0.25, // USD
    description: 'بلوك خرساني قياس 15 سم مع كرت ضمان الجودة - متين وقوي للبناء',
    image: '/imag/WhatsApp Image 2025-12-13 at 8.19.55 PM.jpeg',
    category: 'بلوك'
  },
  {
    id: 22,
    name: 'بلوك قياس 12',
    price: 0.22, // USD
    description: 'بلوك خرساني قياس 12 سم مع كرت ضمان الجودة والصلابة - متين وقوي للبناء',
    image: '/imag/WhatsApp Image 2025-12-13 at 8.19.55 PM (1).jpeg',
    category: 'بلوك'
  },
  {
    id: 23,
    name: 'أسمنت مسلح أردني',
    price: 14, // USD
    description: 'أسمنت مسلح أردني بوزولانا، قوة 42.5N، ضمانة صلبة وجودة عالية للاستخدامات الإنشائية المختلفة',
    image: '/imag/WhatsApp Image 2025-12-13 at 8.19.58 PM.jpeg',
    category: 'أسمنت'
  },
  {
    id: 24,
    name: 'تيل ربط الجوهرة',
    price: 9, // USD
    description: 'تيل ربط من علامة الجوهرة – أفضل الأنواع لربط الحديد والتسليح بجودة ومتانة عالية',
    image: '/imag/WhatsApp Image 2025-12-13 at 8.19.59 PM.jpeg',
    category: 'حديد'
  },
  {
    id: 25,
    name: 'أسمنت أبيض جمسا تركي',
    price: 18, // USD
    description: 'أسمنت أبيض جمسا تركي - المفضل لأعمال الديكورات والبلاط بجودة عالية وبياض ناصع',
    image: '/imag/WhatsApp Image 2025-12-13 at 8.19.59 PM (2).jpeg',
    category: 'أسمنت'
  },
  {
    id: 26,
    name: 'بلوك قياس 10',
    price: 0.20, // USD
    description: 'بلوك خرساني قياس 10 سم مع كرت ضمان الجودة والصلابة - متين وقوي للبناء',
    image: '/imag/WhatsApp Image 2025-12-13 at 8.20.00 PM.jpeg',
    category: 'بلوك'
  },
  {
    id: 27,
    name: 'نحاته ناعمه',
    price: 6, // USD
    description: 'نحاته ناعمه عالية الجودة - كفالة لكافة الأعمال، مناسبة لللياسة والبناء والديكورات',
    image: '/imag/WhatsApp Image 2025-12-13 at 8.20.01 PM.jpeg',
    category: 'رمل'
  },
  {
    id: 28,
    name: 'رمل أصفر',
    price: 8, // USD
    description: 'رمل أصفر درجة أولى - عالي الجودة منقى ومناسب لجميع أعمال البناء والخرسانة',
    image: '/imag/WhatsApp Image 2025-12-13 at 8.20.01 PM (1).jpeg',
    category: 'رمل'
  },
  {
    id: 29,
    name: 'إنترلوك',
    price: 12, // USD
    description: 'إنترلوك بجميع الموديلات والقياسات - متوفر بأشكال متنوعة: مربع (8×8، 10×10، 15×15، 20×20)، مستطيل (10×20)، ثماني، متشابك، يوني، معين، أمواج، سداسي، دلتا، فطر، رومانا، وغيرها - مناسب للأرصفة والحدائق',
    image: '/imag/WhatsApp Image 2025-12-13 at 8.20.02 PM.jpeg',
    category: 'بلاط'
  },
  {
    id: 30,
    name: 'بلوك زينة',
    price: 3.5, // USD
    description: 'بلوك زينة ديكوري بجميع القياسات - تصميمات عربية وإسلامية أنيقة بفتحات وزخارف متقنة، مناسب للجدران والأسوار والحدائق والديكورات الخارجية والداخلية',
    image: '/imag/WhatsApp Image 2025-12-13 at 8.20.03 PM (1).jpeg',
    category: 'بلوك'
  },
  {
    id: 31,
    name: 'بلوك عازل حراري وعازل صوت',
    price: 0.35, // USD
    description: 'بلوك عازل حراري وعازل صوت بجميع القياسات مع كرت ضمان - يوفر عزل حراري ممتاز وعزل صوتي عالي الجودة، مناسب للمباني السكنية والتجارية لتحقيق الراحة وتوفير الطاقة',
    image: '/imag/WhatsApp Image 2025-12-13 at 8.20.03 PM (3).jpeg',
    category: 'بلوك'
  },
  {
    id: 32,
    name: 'بلوك قياس 20',
    price: 0.28, // USD
    description: 'بلوك خرساني قياس 20 سم مع كرت ضمان الجودة والصلابة - متين وقوي للبناء، مناسب للأعمال الإنشائية الكبيرة',
    image: '/imag/WhatsApp Image 2025-12-13 at 8.30.41 PM.jpeg',
    category: 'بلوك'
  },
  {
    id: 33,
    name: 'بلوك خرساني مجوف',
    price: 0.23, // USD
    description: 'بلوك خرساني مجوف عالي الجودة - متين وخفيف الوزن، مناسب لجميع أعمال البناء والجدران الحاملة',
    image: '/imag/WhatsApp Image 2025-12-13 at 8.20.03 PM (2).jpeg',
    category: 'بلوك'
  },
  {
    id: 34,
    name: 'بلوك خرساني',
    price: 0.24, // USD
    description: 'بلوك خرساني عالي الجودة - متين وقوي، مناسب لجميع أعمال البناء والجدران الحاملة وغير الحاملة',
    image: '/imag/WhatsApp Image 2025-12-13 at 8.19.59 PM (1).jpeg',
    category: 'طوب'
  },
  {
    id: 35,
    name: 'بلوك خرساني مجوف عالي الجودة',
    price: 0.25, // USD
    description: 'بلوك خرساني مجوف عالي الجودة - متين وخفيف الوزن مع فتحات محسّنة، مناسب لجميع أعمال البناء والجدران الحاملة',
    image: '/imag/WhatsApp Image 2025-12-13 at 8.20.03 PM.jpeg',
    category: 'طوب'
  },
  {
    id: 36,
    name: 'إنترلوك نمط متدرج',
    price: 13, // USD
    description: 'إنترلوك بنمط متدرج أنيق - تصميم عصري بألوان متدرجة (رمادي فاتح، متوسط، غامق) يخلق تأثير بصري جذاب، مناسب للممرات والطرقات والحدائق',
    image: '/imag/WhatsApp Image 2025-12-13 at 8.20.02 PM (1).jpeg',
    category: 'بلاط'
  },
  {
    id: 37,
    name: 'أسمنت نشمي ماناسير',
    price: 15, // USD
    description: 'أسمنت نشمي من ماناسير - Portland Pozzolana Cement عالي الجودة، وزن 50 كجم، مناسب لجميع أعمال البناء والإنشاءات',
    image: '/imag/WhatsApp Image 2025-12-13 at 8.19.58 PM (1).jpeg',
    category: 'أسمنت'
  },
  {
    id: 38,
    name: 'أسمنت مسلح بورتاكو',
    price: 16, // USD
    description: 'أسمنت مسلح بورتاكو - CEM II/A-P 42.5 N، مثالي لمختلف الأعمال الإنشائية ومشاريع البنية التحتية والصناعات الخرسانية، وزن 50 كجم',
    image: '/imag/WhatsApp Image 2025-12-13 at 8.20.01 PM (3).jpeg',
    category: 'أسمنت'
  }
];
