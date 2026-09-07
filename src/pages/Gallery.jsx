import React from 'react';
import { useNavigate } from 'react-router-dom';
import { allImages } from './GalleryPage';

function Gallery({ t }) {
  const navigate = useNavigate();
  const previewImages = allImages.slice(0, 6);

  return (
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
          {previewImages.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="gallery-view-all-wrapper">
          <button
            className="btn-primary-glow gallery-view-all-btn"
            onClick={() => navigate('/gallery')}
          >
            அனைத்து புகைப்படங்களும் காண்க →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
