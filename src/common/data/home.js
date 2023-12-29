import bg01 from "../../assets/images/home/carousel/bg1.jpg";
import trane from "../../assets/images/home/companies/trane.png";
import daikin from "../../assets/images/home/companies/daikin.svg";
import gree from "../../assets/images/home/companies/gree.svg";
import midea from "../../assets/images/home/companies/midea.svg";
import fuji from "../../assets/images/home/companies/fuji.svg";
import lg from "../../assets/images/home/companies/lg.svg";
import about from "../../assets/images/home/about/about.jpg";

const CarouselData = [
    {
        id: 1,
        image: bg01,
        h1: "Enhance Comfort with Nafal HVAC",
        p: "Upgrade your indoor environment with our expert HVAC services. We specialize in efficient heating, cooling, and ventilation for your comfort.",
        btnclass: "btn btn-icon btn-pills btn-primary lightbox",
        buttontext: " Watch Now",
        link: "#",
        isVideo: true,
    },
    {
        id: 2,
        image: bg01,
        h1: "Explore Reliable Climate Solutions",
        p: "Discover HVAC solutions tailored to your needs. Benefit from our expertise in designing and managing climate control systems.",
        btnclass: "btn btn-primary",
        btntext: " About Us",
        link: "/about-us",
        iClass: "mdi mdi-briefcase",
        isVideo: false,
    },
    {
        id: 3,
        image: bg01,
        h1: "Contact Nafal HVAC Experts",
        p: "Get in touch with our HVAC experts for personalized solutions. We provide professional services to ensure your indoor environment is comfortable.",
        btnclass: "btn btn-primary mouse-down",
        btntext: " Contact Us",
        link: "/contact-us",
        iClass: "mdi mdi-phone",
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

const AboutSectionData = {
    badgeText: "About us",
    image: about,
    titles: [
        {
            title: "We Lead the Way",
            highlight: false,
            breakPoint: false
        },
        {
            title: " in the",
            highlight: false,
            breakPoint: true
        },
        {
            title: " HVAC Services",
            highlight: true,
            breakPoint: false
        }
    ],
    description: [
        {
            content: "Experience the best in HVAC services with ",
            highlight: false
        },
        {
            content: "Your HVAC Company",
            highlight: true
        },
        {
            content: ". We provide top-notch heating, cooling, and ventilation solutions to ensure your home's comfort and efficiency. Our team of experts is committed to delivering outstanding service and reliability.",
            highlight: false
        }
    ]
};

export {
    CarouselData,
    partnersData,
    AboutSectionData,
}