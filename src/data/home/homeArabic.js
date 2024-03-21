import bg01 from '../../assets/images/home/carousel/bg1.jpg';
import aboutImg from '../../assets/images/home/about/about.jpg';
import videoImg from '../../assets/images/home/video/img.svg';
import clientImg1 from '../../assets/images/home/clients/01.png';
import clientImg2 from '../../assets/images/home/clients/02.png';
import clientImg3 from '../../assets/images/home/clients/03.png';
import clientImg4 from '../../assets/images/home/clients/04.png';
import clientImg5 from '../../assets/images/home/clients/05.png';
import clientImg6 from '../../assets/images/home/clients/06.png';
import clientImg7 from '../../assets/images/home/clients/07.png';
import clientImg8 from '../../assets/images/home/clients/08.png';
import clientImg9 from '../../assets/images/home/clients/09.png';
import clientImg10 from '../../assets/images/home/clients/10.png';
import clientImg11 from '../../assets/images/home/clients/11.jpg';
import clientImg12 from '../../assets/images/home/clients/12.png';
import clientImg13 from '../../assets/images/home/clients/13.png';
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
  // clients: [
  //   {
  //     badgeNo: 1,
  //     img: clientImg1,
  //     title: "Sara Auto Parts"
  //   },
  //   {
  //     badgeNo: 2,
  //     img: clientImg11,
  //     title: "Al - Etimad"
  //   }
  // ]
  clients: [
    {
      badgeNo: 1,
      img: clientImg1,
      title: "Sara Auto Parts"
    },
    {
      badgeNo: 2,
      img: clientImg2,
      title: "Mumtaz Policlinic"
    },
    {
      badgeNo: 3,
      img: clientImg3,
      title: "project Way"
    },
    {
      badgeNo: 4,
      img: clientImg4,
      title: "Saudi Traffic Police"
    },
    {
      badgeNo: 5,
      img: clientImg5,
      title: "Hayat Policlinic"
    },
    {
      badgeNo: 6,
      img: clientImg6,
      title: "Taib Medical Services"
    },
    {
      badgeNo: 7,
      img: clientImg7,
      title: "Akbar Alam Travel"
    },
    {
      badgeNo: 8,
      img: clientImg8,
      title: "Perfect Vision Clinic"
    },
    {
      badgeNo: 9,
      img: clientImg9,
      title: "Future Homes"
    },
    {
      badgeNo: 10,
      img: clientImg10,
      title: "Q Choice Company"
    },
    {
      badgeNo: 11,
      img: clientImg11,
      title: "Al - Etimad"
    },
    {
      badgeNo: 12,
      img: clientImg12,
      title: "Dawaak Medical"
    },
    {
      badgeNo: 13,
      img: clientImg13,
      title: "STEP TO THE SUN"
    },
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
