import work1 from "../assets/images/home/services/work1.png"
import work2 from "../assets/images/home/services/work2.png"
import work3 from "../assets/images/home/services/work3.png"
import work4 from "../assets/images/home/services/work4.png"
import work5 from "../assets/images/home/services/work5.png"
import work6 from "../assets/images/home/services/work6.png"

const servicesData = {
  name: 'Services-Section',
  heading: 'Services',
  title: 'Experience Our HVAC Services',
  description: [
    {
      content: 'Discover the quality and reliability of our HVAC services at ',
      highlight: false,
    },
    {
      content: 'NAFAL HVAC ',
      highlight: true,
    },
    {
      content:
        "We provide everything you need to ensure your home's comfort and efficiency.",
      highlight: false,
    },
  ],
  works: [
    {
      image: work1,
      title: 'Home Conditioners',
      subtitle: 'Cooling Solutions for Residential Comfort',
      category: 'Residential',
    },
    {
      image: work2,
      title: 'Package AC',
      subtitle: 'Tailored Commercial HVAC Solutions',
      category: 'Commercial',
    },
    {
      image: work3,
      title: 'Air20',
      subtitle: 'Innovative HVAC for Infrastructure',
      category: 'Infrastructure',
    },
    {
      image: work4,
      title: 'Cassette',
      subtitle: 'Efficient Building Solutions',
      category: 'Commercial',
    },
    {
      image: work5,
      title: 'AC Maintenance',
      subtitle: 'Architectural HVAC Care',
      category: 'Residential',
    },
    {
      image: work6,
      title: 'Duct Construction And Design',
      subtitle: 'Expert Infrastructure Solutions',
      category: 'Infrastructure',
    },
  ],
};

export { servicesData };