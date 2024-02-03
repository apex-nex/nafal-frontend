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
    h1: 'عزز راحتك مع نفال للتكييف',
    p: 'قم بترقية بيئتك الداخلية من خلال خدمات تكييف الهواء (HVAC) المتخصصة لدينا. نحن متخصصون في التدفئة والتبريد والتهوية الفعالة لراحتك',
    btnclass: 'btn btn-icon btn-pills btn-primary lightbox',
    buttontext: ' شاهد الآن',
    link: '#',
    isVideo: true,
  },
  {
    id: 2,
    image: bg01,
    h1: 'إستكشف حلول التكييف الموثوقة',
    p: 'اكتشف حلول التدفئة والتهوية وتكييف الهواء (HVAC) المصممة خصيصًا لتلبية احتياجاتك. استفد من خبرتنا في تصميم وإدارة أنظمة التحكم في المناخ',
    btnclass: 'btn btn-primary',
    btntext: ' حولنا',
    link: '/about-us',
    iClass: 'mdi mdi-briefcase',
    isVideo: false,
  },
  {
    id: 3,
    image: bg01,
    h1: 'إتصل بخبراء نفال لأنظمة تكييف الهواء',
    p: 'تواصل مع خبراء التكييف لدينا للحصول على حلول مخصصة. نحن نقدم خدمات احترافية لضمان أن البيئة الداخلية الخاصة بك مريحة',
    btnclass: 'btn btn-primary mouse-down',
    btntext: ' تواصل معنا',
    link: '/contact-us',
    iClass: 'mdi mdi-phone',
    isVideo: false,
  },
];

const aboutSectionDataArabic = {
  badgeText: 'معلومات عنا',
  image: aboutImg,
  readMore: "اقرأ أكثر",
  titles: [
    {
      title: 'نفال للتكييف',
      highlight: true,
      breakPoint: false,
    },
    {
      title: ' من المؤسسات',
      highlight: false,
      breakPoint: false,
    },
    {
      title: ' الرائدة في خدمات تكييف الهواء والتهوية',
      highlight: false,
      breakPoint: true,
    },
  ],
  description: [
    {
      content: 'استمتع بأفضل خدمات تكييف الهواء (HVAC) مع ',
      highlight: false,
    },
    {
      content: 'شركة نفال.',
      highlight: true,
    },
    {
      content:
        ' نحن نقدم حلول التكييف من الدرجة الأولى لضمان راحة منزلك وكفاءته. يلتزم فريق الخبراء لدينا بتقديم خدمة متميزة وموثوقية.',
      highlight: false,
    },
],
};

const videoSectionDataArabic = {
  title: 'خبراء تكييف الهواء الموثوقون لديك',
  description:
    'اكتشف الفرق مع نفال للتكييف. نحن نقدم حلولاً مبتكرة لجميع احتياجات في التكييف والتهوية',
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
  title1: 'التطبيق متاح',
  title2: 'على الهواتف الذكية ',
  description1: 'ابق على اتصال مع',
  highlightedText: 'نفال للتكييف',
  description2:
    'احصل على تطبيقنا لجميع احتياجات التكييف والتبريد والتهويةاحصل على تطبيقنا لجميع احتياجاتك في التدفئة والتبريد والتهوية',
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
