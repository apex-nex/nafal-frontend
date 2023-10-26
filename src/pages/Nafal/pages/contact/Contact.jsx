import React, { useEffect } from 'react';

import HeadingSection from '../../components/contact/HeadingSection';
import ContactSection from '../../components/contact/ContactSection';
import FormSection from '../../components/contact/FormSection';
import MapSection from '../../components/contact/MapSection';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contactus | Nafal';
  }, []);
  return (
    <React.Fragment>
      <div className="heading-section">
        <HeadingSection />
      </div>

      <section className="section pb-0">
        <div className="contact-section">
          <ContactSection />
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
