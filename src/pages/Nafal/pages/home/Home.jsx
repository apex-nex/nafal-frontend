import React from 'react'
import Carousel from '../../components/home/Carousel'
import AboutSection from '../../components/home/AboutSection'
import Vision from '../../components/home/Vision'
import ServicesSection from '../../components/home/ServicesSection'
import MetaTags from 'react-meta-tags';
import ClientSection from '../../components/home/ClientSection'
import DownloadAppSection from '../../components/home/DownloadAppSection'

const Home = () => {
  return (
    <React.Fragment>
      <div className="page-content wrapper bg-light">
        <MetaTags>
          <title>Home | Nafal</title>
        </MetaTags>
        <div className="carousel">
          <Carousel />
        </div>
        <div className="about-section">
          <AboutSection />
        </div>
        <div className="vision-container mb-5">
          <Vision />
        </div>
      </div>
      <div className='services-container'>
     <ServicesSection/>
      </div>
      <div className='clients-section'>
          <ClientSection/>
      </div>
      <div className='DownloadAppSection-container'>
     <DownloadAppSection/>
      </div>
    </React.Fragment>
  );
};

export default Home;
