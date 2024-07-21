import contact from '../../assets/images/contact/contact.svg';

const headingSection = {
    title: "Contact Us",
    breadcrumb: [
        { name: "Etqan Nafal", className: "breadcrumb-item", link: "/" },
        { name: "Page", className: "breadcrumb-item", link: "#" },
        { name: "Contact Us", className: "breadcrumb-item active" }
    ]
}

const contactData = [
    {
        title: 'Phone',
        discription: 'Start working with Etqan Nafal that can provide everything',
        data: '+966 51 014 9313',
        textBold: false,
        sameClassName: false,
        icon: 'uil-phone',
    },
    {
        title: 'Email',
        discription: 'Start working with Etqan Nafal that can provide everything',
        data: 'info@nafal-hvac.sa',
        textBold: false,
        sameClassName: true,
        icon: 'uil-envelope',
    },
    {
        title: 'Location',
        discription:
            'Talha bin Ubaidullah, 7946, Al-Fayhaa Riyadh 14253, Saudi Arabia',
        data: 'View on Google map',
        textBold: true,
        sameClassName: true,
        icon: 'uil-map-marker',
    },
]

const formSection = {
    title: "Get In Touch !",
    img: contact,
    formFields: [
        {
            name: 'name',
            label: 'Your Name',
            type: 'text',
            icon: 'user',
            placeholder: 'Your Name :',
        },
        {
            name: 'email',
            label: 'Your Email',
            type: 'email',
            icon: 'mail',
            placeholder: 'Your email :',
        },
        {
            name: 'mobile',
            label: 'Mobile',
            type: 'text',
            icon: 'phone',
            placeholder: '+966 Your mobile :',
        },
        {
            name: 'subject',
            label: 'Subject',
            type: 'text',
            icon: 'book',
            placeholder: 'Your subject :',
        },
        {
            name: 'comments',
            label: 'Comments',
            type: 'textarea',
            icon: 'message-circle',
            placeholder: 'Your Message :',
        },
    ],
    btnText: "Send Message"
}

// change with only map direct url, you can get from google map
const mapLocation = 'https://www.google.com/maps/place/%D9%86%D9%81%D8%A7%D9%84+%D8%AA%D9%88%D8%B1%D9%8A%D8%AF+%D9%88%D8%AA%D8%B1%D9%83%D9%8A%D8%A8+%D9%88%D8%B5%D9%8A%D8%A7%D9%86%D8%A9+%D8%A7%D9%84%D9%85%D9%83%D9%8A%D9%81%D8%A7%D8%AA%E2%80%AD/@24.685672,46.802642,16z/data=!4m6!3m5!1s0x448c5c09c7a1c7e9:0xc5511f81ae714f68!8m2!3d24.6856717!4d46.8026418!16s%2Fg%2F11l34gbryx?hl=en&entry=ttu'

// change with only embed iframe url, you can get from google map
const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.1993881350722!2d46.80047655550285!3d24.685671684474652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x448c5c09c7a1c7e9%3A0xc5511f81ae714f68!2sNAFAL%20HVAC!5e0!3m2!1sen!2sin!4v1700257259615!5m2!1sen!2sin"

export { headingSection, contactData, formSection, mapLocation, mapUrl }
