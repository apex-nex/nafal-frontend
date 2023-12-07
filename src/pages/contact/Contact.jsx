import React, { useEffect } from 'react';

import HeadingSection from '../../components/contact/HeadingSection';
import ContactSection from '../../components/contact/ContactSection';
import FormSection from '../../components/contact/FormSection';
import MapSection from '../../components/contact/MapSection';
import { MetaTags } from 'react-meta-tags';
import contactPageContent from '../../common/data/contact-page/contactPageContent.json'

const contactSectionContent = contactPageContent?.data?.contactUsPage?.sections?.contactSection;

const Contact = () => {

  return (
    <React.Fragment>
      <MetaTags>
        <title>Contact Us | Nafal</title>
      </MetaTags>
      <div className="heading-section">
        <HeadingSection />
      </div>
      <section className="section pb-0">
        <div className="contact-section">
          <ContactSection contactSectionContent={contactSectionContent} />
        </div>
        <div className="form-section">
          <FormSection />
        </div>

        <div className="map-section">
          <MapSection />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
