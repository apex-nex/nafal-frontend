import bg01 from '../../assets/images/home/carousel/bg1.jpg';
import trane from '../../assets/images/home/companies/trane.png';
import daikin from '../../assets/images/home/companies/daikin.svg';
import gree from '../../assets/images/home/companies/gree.svg';
import midea from '../../assets/images/home/companies/midea.svg';
import fuji from '../../assets/images/home/companies/fuji.svg';
import lg from '../../assets/images/home/companies/lg.svg';
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
import userInterface from '../../assets/images/home/download/user_interface.svg';

const carouselData = [
  {
    id: 1,
    image: bg01,
    h1: 'Enhance Comfort with Nafal HVAC',
    p: 'Upgrade your indoor environment with our expert HVAC services. We specialize in efficient heating, cooling, and ventilation for your comfort.',
    btnclass: 'btn btn-icon btn-pills btn-primary lightbox',
    buttontext: ' Watch Now',
    link: '#',
    isVideo: true,
  },
  {
    id: 2,
    image: bg01,
    h1: 'Explore Reliable Climate Solutions',
    p: 'Discover HVAC solutions tailored to your needs. Benefit from our expertise in designing and managing climate control systems.',
    btnclass: 'btn btn-primary',
    btntext: ' About Us',
    link: '/about-us',
    iClass: 'mdi mdi-briefcase',
    isVideo: false,
  },
  {
    id: 3,
    image: bg01,
    h1: 'Contact Nafal HVAC Experts',
    p: 'Get in touch with our HVAC experts for personalized solutions. We provide professional services to ensure your indoor environment is comfortable.',
    btnclass: 'btn btn-primary mouse-down',
    btntext: ' Contact Us',
    link: '/contact-us',
    iClass: 'mdi mdi-phone',
    isVideo: false,
  },
];

const partnersData = [
  {
    id: 1,
    img: daikin,
  },
  {
    id: 2,
    img: trane,
  },
  {
    id: 3,
    img: midea,
  },
  {
    id: 4,
    img: fuji,
  },
  {
    id: 5,
    img: lg,
  },
  {
    id: 6,
    img: gree,
  },
];

const aboutSectionData = {
  badgeText: 'About us',
  image: aboutImg,
  readMore: "Read More",
  titles: [
    {
      title: 'We Lead the Way',
      highlight: false,
      breakPoint: false,
    },
    {
      title: ' in the',
      highlight: false,
      breakPoint: true,
    },
    {
      title: ' HVAC Services',
      highlight: true,
      breakPoint: false,
    },
  ],
  description: [
    {
      content: 'Experience the best in HVAC services with ',
      highlight: false,
    },
    {
      content: 'Your HVAC Company',
      highlight: true,
    },
    {
      content:
        ". We provide top-notch heating, cooling, and ventilation solutions to ensure your home's comfort and efficiency. Our team of experts is committed to delivering outstanding service and reliability.",
      highlight: false,
    },
  ],
};

const videoSectionData = {
  title: 'Your Trusted HVAC Experts',
  description:
    'Experience the difference with Your HVAC Company. We provide innovative solutions for all your heating, cooling, and ventilation needs.',
  videoId: '8_FJEMH8hx0',
  img: videoImg,
};

const clientsData = {
  title: "Our Clients",
  description: "At NAFAL HVAC, our clients' satisfaction is our ultimate goal.We are dedicated to providing exceptional products services customized to their specific requirements. Their happiness and contentment inspire us to consistently surpass expectations.",
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
  ]
}

const appData = {
  img: userInterface,
  title1: "Available for your",
  title2: "Smartphones",
  description1: "Stay connected with",
  highlightedText: "Nafal HVAC",
  description2: "Get our app for all your heating, cooling, and ventilation needs.",
  appStoreTitle: "App Store",
  playStoreTitle: "Play Store",
};

export { carouselData, partnersData, aboutSectionData, videoSectionData, clientsData, appData };
