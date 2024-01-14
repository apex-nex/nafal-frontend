import bg01 from '../../assets/images/home/carousel/bg1.jpg';
import aboutImg from '../../assets/images/home/about/about.jpg';
import videoImg from '../../assets/images/home/video/img.svg';
import clientImg1 from '../../assets/images/home/clients/01.png';
import clientImg2 from '../../assets/images/home/clients/02.jpg';
import userInterface from '../../assets/images/home/download/user_interface.svg';

const carouselDataArabic = [
  {
    id: 1,
    image: bg01,
    h1: 'تعزيز الراحة مع تدفئة وتبريد Nafal',
    p: 'قم بتحسين بيئتك الداخلية مع خدمات التدفئة والتبريد والتهوية الخاصة بنا. نحن متخصصون في توفير حلول فعالة للتدفئة والتبريد والتهوية لراحتك.',
    btnclass: 'btn btn-icon btn-pills btn-primary lightbox',
    buttontext: ' شاهد الآن',
    link: '#',
    isVideo: true,
  },
  {
    id: 2,
    image: bg01,
    h1: 'استكشاف حلول المناخ الموثوقة',
    p: 'اكتشف حلول التدفئة والتبريد والتهوية المصممة حسب احتياجاتك. استفد من خبرتنا في تصميم وإدارة أنظمة التحكم في المناخ.',
    btnclass: 'btn btn-primary',
    btntext: ' حولنا',
    link: '/about-us',
    iClass: 'mdi mdi-briefcase',
    isVideo: false,
  },
  {
    id: 3,
    image: bg01,
    h1: 'تواصل مع خبراء تدفئة وتبريد Nafal',
    p: 'تواصل مع خبرائنا في مجال التدفئة والتبريد للحصول على حلول مخصصة. نقدم خدمات احترافية لضمان راحة بيئتك الداخلية.',
    btnclass: 'btn btn-primary mouse-down',
    btntext: ' تواصل معنا',
    link: '/contact-us',
    iClass: 'mdi mdi-phone',
    isVideo: false,
  },
];

const aboutSectionDataArabic = {
  badgeText: 'حولنا',
  image: aboutImg,
  readMore: "اقرأ أكثر",
  titles: [
    {
      title: 'نحن نتقدم الطريق',
      highlight: false,
      breakPoint: false,
    },
    {
      title: ' في',
      highlight: false,
      breakPoint: true,
    },
    {
      title: ' خدمات التدفئة والتبريد',
      highlight: true,
      breakPoint: false,
    },
  ],
  description: [
    {
      content: 'استمتع بأفضل خدمات التدفئة والتبريد مع ',
      highlight: false,
    },
    {
      content: 'شركتك للتدفئة والتبريد',
      highlight: true,
    },
    {
      content:
        '. نحن نقدم حلاً ممتازًا للتدفئة والتبريد والتهوية لضمان راحة وكفاءة منزلك. يلتزم فريقنا من الخبراء بتقديم خدمة متميزة وموثوقة.',
      highlight: false,
    },
  ],
};

const videoSectionDataArabic = {
  title: 'خبراؤك الموثوق بهم في التدفئة والتبريد',
  description:
    'اختبر الفارق مع شركتك للتدفئة والتبريد. نقدم حلاً مبتكرًا لجميع احتياجاتك في التدفئة والتبريد والتهوية.',
  videoId: '8_FJEMH8hx0',
  img: videoImg,
};

const clientsDataArabic = {
  title: 'عملاؤنا',
  description:
    'في NAFAL HVAC ، رضا عملائنا هو هدفنا النهائي. نحن ملتزمون بتوفير منتجات وخدمات استثنائية مخصصة لمتطلباتهم الخاصة. سعادتهم ورضاهم يلهمانا لتجاوز توقعاتهم باستمرار.',
  clients: [
    {
      badgeNo: 1,
      img: clientImg1,
      title: "Sara Auto Parts"
    },
    {
      badgeNo: 2,
      img: clientImg2,
      title: "Al - Etimad"
    }
  ]
};

const appDataArabic = {
  img: userInterface,
  title1: 'متاح لـك',
  title2: 'الهواتف الذكية',
  description1: 'ابق على اتصال مع',
  highlightedText: 'NAFAL HVAC',
  description2:
    'احصل على تطبيقنا لجميع احتياجاتك في التدفئة والتبريد والتهوية.',
    appStoreTitle: "App Store",
    playStoreTitle: "Play Store",
};

export {
  carouselDataArabic,
  aboutSectionDataArabic,
  videoSectionDataArabic,
  clientsDataArabic,
  appDataArabic,
};
