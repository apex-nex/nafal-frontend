import work1 from "../../../assets/images/home/services/work1.png"
import work2 from "../../../assets/images/home/services/work2.png"
import work3 from "../../../assets/images/home/services/work3.png"
import work4 from "../../../assets/images/home/services/work4.png"
import work5 from "../../../assets/images/home/services/work5.png"
import work6 from "../../../assets/images/home/services/work6.png"

const servicesDataArabic = {
  name: 'قسم الخدمات',
  heading: 'الخدمات',
  title: 'استمتع بخدمات التدفئة والتبريد لدينا',
  readMore: "شاهد المزيد",
  description: [
    {
      content: 'اكتشف الجودة والموثوقية في خدمات التدفئة والتبريد لدينا في ',
      highlight: false,
    },
    {
      content: 'NAFAL HVAC ',
      highlight: true,
    },
    {
      content:
        "نقدم كل ما تحتاجه لضمان راحة وكفاءة منزلك.",
      highlight: false,
    },
  ],
  works: [
    {
      image: work1,
      title: 'Home Conditioners',
      subtitle: 'حلول التبريد لراحة المنازل',
      category: 'سكني',
    },
    {
      image: work2,
      title: 'Package AC',
      subtitle: 'حلول HVAC التجارية المخصصة',
      category: 'تجاري',
    },
    {
      image: work3,
      title: 'Air20',
      subtitle: 'تكنولوجيا HVAC المبتكرة للبنية التحتية',
      category: 'بنية تحتية',
    },
    {
      image: work4,
      title: 'Cassette',
      subtitle: 'حلول بناء فعالة',
      category: 'تجاري',
    },
    {
      image: work5,
      title: 'AC Maintenance',
      subtitle: 'الرعاية الهندسية لتكييف الهواء',
      category: 'سكني',
    },
    {
      image: work6,
      title: 'Duct Construction And Design',
      subtitle: 'حلول البنية التحتية الخبيرة',
      category: 'بنية تحتية',
    },
  ],
  categories : ['All', 'Residential', 'Commercial', 'Infrastructure']
};

export { servicesDataArabic };