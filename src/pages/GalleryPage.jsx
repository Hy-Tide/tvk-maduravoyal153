import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import img1 from '../assets/1000126706.jpg.jpeg';
import img2 from '../assets/1000126716.jpg.jpeg';
import img3 from '../assets/1000126722.jpg.jpeg';
import img4 from '../assets/1000126736.jpg.jpeg';
import img5 from '../assets/1000126740.jpg.jpeg';
import img6 from '../assets/1000126744.jpg.jpeg';
import img7 from '../assets/1000126748.jpg.jpeg';
import img8 from '../assets/1000126754.jpg.jpeg';
import img9 from '../assets/1000126760.jpg.jpeg';
import img10 from '../assets/1000126762.jpg.jpeg';
import img11 from '../assets/1000185681.jpg.jpeg';
import img12 from '../assets/1000185697.jpg.jpeg';
import img13 from '../assets/1000197497.jpg.jpeg';
import img14 from '../assets/1000231676.jpg.jpeg';
import img15 from '../assets/1000231678.jpg.jpeg';
import img16 from '../assets/1000231811.jpg.jpeg';
import img17 from '../assets/1000231862.jpg.jpeg';
import img18 from '../assets/1000232563.jpg.jpeg';
import img19 from '../assets/1000232577.jpg.jpeg';
import img20 from '../assets/1000232587.jpg.jpeg';
import img21 from '../assets/1000312375.jpg.jpeg';
import img22 from '../assets/1000312377.jpg.jpeg';
// import img23 from '../assets/banner_vijay_rally.jpg';
// import img24 from '../assets/banner_vijay_speech.jpg';
// import img25 from '../assets/banner_vijay_stage.jpg';
// import img26 from '../assets/tvk_banner.jpeg';
import img27 from '../assets/tvk_banner1.jpeg';
// import img28 from '../assets/tvk_banner2.jpeg';
import img29 from '../assets/WhatsApp Image 2026-08-28 at 9.29.22 PM.jpeg';
import img30 from '../assets/WhatsApp Image 2026-08-28 at 9.29.23 PM.jpeg';
import img31 from '../assets/WhatsApp Image 2026-08-28 at 9.29.24 PM.jpeg';
import img32 from '../assets/WhatsApp Image 2026-08-28 at 9.29.25 PM.jpeg';
import img33 from '../assets/WhatsApp Image 2026-08-28 at 9.30.52 PM.jpeg';
import img34 from '../assets/WhatsApp Image 2026-08-28 at 9.30.53 PM.jpeg';
import img35 from '../assets/WhatsApp Image 2026-08-28 at 9.30.54 PM.jpeg';
import img36 from '../assets/WhatsApp Image 2026-08-28 at 9.30.55 PM.jpeg';
import img37 from '../assets/WhatsApp Image 2026-08-28 at 9.30.56 PM.jpeg';
import img38 from '../assets/WhatsApp Image 2026-08-28 at 9.33.14 PM.jpeg';
import img39 from '../assets/WhatsApp Image 2026-08-28 at 9.33.15 PM.jpeg';
import img40 from '../assets/WhatsApp Image 2026-08-28 at 9.33.16 PM.jpeg';
import img41 from '../assets/WhatsApp Image 2026-08-28 at 9.33.17 PM.jpeg';
import img42 from '../assets/WhatsApp Image 2026-08-28 at 9.33.18 PM.jpeg';
import img43 from '../assets/WhatsApp Image 2026-08-28 at 9.33.19 PM.jpeg';
import img44 from '../assets/WhatsApp Image 2026-08-28 at 9.33.20 PM.jpeg';
import img45 from '../assets/WhatsApp Image 2026-08-28 at 9.33.27 PM.jpeg';
import img46 from '../assets/WhatsApp Image 2026-08-28 at 9.33.28 PM.jpeg';
import img47 from '../assets/WhatsApp Image 2026-08-28 at 9.33.29 PM.jpeg';
import img48 from '../assets/WhatsApp Image 2026-08-28 at 9.33.30 PM.jpeg';
import img49 from '../assets/WhatsApp Image 2026-08-28 at 9.33.31 PM.jpeg';
import img50 from '../assets/WhatsApp Image 2026-08-28 at 9.33.32 PM.jpeg';
import img51 from '../assets/WhatsApp Image 2026-08-28 at 9.34.46 PM.jpeg';
import img52 from '../assets/WhatsApp Image 2026-08-28 at 9.34.47 PM.jpeg';
import img53 from '../assets/WhatsApp Image 2026-08-28 at 9.34.48 PM.jpeg';
import img54 from '../assets/WhatsApp Image 2026-08-28 at 9.34.49 PM.jpeg';
import img55 from '../assets/WhatsApp Image 2026-08-28 at 9.34.50 PM.jpeg';
import img56 from '../assets/WhatsApp Image 2026-08-28 at 9.34.51 PM (1).jpeg';
import img57 from '../assets/WhatsApp Image 2026-08-28 at 9.34.51 PM.jpeg';
import img58 from '../assets/WhatsApp Image 2026-08-28 at 9.34.52 PM.jpeg';
import img59 from '../assets/WhatsApp Image 2026-08-28 at 9.34.53 PM.jpeg';

const allImages = [
  { src: img1, alt: 'TVK நிகழ்வு 1' },
  { src: img2, alt: 'TVK நிகழ்வு 2' },
  { src: img3, alt: 'TVK நிகழ்வு 3' },
  { src: img4, alt: 'TVK நிகழ்வு 4' },
  { src: img5, alt: 'TVK நிகழ்வு 5' },
  { src: img6, alt: 'TVK நிகழ்வு 6' },
  { src: img7, alt: 'TVK நிகழ்வு 7' },
  { src: img8, alt: 'TVK நிகழ்வு 8' },
  { src: img9, alt: 'TVK நிகழ்வு 9' },
  { src: img10, alt: 'TVK நிகழ்வு 10' },
  { src: img11, alt: 'TVK நிகழ்வு 11' },
  { src: img12, alt: 'TVK நிகழ்வு 12' },
  { src: img13, alt: 'TVK நிகழ்வு 13' },
  { src: img14, alt: 'TVK நிகழ்வு 14' },
  { src: img15, alt: 'TVK நிகழ்வு 15' },
  { src: img16, alt: 'TVK நிகழ்வு 16' },
  { src: img17, alt: 'TVK நிகழ்வு 17' },
  { src: img18, alt: 'TVK நிகழ்வு 18' },
  { src: img19, alt: 'TVK நிகழ்வு 19' },
  { src: img20, alt: 'TVK நிகழ்வு 20' },
  { src: img21, alt: 'TVK நிகழ்வு 21' },
  { src: img22, alt: 'TVK நிகழ்வு 22' },
  // { src: img23, alt: 'TVK நிகழ்வு 23' },
  // { src: img24, alt: 'TVK நிகழ்வு 24' },
  // { src: img25, alt: 'TVK நிகழ்வு 25' },
  // { src: img26, alt: 'zTVK நிகழ்வு 26' },
  { src: img27, alt: 'TVK நிகழ்வு 27' },
  // { src: img28, alt: 'TVK நிகழ்வு 28' },
  { src: img29, alt: 'TVK நிகழ்வு 29' },
  { src: img30, alt: 'TVK நிகழ்வு 30' },
  { src: img31, alt: 'TVK நிகழ்வு 31' },
  { src: img32, alt: 'TVK நிகழ்வு 32' },
  { src: img33, alt: 'TVK நிகழ்வு 33' },
  { src: img34, alt: 'TVK நிகழ்வு 34' },
  { src: img35, alt: 'TVK நிகழ்வு 35' },
  { src: img36, alt: 'TVK நிகழ்வு 36' },
  { src: img37, alt: 'TVK நிகழ்வு 37' },
  { src: img38, alt: 'TVK நிகழ்வு 38' },
  { src: img39, alt: 'TVK நிகழ்வு 39' },
  { src: img40, alt: 'TVK நிகழ்வு 40' },
  { src: img41, alt: 'TVK நிகழ்வு 41' },
  { src: img42, alt: 'TVK நிகழ்வு 42' },
  { src: img43, alt: 'TVK நிகழ்வு 43' },
  { src: img44, alt: 'TVK நிகழ்வு 44' },
  { src: img45, alt: 'TVK நிகழ்வு 45' },
  { src: img46, alt: 'TVK நிகழ்வு 46' },
  { src: img47, alt: 'TVK நிகழ்வு 47' },
  { src: img48, alt: 'TVK நிகழ்வு 48' },
  { src: img49, alt: 'TVK நிகழ்வு 49' },
  { src: img50, alt: 'TVK நிகழ்வு 50' },
  { src: img51, alt: 'TVK நிகழ்வு 51' },
  { src: img52, alt: 'TVK நிகழ்வு 52' },
  { src: img53, alt: 'TVK நிகழ்வு 53' },
  { src: img54, alt: 'TVK நிகழ்வு 54' },
  { src: img55, alt: 'TVK நிகழ்வு 55' },
  { src: img56, alt: 'TVK நிகழ்வு 56' },
  { src: img57, alt: 'TVK நிகழ்வு 57' },
  { src: img58, alt: 'TVK நிகழ்வு 58' },
  { src: img59, alt: 'TVK நிகழ்வு 59' },
];

export { allImages };

function GalleryPage({ t }) {
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i - 1 + allImages.length) % allImages.length);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % allImages.length);

  return (
    <section className="gallery-page-section">
      <div className="container">
        <div className="about-new-header">
          <span className="about-new-sub">{t?.galleryHeaderSub || 'நிகழ்வுகள்'}</span>
          <div className="about-new-title-box">
            <div className="about-new-lines">
              <div className="line-red"></div>
              <div className="line-yellow"></div>
            </div>
            <h1 className="about-new-main-title">{t?.galleryHeaderTitle || 'புகைப்பட தொகுப்பு'}</h1>
          </div>
        </div>

        <button className="gallery-back-btn" onClick={() => navigate(-1)}>
          ← திரும்பு
        </button>

        <div className="gallery-full-grid">
          {allImages.map((img, index) => (
            <div
              key={index}
              className="gallery-full-item"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
              aria-label={img.alt}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-full-item-overlay">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-count-label">மொத்தம் {allImages.length} புகைப்படங்கள்</div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Previous">‹</button>
          <div className="lightbox-img-wrapper" onClick={(e) => e.stopPropagation()}>
            <img src={allImages[lightboxIndex].src} alt={allImages[lightboxIndex].alt} />
            <div className="lightbox-counter">{lightboxIndex + 1} / {allImages.length}</div>
          </div>
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Next">›</button>
        </div>
      )}
    </section>
  );
}

export default GalleryPage;
