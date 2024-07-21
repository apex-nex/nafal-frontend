import React from 'react';
import HeadingSection from '../../components/contact/HeadingSection';
import ContactSection from '../../components/contact/ContactSection';
import FormSection from '../../components/contact/FormSection';
import MapSection from '../../components/contact/MapSection';
import { MetaTags } from 'react-meta-tags';

const Contact = () => {

  return (
    <React.Fragment>
      <MetaTags>
        <title>Contact Us | Etqan Nafal</title>
      </MetaTags>
      {/* heading-section */}
      <HeadingSection />

      <section className="section pb-0">
        {/* contact-section */}
        <ContactSection />

        {/* form-section */}
        <FormSection />

        {/* map-section */}
        <MapSection />

      </section>
    </React.Fragment>
  );
};

export default Contact;
