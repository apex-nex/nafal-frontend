import work1 from "../../../assets/images/home/services/work1.png"
import work2 from "../../../assets/images/home/services/work2.png"
import work3 from "../../../assets/images/home/services/work3.png"
import work4 from "../../../assets/images/home/services/work4.png"
import work5 from "../../../assets/images/home/services/work5.png"
import work6 from "../../../assets/images/home/services/work6.png"
import work7 from "../../../assets/images/home/services/work7.png"

const servicesData = {
  name: 'Services-Section',
  heading: 'Services',
  title: 'Experience Our HVAC Services',
  readMore: "See More",
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
      link: "#"
    },
    {
      image: work2,
      title: 'Package AC',
      subtitle: 'Tailored Commercial HVAC Solutions',
      category: 'Commercial',
      link: "#"
    },
    {
      image: work3,
      title: 'Air20',
      subtitle: 'Innovative HVAC for Infrastructure',
      category: 'Infrastructure',
      link: "#"
    },
    {
      image: work4,
      title: 'Cassette',
      subtitle: 'Efficient Building Solutions',
      category: 'Commercial',
      link: "#"
    },
    {
      image: work5,
      title: 'AC Maintenance',
      subtitle: 'Architectural HVAC Care',
      category: 'Residential',
      link: "/services/ac-maintenance"
    },
    {
      image: work6,
      title: 'Duct Construction And Design',
      subtitle: 'Expert Infrastructure Solutions',
      category: 'Infrastructure',
      link: "/services/duct"
    },
    {
      image: work7,
      title: 'VRF System',
      subtitle: 'The most advanced cooling technology',
      category: 'Commercial',
      link: "/services/vrf-system"
    },
  ],
  categories : ['All', 'Residential', 'Commercial', 'Infrastructure']
};

export { servicesData };