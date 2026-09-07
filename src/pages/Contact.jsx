import React from 'react';

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.07V7h-2v8l6.5 3.9 1-1.6-5.5-3.23z" />
  </svg>
);

function Contact({ t }) {

  return (
    <section id="contact" className="page-section contact-section">
      <div className="container">
        <div className="about-new-header">
          <span className="about-new-sub">{t.contactHeaderSub}</span>
          <div className="about-new-title-box">
            <div className="about-new-lines">
              <div className="line-red"></div>
              <div className="line-yellow"></div>
            </div>
            <h2 className="about-new-main-title">{t.contactHeaderTitle}</h2>
          </div>
        </div>
      </div>

      <div className="contact-main-content">
        <div className="container">
          <div className="contact-info-grid">

            {/* Contact Information */}
            <div className="contact-details-column">
              <div className="contact-org-badge">
                <h2>{t.contactOrgName}</h2>
              </div>

              <div className="contact-card">
                <div className="contact-icon red"><PhoneIcon /></div>
                <div>
                  <h4>{t.contactPhoneTitle}</h4>
                  <p className="contact-highlight">{t.contactPhoneVal}</p>
                  <span className="contact-note">{t.contactTollFree}</span>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon yellow"><EnvelopeIcon /></div>
                <div>
                  <h4>{t.contactEmailTitle}</h4>
                  <p className="contact-highlight">{t.contactEmailVal}</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon red"><MapPinIcon /></div>
                <div>
                  <h4>{t.contactAddressTitle}</h4>
                  <p className="contact-highlight">{t.contactAddressVal}</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon yellow"><ClockIcon /></div>
                <div>
                  <h4>{t.contactHoursTitle}</h4>
                  <p className="contact-highlight">{t.contactHoursVal}</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Column */}
            <div className="contact-map-column">
              <div className="map-card-wrapper">
                <h3>{t.contactMapTitle}</h3>
                <div className="map-frame-box">
                  <iframe
                    title="TVK Maduravoyal Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3!2d80.1565!3d13.0340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260da00000001%3A0x1!2sPalayakkar+Street%2C+Porur%2C+Chennai%2C+Tamil+Nadu+600116!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                    width="100%"
                    height="340"
                    style={{ border: 0, borderRadius: '14px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <a
                  href="https://maps.google.com/?q=Palayakkar+Street+Porur+Chennai+600116"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary-glow map-directions-btn"
                >
                  <MapPinIcon /> {t.contactMapBtn}
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
