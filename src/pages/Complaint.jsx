import React, { useState, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';

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

function Complaint() {
  const { t } = useOutletContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    subject: [],
    otherSubject: '',
    voterId: '',
    image: null,
    details: ''
  });
  const [formError, setFormError] = useState('');
  const [submittedTicket, setSubmittedTicket] = useState(null);

  const toggleCategory = (category) => {
    setFormData(prev => {
      const newSubjects = prev.subject.includes(category)
        ? prev.subject.filter(c => c !== category)
        : [...prev.subject, category];
      return { ...prev, subject: newSubjects };
    });
  };

  const handleInputChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    setFormError('');
  };

  const handleComplaintSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() ||
      !formData.address.trim() || formData.subject.length === 0 || !formData.voterId.trim() || !formData.details.trim()) {
      setFormError(t.valRequired);
      return;
    }

    const isOtherCategory = formData.subject.includes('Others') || formData.subject.includes('மற்றவை');
    if (isOtherCategory && !formData.otherSubject.trim()) {
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
      subject: [],
      otherSubject: '',
      voterId: '',
      image: null,
      details: ''
    });
  };

  return (
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

                <div className="form-row">
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

                <div className="form-group" ref={dropdownRef}>
                  <label className="form-label">{t.formSubject}</label>
                  <div className="custom-multiselect">
                    <div
                      className="multiselect-input form-input"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      {formData.subject.length === 0 ? (
                        <span className="placeholder">{t.formSubjectPlaceholder}</span>
                      ) : (
                        <div className="chips-container">
                          {formData.subject.map((cat, idx) => (
                            <span key={idx} className="category-pill selected chip-small">
                              {cat}
                              <span
                                className="chip-remove"
                                onClick={(e) => { e.stopPropagation(); toggleCategory(cat); }}
                              >
                                &times;
                              </span>
                            </span>
                          ))}
                        </div>
                      )}
                      <span className="dropdown-arrow">▼</span>
                    </div>

                    {isDropdownOpen && (
                      <div className="multiselect-dropdown-menu">
                        {t.complaintCategories.map((category, index) => (
                          <label key={index} className="dropdown-item">
                            <input
                              type="checkbox"
                              checked={formData.subject.includes(category)}
                              onChange={() => toggleCategory(category)}
                            />
                            <span className="checkbox-label">{category}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {(formData.subject.includes('Others') || formData.subject.includes('மற்றவை')) && (
                  <div className="form-group">
                    <label className="form-label">{t.formOtherSubject}</label>
                    <input
                      type="text"
                      name="otherSubject"
                      value={formData.otherSubject}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder={t.formOtherSubjectPlaceholder}
                    />
                  </div>
                )}

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
  );
}

export default Complaint;
