import contact from '../../assets/images/contact/contact.svg';

const headingSectionArabic = {
    title: "اتصل بنا",
    breadcrumb: [
        { name: "Nafal", className: "breadcrumb-item", link: "/" },
        { name: "الصفحة", className: "breadcrumb-item", link: "#" },
        { name: "اتصل بنا", className: "breadcrumb-item active" }
    ]
}

const contactDataArabic = [
    {
        title: 'الهاتف',
        discription: 'ابدأ العمل مع Nafal الذي يمكن أن يوفر كل شيء',
        data: '+966 51 014 9313',
        textBold: false,
        sameClassName: false,
        icon: 'uil-phone',
    },
    {
        title: 'البريد الإلكتروني',
        discription: 'ابدأ العمل مع Nafal الذي يمكن أن يوفر كل شيء',
        data: 'info@nafal-hvac.sa',
        textBold: false,
        sameClassName: true,
        icon: 'uil-envelope',
    },
    {
        title: 'الموقع',
        discription:
            'طلحة بن عبيد الله، 7946، الفيحاء، الرياض 14253، المملكة العربية السعودية',
        data: 'عرض على الخريطة في جوجل',
        textBold: true,
        sameClassName: true,
        icon: 'uil-map-marker',
    },
]

const formSectionArabic = {
    title: "ابقى على تواصل!",
    img: contact,
    formFields: [
        {
            name: 'name',
            label: 'اسمك',
            type: 'text',
            icon: 'user',
            placeholder: 'اسمك:',
        },
        {
            name: 'email',
            label: 'بريدك الإلكتروني',
            type: 'email',
            icon: 'mail',
            placeholder: 'بريدك الإلكتروني:',
        },
        {
            name: 'mobile',
            label: 'الجوال',
            type: 'text',
            icon: 'phone',
            placeholder: '+966 رقم جوالك:',
        },
        {
            name: 'subject',
            label: 'الموضوع',
            type: 'text',
            icon: 'book',
            placeholder: 'الموضوع الخاص بك:',
        },
        {
            name: 'comments',
            label: 'التعليقات',
            type: 'textarea',
            icon: 'message-circle',
            placeholder: 'رسالتك:',
        },
    ],
    btnText: "إرسال الرسالة"
}


export { headingSectionArabic, contactDataArabic, formSectionArabic }
