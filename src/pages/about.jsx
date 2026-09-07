import React from 'react';
import tamilGrievanceHelp from '../assets/tamil_grievance_help.jpg';

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
);

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);

const HandshakeIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.84-1.25-4 0l-2.79 2.79-2.79-2.79c-1.16-1.25-2.74-1.25-4 0l-3 3c-.68.71-1.25 2.17 0 3.42l5.79 5.79-3.79 3.79 1.41 1.41 3.79-3.79 2.29 2.29c.39.39.9.59 1.41.59s1.02-.2 1.41-.59l7.27-7.27zM6.54 3.71l3 3-.79.79-3-3 .79-.79zm-2 2l3 3-.79.79-3-3 .79-.79zm7.04 12.04l-2.29-2.29 2.79-2.79 2.29 2.29-2.79 2.79zm6.04-6.04l-7.27 7.27-2.79-2.79 7.27-7.27 1.41 1.41-5.86 5.86 1.41 1.41 5.86-5.86 1.41 1.41z" />
  </svg>
);

function About({ t }) {

  return (
    <div>
      <section id="about" className="page-section about-section-new">
        <div className="container">
          <div className="about-new-header">
            <span className="about-new-sub">{t.aboutHeaderTitle}</span>
            <div className="about-new-title-box">
              <div className="about-new-lines">
                <div className="line-red"></div>
                <div className="line-yellow"></div>
              </div>
              <h2 className="about-new-main-title">{t.aboutWhoTitle}</h2>
            </div>
          </div>

          <div className="about-new-grid">
            <div className="about-new-left">
              <p className="about-new-para">{t.aboutWhoPara1}</p>
              <div className="about-new-image-wrapper">
                <img src={tamilGrievanceHelp} alt="About TVK Leader" className="about-new-img" />
              </div>
            </div>

            <div className="about-new-right">
              <div className="about-new-card">
                <div className="about-new-card-icon"><EyeIcon /></div>
                <div className="about-new-card-content">
                  <h3>{t.purpose1Title}</h3>
                  <p>{t.purpose1Desc}</p>
                </div>
              </div>

              <div className="about-new-card">
                <div className="about-new-card-icon"><TargetIcon /></div>
                <div className="about-new-card-content">
                  <h3>{t.purpose2Title}</h3>
                  <p>{t.purpose2Desc}</p>
                </div>
              </div>

              <div className="about-new-card">
                <div className="about-new-card-icon"><HandshakeIcon /></div>
                <div className="about-new-card-content">
                  <h3>{t.purpose3Title}</h3>
                  <p>{t.purpose3Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;