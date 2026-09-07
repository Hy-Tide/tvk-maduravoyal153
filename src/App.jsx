import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate, Outlet, useLocation } from 'react-router-dom';
import tvkLogo from './assets/TVK-LOGO.png';
import { translations } from './translations';
import './App.css';

// Page imports
import Home from './pages/Home';
import ComplaintStatus from './pages/ComplaintStatus';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import GalleryPage from './pages/GalleryPage';
import Footer from './pages/footer';

// SVG Icons
const FlagIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z" />
  </svg>
);

/**
 * Layout — renders the persistent Navbar + Top Ticker,
 * then renders whichever child route is active via <Outlet />,
 * then renders the Footer.
 */
// Section IDs that map to navbar links on the home single-page
const NAV_SECTIONS = ['home', 'about', 'gallery', 'schemes', 'contact'];

function Layout({ lang, setLang, t }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');
  const isHomePage = location.pathname === '/';

  // Scroll spy: observe each section and update activeSection
  useEffect(() => {
    if (!isHomePage) return;

    const observers = [];
    const sectionVisibility = {};

    const pickActive = () => {
      // Pick the topmost visible section
      let topSection = null;
      let topY = Infinity;
      for (const [id, entry] of Object.entries(sectionVisibility)) {
        if (entry.isIntersecting) {
          const y = entry.boundingClientRect.top;
          if (y < topY) {
            topY = y;
            topSection = id;
          }
        }
      }
      if (topSection) setActiveSection(topSection);
    };

    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            sectionVisibility[id] = entry;
          });
          pickActive();
        },
        { threshold: 0.25 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [isHomePage, location.pathname]);

  // Reset to 'home' when navigating away from home page
  useEffect(() => {
    if (!isHomePage) setActiveSection('');
    else setActiveSection('home');
  }, [isHomePage]);

  const scrollToSection = useCallback(
    (sectionId) => {
      if (!isHomePage) {
        navigate('/');
        // Wait for page to render then scroll
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [isHomePage, navigate]
  );

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
          <div className="navbar-brand" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
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

          {/* Navigation Links — scroll-spy aware */}
          <ul className="navbar-links">
            <li>
              <button
                className={`nav-link${activeSection === 'home' ? ' active' : ''}`}
                onClick={() => scrollToSection('home')}
              >
                {t.navHome}
              </button>
            </li>
            <li>
              <button
                className={`nav-link${activeSection === 'about' ? ' active' : ''}`}
                onClick={() => scrollToSection('about')}
              >
                {t.navAbout}
              </button>
            </li>
            <li>
              <button
                className={`nav-link${activeSection === 'schemes' ? ' active' : ''}`}
                onClick={() => scrollToSection('schemes')}
              >
                {t.navSchemes}
              </button>
            </li>
            <li>
              <button
                className={`nav-link${activeSection === 'gallery' ? ' active' : ''}`}
                onClick={() => scrollToSection('gallery')}
              >
                {t.navGallery}
              </button>
            </li>
            <li>
              <button
                className={`nav-link${activeSection === 'contact' ? ' active' : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                {t.navContact}
              </button>
            </li>
          </ul>

          {/* Header Action Buttons */}
          <div className="navbar-action" style={{ display: 'flex', gap: '10px' }}>
            <button
              className="btn-secondary-glow"
              onClick={() => navigate('/complaint-status')}
              style={{ fontSize: '0.82rem' }}
            >
              <span>📋 Track Complaint</span>
            </button>
            <button
              className="btn-primary-glow"
              onClick={() => navigate('/complaint')}
            >
              <FlagIcon />
              <span>{t.navComplaint}</span>
            </button>
          </div>

        </nav>
      </header>

      {/* Page Content via Outlet */}
      <main className="single-page-content">
        <Outlet context={{ t }} />
      </main>

      {/* Footer — hidden on admin page */}
      <Footer t={t} />

      <ScrollToTopButton />

    </div>
  );
}

/**
 * Admin Layout — no navbar, no footer; used for /admin route.
 */
function AdminLayout() {
  return <Outlet />;
}

function RouteScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  return (
    <>
      <RouteScrollToTop />
      <Routes>
        {/* Admin route — standalone, no site chrome */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>

        {/* Main site routes — wrapped in Layout shell */}
        <Route element={<Layout lang={lang} setLang={setLang} t={t} />}>
          <Route path="/" element={<Home />} />
          <Route path="/complaint-status" element={<ComplaintStatus />} />
          <Route path="/gallery" element={<GalleryPage t={t} />} />
        </Route>
      </Routes>
    </>
  );
}

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop} aria-label="Scroll to top" title="Scroll to top">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </div>
  );
}

export default App;
