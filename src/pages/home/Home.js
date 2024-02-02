import React from 'react';
import Carousel from '../../components/home/Carousel';
import AboutSection from '../../components/home/AboutSection';
import VideoSection from '../../components/home/VideoSection';
import ServicesSection from '../../components/home/ServicesSection';
import ClientSection from '../../components/home/ClientSection';
import DownloadAppSection from '../../components/home/DownloadAppSection';
import Partners from '../../components/home/Partners';
import MetaTags from 'react-meta-tags';

const Home = () => {
  return (
    <React.Fragment>
      <div className="page-content wrapper bg-light">
        <MetaTags>
          <title>Home | Nafal</title>
        </MetaTags>

        {/* {carousel} */}
        <Carousel />

        {/* {company} */}
        <Partners />
        {/* {about} */}
        <AboutSection />

        {/* {video} */}
        <VideoSection />

        {/* {services} */}
        <ServicesSection />

        {/* {clients} */}
        {/* <ClientSection /> */}

        {/* {DownloadAppSection} */}
        <DownloadAppSection />

      </div>
    </React.Fragment>
  );
};

export default Home;
