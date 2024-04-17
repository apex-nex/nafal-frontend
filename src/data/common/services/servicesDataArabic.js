import work1 from "../../../assets/images/home/services/work1.png"
import work2 from "../../../assets/images/home/services/work2.png"
import work3 from "../../../assets/images/home/services/work3.png"
import work4 from "../../../assets/images/home/services/work4.png"
import work5 from "../../../assets/images/home/services/work5.png"
import work6 from "../../../assets/images/home/services/work6.png"
import work7 from "../../../assets/images/home/services/work7.png"

const servicesDataArabic = {
  name: 'Services-Section',
  heading: 'الخدمات',
  title: 'استمتع بخدمات تكييف الهواء لدينا',
  readMore: "المزيد",
  description: [
    {
      content: 'اكتشف جودة وموثوقية خدمات تكييف الهواء لدينا في ',
      highlight: false,
    },
    {
      content: 'نفال لتكييف الهواء',
      highlight: true,
    },
    {
      content:
        "نحن نقدم كل ما تحتاجه لضمان راحة منزلك وكفاءته",
      highlight: false,
    },
  ],
  works: [
    {
      image: work1,
      title: 'Home Conditioners',
      subtitle: 'حلول التبريد للمشاريع السكنية',
      category: 'Residential',
      link: "#"
    },
    {
      image: work2,
      title: 'Package AC',
      subtitle: 'حلول تجارية مخصصة مع نفال',
      category: 'Commercial',
      link: "#"
    },
    {
      image: work3,
      title: 'Air20',
      subtitle: 'نفال تقدم أنظمة التهوية وتكييف الهواء المبتكرة للبنية التحتية ',
      category: 'Commercial',
      link: "#"
    },
    {
      image: work4,
      title: 'Cassette',
      subtitle: 'حلول بناء فعالة',
      category: 'تجاري',
      link: "#"
    },
    {
      image: work5,
      title: 'AC Maintenance',
      subtitle: 'ارفع أداء تكييف الهواء مع الخبراء في نفال',
      category: 'Residential',
      link: "/services/ac-maintenance"
    },
    {
      image: work6,
      title: 'Duct Construction And Design',
      subtitle: 'وتصميم وتركيب مجاري الهواء',
      category: 'Infrastructure',
      link: "/services/duct"
    },
    {
      image: work7,
      title: 'VRF System',
      subtitle: 'تكنولوجيا التبريد الأكثر تقدما',
      category: 'Commercial',
      link: "/services/vrf-system"
    },
  ],
  categories: ['All', 'Residential', 'Commercial', 'Infrastructure']
};

export { servicesDataArabic };