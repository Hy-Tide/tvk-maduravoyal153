import React, { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import tvkLogo from '../assets/TVK-LOGO.png';
import tvkBanner from '../assets/Banner_1.png';
import tvkBanner1 from '../assets/Banner_3.jpeg';
import tvkBanner2 from '../assets/Banner_2.png';
import About from './about';
import Complaint from './Complaint';
import Contact from './Contact';
import Schemes from './Schemes';
import Gallery from './Gallery';
import { API_BASE_URL } from '../config';

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



function Home() {
  const { t } = useOutletContext();
  const navigate = useNavigate();

  const heroBannerImages = [tvkBanner, tvkBanner1, tvkBanner2];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % heroBannerImages.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [heroBannerImages.length]);

  const [latestCamp, setLatestCamp] = useState(null);
  const [hideAlert, setHideAlert] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/camps`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data && data.data.length > 0) {
          // Sort by creation date descending to get the newest
          const activeCamps = data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setLatestCamp(activeCamps[0]);
        }
      })
      .catch(err => console.error('Failed to fetch camps:', err));
  }, []);

  return (
    <div className="single-page-content">

      {/* Floating Camp Alert */}
      {latestCamp && !hideAlert && (
        <div style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          background: 'linear-gradient(135deg, rgba(217,27,36,0.9), rgba(153,17,24,0.95))',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 16,
          padding: '1.25rem 1.5rem',
          maxWidth: 380,
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
          zIndex: 9999,
          color: 'white',
          animation: 'slideInUp 0.5s ease-out forwards'
        }}>
          <button onClick={() => setHideAlert(true)} style={{
            position: 'absolute', top: 12, right: 12,
            background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)',
            cursor: 'pointer', padding: 4, display: 'flex', alignItems: 'center'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: '1.2rem' }}>📢</span>
            <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Announcement
            </h4>
          </div>
          
          <p style={{ margin: '0 0 8px', fontSize: '1.05rem', fontWeight: 600 }}>{latestCamp.title}</p>
          <p style={{ margin: '0 0 10px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.4 }}>
            {latestCamp.description}
          </p>
          
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '0.75rem', borderRadius: 8, fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>{latestCamp.date} • {latestCamp.startTime} - {latestCamp.endTime}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span style={{ lineHeight: 1.3 }}>{latestCamp.location}</span>
            </div>
          </div>
        </div>
      )}


      {/* HERO SECTION */}
      <section id="home" className="page-section home-section">
        <div className="hero-banner-container">

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

          <div className="hero-content">
            <div className="hero-pill-tag">
              <span className="flag-dot"></span>
              {t.heroTagline1}
            </div>

            <h1 className="hero-main-title">
              <span className="title-red">{t.heroTitlePrefix}</span>
              <span className="title-sub">{t.heroTitleSub}</span>
            </h1>

            <p className="hero-subtitle">{t.heroSubtitle}</p>

            <div className="hero-actions">
              <button className="btn-hero-primary" onClick={() => navigate('/complaint')}>
                {t.heroCtaComplaint} <ArrowRightIcon />
              </button>
              <button className="btn-hero-secondary" onClick={() => {
                const el = document.getElementById('about');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>
                {t.heroCtaAbout}
              </button>
              <button className="btn-hero-secondary" onClick={() => {
                const el = document.getElementById('gallery');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>
                {t.heroCtaGallery}
              </button>
            </div>

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

          <div className="hero-emblem-wrapper">
            <div className="hero-emblem-card">
              <img src={tvkLogo} alt="TVK Emblem" className="hero-logo-emblem" />
              <div className="emblem-label">TVK MADURAVOYAL</div>
            </div>
          </div>

        </div>
      </section>

      <About t={t} />

      {/* QUICK PORTALS SECTION */}
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
                <button className="btn-primary-glow" onClick={() => navigate('/complaint')}>
                  {t.navComplaint} <ArrowRightIcon />
                </button>
              </div>

              {/* <div className="portal-card border-yellow">
                <div className="portal-icon yellow"><MapPinIcon /></div>
                <h3>{t.homeAction2Title}</h3>
                <p>{t.homeAction2Desc}</p>
                <button className="btn-secondary-glow" onClick={() => navigate('/contact')}>
                  {t.navContact} <ArrowRightIcon />
                </button>
              </div> */}

              <div className="portal-card border-red">
                <div className="portal-icon red">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M22 10V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v4c1.1 0 2 .9 2 2s-.9 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-2-3.46V6h16v2.54z" />
                  </svg>
                </div>
                <h3>Know Your Complaint Status</h3>
                <p>Already filed a complaint? Track its live progress using your Complaint ID.</p>
                <button className="btn-primary-glow" onClick={() => navigate('/complaint-status')}>
                  Track Now <ArrowRightIcon />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Schemes t={t} />
      <Gallery t={t} />
      <Complaint />
      <Contact t={t} />
    </div>
  );
}

export default Home;