import React, { useEffect } from 'react';
import Section from './Section';
import Services from './Services';
import Projects from './Projects';

import AboutUs from './AboutUs';
import TeamMembers from './TeamMembers';
import News from './News';
import Popup from '../../components/Layout/popup';

const Index = () => {
  const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.querySelector('.shoppingbtn')?.classList.remove('btn-light');
      document.querySelector('.settingbtn')?.classList.remove('btn-light');
      document.querySelector('.shoppingbtn')?.classList.add('btn-primary');
      document.querySelector('.settingbtn')?.classList.add('btn-soft-primary');

      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.querySelector('.shoppingbtn')?.classList.remove('btn-primary');
      document
        .querySelector('.settingbtn')
        ?.classList.remove('btn-soft-primary');
      document.querySelector('.shoppingbtn')?.classList.add('btn-light');
      document.querySelector('.settingbtn')?.classList.add('btn-light');
      document.getElementById('topnav')?.classList.remove('nav-sticky');
    }
  };

  useEffect(() => {
    document.body.classList = '';
    document.querySelectorAll('#buyButton').forEach((navLink) => {
      navLink.classList.add('btn-light');
      navLink.classList.remove('btn-soft-primary');
      document.getElementById('top-menu').classList.add('nav-light');
    });
    window.addEventListener('scroll', scrollNavigation, true);

    return () => {
      window.removeEventListener('scroll', scrollNavigation, true);
    };
  }, []);

  return (
    <React.Fragment>
      {/* Section */}
      <Section />

      {/* Project Planning */}
      <Services />

      {/* About Us */}
      <section className="section">
        <AboutUs />
        <Projects />
        <TeamMembers />
      </section>
      <News />
      <Popup />
    </React.Fragment>
  );
};

export default Index;
