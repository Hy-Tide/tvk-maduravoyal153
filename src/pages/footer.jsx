import React from 'react';
import { useNavigate } from 'react-router-dom';
import tvkLogo from '../assets/TVK-LOGO.png';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M17.525 9H14v-2c0-1.032.084-1.682 1.563-1.682h1.868V2.14A25.433 25.433 0 0014.654 2c-2.735 0-4.607 1.68-4.607 4.757V9H7v4h3.047v11h4.032V13h2.645l.801-4z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.235-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.1 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M21.582 6.186a2.6 2.6 0 00-1.83-1.83C18.136 3.93 12 3.93 12 3.93s-6.136 0-7.751.426a2.6 2.6 0 00-1.83 1.83C2 7.801 2 12 2 12s0 4.199.419 5.814a2.6 2.6 0 001.83 1.83c1.615.426 7.751.426 7.751.426s6.136 0 7.751-.426a2.6 2.6 0 001.83-1.83C22 16.199 22 12 22 12s0-4.199-.418-5.814zM9.99 15.485V8.515L15.93 12l-5.94 3.485z" />
  </svg>
);

function Footer({ t }) {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-top">

          <div className="footer-brand-section">
            <div className="footer-logo-box">
              <img src={tvkLogo} alt="TVK Logo Large" className="footer-logo-large" />
              <div className="footer-brand-name">
                <h3>{t.brandName}</h3>
                <span>{t.brandSub.toUpperCase()}</span>
              </div>
            </div>
            <p className="footer-desc">{t.footerDesc}</p>

            <div className="footer-social-box">
              <h4 className="social-title-label">{t.contactSocialTitle}</h4>
              <div className="social-links-row">
                <a href="#" className="social-btn" aria-label="Facebook"><FacebookIcon /></a>
                <a href="#" className="social-btn" aria-label="Twitter"><TwitterIcon /></a>
                <a href="#" className="social-btn" aria-label="Instagram"><InstagramIcon /></a>
                <a href="#" className="social-btn" aria-label="YouTube"><YoutubeIcon /></a>
              </div>
            </div>
          </div>

          <div className="footer-links-section">
            <h4 className="footer-column-title">{t.footerQuickLinks}</h4>
            <div className="footer-links">
              <button className="footer-link" onClick={() => navigate('/')}>{t.navHome}</button>
              <button className="footer-link" onClick={() => navigate('/about')}>{t.navAbout}</button>
              <button className="footer-link" onClick={() => navigate('/schemes')}>{t.navSchemes}</button>
              <button className="footer-link" onClick={() => navigate('/gallery')}>{t.navGallery}</button>
              <button className="footer-link" onClick={() => navigate('/contact')}>{t.navContact}</button>
              <button className="footer-link" onClick={() => navigate('/complaint')}>{t.navComplaint}</button>
            </div>
          </div>

          <div className="footer-contact-section">
            <h4 className="footer-column-title">{t.navContact}</h4>

            <div className="footer-contact-item">
              <span className="footer-item-label">{t.contactPhoneTitle}:</span>
              <span className="footer-item-value">{t.contactPhoneVal}</span>
            </div>

            <div className="footer-contact-item">
              <span className="footer-item-label">{t.contactEmailTitle}:</span>
              <span className="footer-item-value">{t.contactEmailVal}</span>
            </div>

            <div className="footer-contact-item">
              <span className="footer-item-label">{t.contactAddressTitle}:</span>
              <span className="footer-item-value">{t.contactAddressVal}</span>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} {t.footerCopyright}</p>
          </div>
          <div className="footer-dots">
            <p className="footer-designed-by"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;