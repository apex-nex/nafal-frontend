import React from 'react';
import Carousel from '../../components/home/Carousel';
import AboutSection from '../../components/home/AboutSection';
import Vision from '../../components/home/Vision';
import ServicesSection from '../../components/home/ServicesSection';
import MetaTags from 'react-meta-tags';
import ClientSection from '../../components/home/ClientSection';
import DownloadAppSection from '../../components/home/DownloadAppSection';
import homeContent from '../../../../data/home/homeContent.json';

const carouselSectionContent = homeContent?.data?.homePage?.sections?.carouselSection;
const aboutSectionContent = homeContent?.data?.homePage?.sections?.aboutSection;
const visionSectionContent = homeContent?.data?.homePage?.sections?.visionSection
const servicesSectionContent = homeContent?.data?.homePage?.sections?.servicesSection
const clientSectionConent = homeContent?.data?.homePage?.sections?.clientSection

const Home = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Home | Nafal</title>
        </MetaTags>
        <div className="carousel">
          <Carousel carouselSectionContent={carouselSectionContent} />
        </div>
        <div className="about-section">
          <AboutSection aboutSectionContent={aboutSectionContent} />
        </div>
        <div className="vision-container mb-5">
          <Vision visionSectionContent={visionSectionContent} />
        </div>
      </div>
      <div className="services-container">
        <ServicesSection servicesSectionContent={servicesSectionContent} />
      </div>
      <div className="clients-section">
        <ClientSection clientSectionConent={clientSectionConent} />
      </div>
      <div className="DownloadAppSection-container">
        <DownloadAppSection />
      </div>
    </React.Fragment>
  );
};

export default Home;
