import React, { useState, useEffect } from 'react';
import tvkLogo from './assets/TVK-LOGO.png';
import tvkBanner from './assets/Banner_1.png';
import tvkBanner1 from './assets/Banner_3.jpeg';
import tvkBanner2 from './assets/Banner_2.png';
import tamilMedicalCamp from './assets/tamil_medical_camp.jpg';
import tamilGrievanceHelp from './assets/tamil_grievance_help.jpg';
import tamilYouthEvent from './assets/tamil_youth_event.jpg';
import tamilRallyHero from './assets/tamil_rally_hero.jpg';
import bannerVijayRally from './assets/banner_vijay_rally.jpg';
import bannerVijaySpeech from './assets/banner_vijay_speech.jpg';
import bannerVijayStage from './assets/banner_vijay_stage.jpg';
import { translations } from './translations';
import './App.css';

// SVG Icons
const FlagIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

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

const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

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

function App() {
  const [lang, setLang] = useState('en');
  const [activeSection, setActiveSection] = useState('home');
  const t = translations[lang];

  // Hero Banner Images Carousel (Using tvk_banner.jpeg, tvk_banner1.jpeg, tvk_banner2.jpeg)
  const heroBannerImages = [
    tvkBanner,
    tvkBanner1,
    tvkBanner2
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto-advance banner carousel every 5 seconds (5000ms)
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % heroBannerImages.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [heroBannerImages.length]);

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? heroBannerImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % heroBannerImages.length);
  };

  // Complaint Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    subject: '',
    voterId: '',
    image: null,
    details: ''
  });
  const [formError, setFormError] = useState('');
  const [submittedTicket, setSubmittedTicket] = useState(null);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll listener to auto-highlight active section in header nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'gallery', 'contact', 'complaint'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form input change handler
  const handleInputChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    setFormError('');
  };

  // Complaint Form Submit Handler
  const handleComplaintSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() ||
      !formData.address.trim() || !formData.subject.trim() || !formData.voterId.trim() || !formData.details.trim()) {
      setFormError(t.valRequired);
      return;
    }

    if (formData.voterId.trim().length < 10) {
      setFormError(t.valInvalidVoterId);
      return;
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setFormError(t.valInvalidPhone);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormError(t.valInvalidEmail);
      return;
    }

    const ticketId = `TVK-MAD-${Math.floor(1000 + Math.random() * 9000)}`;

    setSubmittedTicket({
      id: ticketId,
      name: formData.name,
      email: formData.email,
      date: new Date().toLocaleDateString()
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      subject: '',
      voterId: '',
      image: null,
      details: ''
    });
  };

  return (
    <div className="app-container">

      {/* Top Ticker & Info Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <span className="live-badge">TVK</span>
          <span className="ticker-text">{t.topBarText}</span>
        </div>
        <div className="top-bar-right">
          <div className="hotline-badge">
            <span>{t.hotlineLabel}</span> <strong>1800-TVK-MAD</strong>
          </div>
          <div className="language-switcher">
            <button
              className={`lang-btn ${lang === 'ta' ? 'active' : ''}`}
              onClick={() => setLang('ta')}
            >
              தமிழ்
            </button>
            <div className="lang-divider"></div>
            <button
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              English
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="navbar-wrapper">
        <nav className="navbar">

          {/* Logo & Brand Title */}
          <div className="navbar-brand" onClick={() => scrollToSection('home')}>
            <div className="logo-badge-container">
              <img src={tvkLogo} alt="TVK Logo" className="header-logo-large" />
              <div className="logo-glow-ring"></div>
            </div>

            <div className="brand-text-block">
              <div className="brand-primary-name">
                <span className="brand-name-highlight">{t.brandName}</span>
              </div>
              <div className="brand-constituency-tag">
                <span className="gold-dot">●</span> {t.brandSub}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="navbar-links">
            <li>
              <button
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => scrollToSection('home')}
              >
                {t.navHome}
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => scrollToSection('about')}
              >
                {t.navAbout}
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`}
                onClick={() => scrollToSection('gallery')}
              >
                {t.navGallery}
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                {t.navContact}
              </button>
            </li>
            {/* <li>
              <button
                className={`nav-link ${activeSection === 'complaint' ? 'active' : ''}`}
                onClick={() => scrollToSection('complaint')}
              >
                {t.navComplaint}
              </button>
            </li> */}
          </ul>

          {/* Header Action Button */}
          <div className="navbar-action">
            <button
              className="btn-primary-glow"
              onClick={() => scrollToSection('complaint')}
            >
              <FlagIcon />
              <span>{t.navComplaint}</span>
            </button>
          </div>

        </nav>
      </header>

      {/* MAIN SINGLE PAGE CONTENT */}
      <main className="single-page-content">

        {/* SECTION 1: HOME */}
        <section id="home" className="page-section home-section">

          {/* AUTO ROTATING HERO CAROUSEL BANNER (tvk_banner.jpeg, tvk_banner1.jpeg, tvk_banner2.jpeg) */}
          <div className="hero-banner-container">

            {/* Background Slides */}
            {heroBannerImages.map((imgSrc, index) => (
              <div
                key={index}
                className={`hero-slide-bg ${index === currentSlideIndex ? 'active' : ''}`}
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(10,13,20,0.88) 0%, rgba(18,22,36,0.75) 50%, rgba(217,27,36,0.3) 100%), url(${imgSrc})`
                }}
              />
            ))}

            <div className="hero-grid-pattern"></div>

            {/* Slider Navigation Arrows */}
            {/* <button className="slider-nav-btn prev" onClick={handlePrevSlide} aria-label="Previous Slide">
              <ChevronLeftIcon />
            </button>
            <button className="slider-nav-btn next" onClick={handleNextSlide} aria-label="Next Slide">
              <ChevronRightIcon />
            </button> */}

            {/* Hero Text Content */}
            <div className="hero-content">
              <div className="hero-pill-tag">
                <span className="flag-dot"></span>
                {t.heroTagline1}
              </div>

              <h1 className="hero-main-title">
                <span className="title-red">{t.heroTitlePrefix}</span>
                <span className="title-sub">{t.heroTitleSub}</span>
              </h1>

              <p className="hero-subtitle">
                {t.heroSubtitle}
              </p>

              <div className="hero-actions">
                <button className="btn-hero-primary" onClick={() => scrollToSection('complaint')}>
                  {t.heroCtaComplaint} <ArrowRightIcon />
                </button>
                <button className="btn-hero-secondary" onClick={() => scrollToSection('about')}>
                  {t.heroCtaAbout}
                </button>
              </div>

              {/* Stats Bar */}
              <div className="hero-stats-bar">
                <div className="stat-card">
                  <div className="stat-num red">{t.stat1Num}</div>
                  <div className="stat-label">{t.stat1Label}</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-card">
                  <div className="stat-num yellow">{t.stat2Num}</div>
                  <div className="stat-label">{t.stat2Label}</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-card">
                  <div className="stat-num red">{t.stat3Num}</div>
                  <div className="stat-label">{t.stat3Label}</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-card">
                  <div className="stat-num yellow">{t.stat4Num}</div>
                  <div className="stat-label">{t.stat4Label}</div>
                </div>
              </div>
            </div>

            {/* Emblem Accent */}
            <div className="hero-emblem-wrapper">
              <div className="hero-emblem-card">
                <img src={tvkLogo} alt="TVK Emblem" className="hero-logo-emblem" />
                <div className="emblem-label">TVK MADURAVOYAL</div>
              </div>
            </div>

            {/* Slide Pagination Indicator Dots */}
            {/* <div className="hero-pagination-dots">
              {heroBannerImages.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlideIndex ? 'active' : ''}`}
                  onClick={() => setCurrentSlideIndex(index)}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div> */}

          </div>



        </section>

        {/* SECTION 2: ABOUT US */}
        <section id="about" className="page-section about-section-new">
          <div className="container">
            {/* Header Area */}
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

            {/* Body Area */}
            <div className="about-new-grid">
              {/* Left Column */}
              <div className="about-new-left">
                <p className="about-new-para">{t.aboutWhoPara1}</p>
                <div className="about-new-image-wrapper">
                  <img src={tamilGrievanceHelp} alt="About TVK Leader" className="about-new-img" />
                </div>
              </div>

              {/* Right Column (Cards) */}
              <div className="about-new-right">
                <div className="about-new-card">
                  <div className="about-new-card-icon">
                    <EyeIcon />
                  </div>
                  <div className="about-new-card-content">
                    <h3>{t.purpose1Title}</h3>
                    <p>{t.purpose1Desc}</p>
                  </div>
                </div>

                <div className="about-new-card">
                  <div className="about-new-card-icon">
                    <TargetIcon />
                  </div>
                  <div className="about-new-card-content">
                    <h3>{t.purpose2Title}</h3>
                    <p>{t.purpose2Desc}</p>
                  </div>
                </div>

                <div className="about-new-card">
                  <div className="about-new-card-icon">
                    <HandshakeIcon />
                  </div>
                  <div className="about-new-card-content">
                    <h3>{t.purpose3Title}</h3>
                    <p>{t.purpose3Desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Portals Section */}
        <section className="page-section quick-portals-wrapper">
          <div className="home-portals-section">
            <div className="container">
              <div className="section-title-wrapper">
                <div className="vertical-lines">
                  <div className="line-yellow"></div>
                </div>
                <div>
                  <h2 className="section-title">{t.homeQuickActionsTitle}</h2>
                </div>
              </div>

              <div className="portals-grid">
                <div className="portal-card border-red">
                  <div className="portal-icon red"><FlagIcon /></div>
                  <h3>{t.homeAction1Title}</h3>
                  <p>{t.homeAction1Desc}</p>
                  <button className="btn-primary-glow" onClick={() => scrollToSection('complaint')}>
                    {t.navComplaint} <ArrowRightIcon />
                  </button>
                </div>

                <div className="portal-card border-yellow">
                  <div className="portal-icon yellow"><MapPinIcon /></div>
                  <h3>{t.homeAction2Title}</h3>
                  <p>{t.homeAction2Desc}</p>
                  <button className="btn-secondary-glow" onClick={() => scrollToSection('contact')}>
                    {t.navContact} <ArrowRightIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery" className="page-section gallery-section">
          <div className="container">
            <div className="about-new-header">
              <span className="about-new-sub">{t.galleryHeaderSub}</span>
              <div className="about-new-title-box">
                <div className="about-new-lines">
                  <div className="line-red"></div>
                  <div className="line-yellow"></div>
                </div>
                <h2 className="about-new-main-title">{t.galleryHeaderTitle}</h2>
              </div>
            </div>
            
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src={tamilRallyHero} alt="TVK Rally" />
              </div>
              <div className="gallery-item">
                <img src={tamilMedicalCamp} alt="Medical Camp" />
              </div>
              <div className="gallery-item">
                <img src={tamilGrievanceHelp} alt="Grievance Help" />
              </div>
              <div className="gallery-item">
                <img src={bannerVijayRally} alt="Vijay Rally" />
              </div>
              <div className="gallery-item">
                <img src={bannerVijaySpeech} alt="Vijay Speech" />
              </div>
              <div className="gallery-item">
                <img src={bannerVijayStage} alt="Vijay Stage" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CONTACT (DEDICATED CONTACT DETAILS + GOOGLE MAPS ONLY) */}
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.602693892789!2d80.1650390148229!3d13.060377990797673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261394b9b7a4b%3A0x6b5e0c8b6b24a3a!2sMaduravoyal%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                        width="100%"
                        height="340"
                        style={{ border: 0, borderRadius: '14px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>

                    <a
                      href="https://maps.google.com/?q=Maduravoyal+Chennai"
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

        {/* SECTION 4: COMPLAINT (DEDICATED COMPLAINT FORM ONLY) */}
        <section id="complaint" className="page-section complaint-section">
          <div className="container">
            <div className="about-new-header">
              <span className="about-new-sub">{t.complaintNotice}</span>
              <div className="about-new-title-box">
                <div className="about-new-lines">
                  <div className="line-red"></div>
                  <div className="line-yellow"></div>
                </div>
                <h2 className="about-new-main-title">{t.complaintHeaderTitle}</h2>
              </div>
            </div>
          </div>

          <div className="complaint-main-content">
            <div className="container max-w-750">

              {submittedTicket ? (
                /* Success Message Box */
                <div className="complaint-success-box">
                  <div className="success-icon-ring">
                    <CheckCircleIcon />
                  </div>
                  <h2>{t.successTitle}</h2>
                  <p>{t.successMessage}</p>

                  <div className="ticket-badge-card">
                    <span className="ticket-label">{t.successTicketLabel}</span>
                    <strong className="ticket-code">{submittedTicket.id}</strong>
                  </div>

                  <p className="success-subtext">{t.successNote}</p>

                  <button
                    className="btn-primary-glow"
                    onClick={() => setSubmittedTicket(null)}
                  >
                    {t.newComplaintBtn}
                  </button>
                </div>
              ) : (
                /* Complaint Submission Form */
                <div className="complaint-form-card">

                  {formError && (
                    <div className="form-error-banner">
                      ⚠️ {formError}
                    </div>
                  )}

                  <form onSubmit={handleComplaintSubmit}>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">{t.formName}</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder={t.formNamePlaceholder}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">{t.formPhone}</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder={t.formPhonePlaceholder}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">{t.formEmail}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder={t.formEmailPlaceholder}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">{t.formAddress}</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder={t.formAddressPlaceholder}
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">{t.formSubject}</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder={t.formSubjectPlaceholder}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">{t.formVoterId}</label>
                        <input
                          type="text"
                          name="voterId"
                          value={formData.voterId}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder={t.formVoterIdPlaceholder}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">{t.formImage}</label>
                      <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleInputChange}
                        className="form-input file-input"
                        style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.05)' }}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">{t.formDetails}</label>
                      <textarea
                        name="details"
                        value={formData.details}
                        onChange={handleInputChange}
                        className="form-textarea"
                        placeholder={t.formDetailsPlaceholder}
                      ></textarea>
                    </div>

                    <div className="form-footer">
                      <span className="form-note">{t.formMandatory}</span>
                      <button type="submit" className="btn-submit-glow">
                        {t.formSubmitBtn} <SendIcon />
                      </button>
                    </div>

                  </form>

                </div>
              )}

            </div>
          </div>
        </section>

      </main>

      {/* Footer Component */}
      <footer className="footer">
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
                <button className="footer-link" onClick={() => scrollToSection('home')}>{t.navHome}</button>
                <button className="footer-link" onClick={() => scrollToSection('about')}>{t.navAbout}</button>
                <button className="footer-link" onClick={() => scrollToSection('contact')}>{t.navContact}</button>
                <button className="footer-link" onClick={() => scrollToSection('complaint')}>{t.navComplaint}</button>
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
              <p className="footer-designed-by">
                <a href="https://hytide.in" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                  {t.footerDesignedBy}
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
