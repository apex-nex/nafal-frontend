import React from 'react';
import Carousel from '../../components/home/Carousel';
import AboutSection from '../../components/home/AboutSection';
import VideoSection from '../../components/home/VideoSection';
import ServicesSection from '../../components/home/ServicesSection';
import MetaTags from 'react-meta-tags';
import ClientSection from '../../components/home/ClientSection';
import DownloadAppSection from '../../components/home/DownloadAppSection';
import homeContent from '../../common/data/home/homeContent.json';

const carouselSectionContent = homeContent?.data?.homePage?.sections?.carouselSection;
const aboutSectionContent = homeContent?.data?.homePage?.sections?.aboutSection;
const videoSectionContent = homeContent?.data?.homePage?.sections?.videoSection
const servicesSectionContent = homeContent?.data?.homePage?.sections?.servicesSection
const clientSectionContent = homeContent?.data?.homePage?.sections?.clientSection

const Home = () => {
  return (
    <React.Fragment>
      <div className="page-content wrapper bg-light">
        <MetaTags>
          <title>Home | Nafal</title>
        </MetaTags>
        <div className="carousel">
          <Carousel carouselSectionContent={carouselSectionContent} />
        </div>
        <div className="about-section">
          <AboutSection aboutSectionContent={aboutSectionContent} />
        </div>
        <div className="video-container mb-5">
          <VideoSection videoSectionContent={videoSectionContent} />
        </div>
      </div>
      <div className="services-container">
        <ServicesSection servicesSectionContent={servicesSectionContent} />
      </div>
      <div className="clients-section">
        <ClientSection clientSectionContent={clientSectionContent} />
      </div>
      <div className="DownloadAppSection-container">
        <DownloadAppSection />
      </div>
    </React.Fragment>
  );
};

export default Home;
