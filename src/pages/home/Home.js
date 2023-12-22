import React from 'react';
import Carousel from '../../components/home/Carousel';
import AboutSection from '../../components/home/AboutSection';
import VideoSection from '../../components/home/VideoSection';
import ServicesSection from '../../components/home/ServicesSection';
import ClientSection from '../../components/home/ClientSection';
import DownloadAppSection from '../../components/home/DownloadAppSection';
import homeContent from '../../common/data/home/homeContent.json';
import Partners from '../../components/home/Partners';
import MetaTags from 'react-meta-tags';

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

        {/* {carousel} */}
        <Carousel carouselSectionContent={carouselSectionContent} />

        {/* {company} */}
        <Partners />
        {/* {about} */}
        <AboutSection aboutSectionContent={aboutSectionContent} />

        {/* {video} */}
        <VideoSection videoSectionContent={videoSectionContent} />

        {/* {services} */}
        <ServicesSection servicesSectionContent={servicesSectionContent} />

        {/* {clients} */}
        <ClientSection clientSectionContent={clientSectionContent} />

        {/* {DownloadAppSection} */}
        <DownloadAppSection />

      </div>
    </React.Fragment>
  );
};

export default Home;
