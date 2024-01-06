const contactData = [
    {
        title: 'Phone',
        discription: 'Start working with Nafal that can provide everything',
        data: '+966 51 014 9313',
        textBold: false,
        sameClassName: false,
        icon: 'uil-phone',
    },
    {
        title: 'Email',
        discription: 'Start working with Nafal that can provide everything',
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

const headingSection = {
    title : "Contact Us",
    breadcrumb : [
        { name: "Nafal", className: "breadcrumb-item", link: "/" },
        { name: "Page", className: "breadcrumb-item", link: "#" },
        { name: "Contact Us", className: "breadcrumb-item active" }
    ]
}

export { contactData, headingSection }
