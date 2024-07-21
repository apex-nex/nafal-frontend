import contact from '../../assets/images/contact/contact.svg';

const headingSectionArabic = {
    title: "اتصل بنا",
    breadcrumb: [
        { name: "Etqan Nafal", className: "breadcrumb-item", link: "/" },
        { name: "الصفحة", className: "breadcrumb-item", link: "#" },
        { name: "اتصل بنا", className: "breadcrumb-item active" }
    ]
}

const contactDataArabic = [
    {
        title: 'الهاتف',
        discription: 'ابدأ العمل مع اتقان نفال التي يمكنها تقديم كل حلول التكييف والتهوية',
        data: '+966 51 014 9313',
        textBold: false,
        sameClassName: false,
        icon: 'uil-phone',
    },
    {
        title: 'الايميل',
        discription: 'ابدأ العمل مع اتقان نفال التي يمكنها تقديم كل حلول التكييف والتهوية',
        data: 'info@nafal-hvac.sa',
        textBold: false,
        sameClassName: true,
        icon: 'uil-envelope',
    },
    {
        title: 'الموقع',
        discription:
            'طلحة بن عبيد الله، 7946، الفيحاء الرياض 14253، المملكة العربية السعودية',
        data: 'عرض على خريطة جوجل',
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
            label: 'بريدك الالكتروني',
            type: 'email',
            icon: 'mail',
            placeholder: 'بريدك الإلكتروني:',
        },
        {
            name: 'mobile',
            label: 'رقم هاتفك',
            type: 'text',
            icon: 'phone',
            placeholder: '+966 رقم جوالك:',
        },
        {
            name: 'subject',
            label: 'العنوان',
            type: 'text',
            icon: 'book',
            placeholder: 'الموضوع الخاص بك:',
        },
        {
            name: 'comments',
            label: 'تعليقات',
            type: 'textarea',
            icon: 'message-circle',
            placeholder: 'رسالتك:',
        },
    ],
    btnText: "إرسال الرسالة"
}


export { headingSectionArabic, contactDataArabic, formSectionArabic }
