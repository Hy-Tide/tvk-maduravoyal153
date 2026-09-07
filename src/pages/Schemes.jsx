import React from 'react';

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

function Schemes({ t }) {

  return (
    <section id="schemes" className="page-section schemes-section">
      <div className="container">
        <div className="about-new-header">
          <span className="about-new-sub">{t.schemesHeaderSub}</span>
          <div className="about-new-title-box">
            <div className="about-new-lines">
              <div className="line-red"></div>
              <div className="line-yellow"></div>
            </div>
            <h2 className="about-new-main-title">{t.schemesHeaderTitle}</h2>
          </div>
        </div>

        <div className="schemes-grid">
          {t.schemesList && t.schemesList.map((scheme, idx) => (
            <div key={idx} className="scheme-card">
              <h3 className="scheme-title">{scheme.name}</h3>
              <p className="scheme-desc">{scheme.desc}</p>
              <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="btn-primary-glow btn-scheme">
                {t.schemesApplyBtn} <ArrowRightIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Schemes;
