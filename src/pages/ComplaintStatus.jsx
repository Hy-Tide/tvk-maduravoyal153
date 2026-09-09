import React, { useState } from 'react';

// ── Icons ──────────────────────────────────────────────────────────────
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const TicketIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M22 10V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v4c1.1 0 2 .9 2 2s-.9 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-2-3.46V6h16v2.54z" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.07V7h-2v8l6.5 3.9 1-1.6-5.5-3.23z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const InProgressIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
  </svg>
);

const AlertIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

// ── Shared design tokens ────────────────────────────────────────────────
const FONT_STACK = "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif";
const RED = '#d91b24';
const RED_DARK = '#8b0000';

// A small helper so hover/focus states don't need per-element React state everywhere.
const focusRing = {
  outline: `2px solid rgba(217,27,36,0.6)`,
  outlineOffset: '2px',
};

// ── Status config ──────────────────────────────────────────────────────
const STATUS_CONFIG = {
  pending: {
    label: 'Pending review',
    labelTa: 'மதிப்பாய்வுக்கு நிலுவையில்',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.12)',
    border: 'rgba(245,158,11,0.35)',
    icon: <ClockIcon />,
    step: 1,
  },
  inprogress: {
    label: 'In progress',
    labelTa: 'செயலில் உள்ளது',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.12)',
    border: 'rgba(59,130,246,0.35)',
    icon: <InProgressIcon />,
    step: 2,
  },
  resolved: {
    label: 'Resolved',
    labelTa: 'தீர்க்கப்பட்டது',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.12)',
    border: 'rgba(16,185,129,0.35)',
    icon: <CheckCircleIcon />,
    step: 3,
  },
  rejected: {
    label: 'Rejected',
    labelTa: 'நிராகரிக்கப்பட்டது',
    color: '#EF4444',
    bg: 'rgba(239,68,68,0.12)',
    border: 'rgba(239,68,68,0.35)',
    icon: <AlertIcon />,
    step: 0,
  },
};

// ── Placeholder / Demo result ──────────────────────────────────────────
function generateTimeline(complaint) {
  const t = [];
  const start = new Date(complaint.createdAt);
  t.push({ date: start.toLocaleDateString(), time: start.toLocaleTimeString(), event: 'Complaint submitted', done: true });
  
  const s = complaint.status;
  if (s === 'rejected') {
     t.push({ date: 'Updated', time: '', event: 'Complaint rejected', done: true });
     return t;
  }
  
  t.push({ date: s !== 'pending' ? 'Updated' : 'Pending', time: '', event: 'Received & assigned', done: s !== 'pending' });
  t.push({ date: s === 'resolved' ? 'Updated' : 'Pending', time: '', event: 'Action in progress', done: s === 'resolved' || s === 'inprogress' });
  t.push({ date: s === 'resolved' ? 'Updated' : 'Pending', time: '', event: 'Issue resolved & closed', done: s === 'resolved' });

  return t;
}

// ── Sub-components ─────────────────────────────────────────────────────
function StatusBadge({ status }) {
  const cfg = STATUS_CONFIG[status];
  if (!cfg) return null;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '7px',
      background: cfg.bg, border: `1px solid ${cfg.border}`,
      color: cfg.color, borderRadius: '999px',
      padding: '6px 15px', fontWeight: 700, fontSize: '0.85rem',
      fontFamily: FONT_STACK,
    }}>
      {cfg.icon} {cfg.label}
    </span>
  );
}

function ProgressSteps({ status }) {
  const steps = [
    { label: 'Submitted' },
    { label: 'Under review' },
    { label: 'In progress' },
    { label: 'Resolved' },
  ];
  const cfg = STATUS_CONFIG[status];
  const activeStep = cfg?.step ?? 0;
  const isRejected = status === 'rejected';

  return (
    <div style={{ padding: '0 4px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0, position: 'relative' }}>
        {steps.map((step, i) => {
          const done = !isRejected && i < activeStep;
          const active = !isRejected && i === activeStep - 1;
          const isLast = i === steps.length - 1;

          return (
            <React.Fragment key={i}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, minWidth: 0 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: isRejected ? 'rgba(239,68,68,0.15)' :
                    done ? RED : active ? 'rgba(217,27,36,0.2)' : 'rgba(255,255,255,0.06)',
                  border: isRejected ? '2px solid rgba(239,68,68,0.5)' :
                    done ? `2px solid ${RED}` : active ? '2px solid rgba(217,27,36,0.6)' : '2px solid rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: done ? '0 4px 14px rgba(217,27,36,0.35)' : 'none',
                  transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
                  flexShrink: 0,
                }}>
                  {done ? (
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  ) : (
                    <span style={{
                      fontFamily: FONT_STACK,
                      fontSize: '0.8rem', fontWeight: 700,
                      color: isRejected ? '#EF4444' : active ? RED : 'rgba(255,255,255,0.4)'
                    }}>
                      {i + 1}
                    </span>
                  )}
                </div>
                <span style={{
                  fontFamily: FONT_STACK,
                  fontSize: '0.72rem', marginTop: 8, fontWeight: 600,
                  color: done ? 'rgba(255,255,255,0.88)' : active ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.35)',
                  textAlign: 'center', maxWidth: 78, lineHeight: 1.35,
                }}>
                  {step.label}
                </span>
              </div>
              {!isLast && (
                <div style={{
                  flex: 1, height: 2, marginTop: 19, minWidth: 16,
                  background: !isRejected && i < activeStep - 1
                    ? `linear-gradient(90deg, ${RED}, ${RED_DARK})`
                    : 'rgba(255,255,255,0.1)',
                  transition: 'background 0.3s',
                }} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

function TimelineItem({ item, isLast }) {
  return (
    <div style={{ display: 'flex', gap: 16, position: 'relative' }}>
      {!isLast && (
        <div style={{
          position: 'absolute', left: 15, top: 32, bottom: -16,
          width: 2, background: item.done ? 'rgba(217,27,36,0.4)' : 'rgba(255,255,255,0.08)',
        }} />
      )}
      <div style={{
        width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
        background: item.done ? 'rgba(217,27,36,0.2)' : 'rgba(255,255,255,0.04)',
        border: `2px solid ${item.done ? RED : 'rgba(255,255,255,0.12)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginTop: 2,
      }}>
        {item.done ? (
          <svg viewBox="0 0 24 24" width="14" height="14" fill={RED}>
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        ) : (
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.25)' }} />
        )}
      </div>
      <div style={{ paddingBottom: 22 }}>
        <p style={{
          margin: 0, fontWeight: 600, fontSize: '0.92rem', fontFamily: FONT_STACK,
          color: item.done ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.35)',
        }}>
          {item.event}
        </p>
        {item.date && (
          <p style={{ margin: '4px 0 0', fontSize: '0.78rem', fontFamily: FONT_STACK, color: 'rgba(255,255,255,0.4)' }}>
            {item.date}{item.time ? ` · ${item.time}` : ''}
          </p>
        )}
      </div>
    </div>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 12, padding: '0.9rem 1rem',
      transition: 'border-color 0.2s, background 0.2s',
    }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 7, color: 'rgba(255,255,255,0.4)' }}>
        {icon}
        <span style={{ fontFamily: FONT_STACK, fontSize: '0.74rem', fontWeight: 600, letterSpacing: '0.01em' }}>
          {label}
        </span>
      </div>
      <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, fontSize: '0.92rem', margin: 0, fontFamily: FONT_STACK, lineHeight: 1.4 }}>
        {value}
      </p>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────
function ComplaintStatus() {
  const [inputId, setInputId] = useState('');
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitFocused, setSubmitFocused] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = inputId.trim().toUpperCase();
    if (!trimmed) { setError('Enter a complaint ID to continue.'); return; }
    setSearched(true);
    setError('');

    // Fetch from backend
    fetch(`http://localhost:5000/api/complaints/ticket/${trimmed}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const complaint = data.data;
          setResult({
            id: complaint.ticketId,
            name: complaint.name,
            date: new Date(complaint.createdAt).toLocaleDateString(),
            category: complaint.subject.join(', '),
            address: complaint.address,
            status: complaint.status,
            description: complaint.details,
            timeline: generateTimeline(complaint)
          });
        } else {
          setResult(null);
        }
      })
      .catch(() => {
        setError('Failed to fetch complaint status.');
        setResult(null);
      });
  };

  const handleReset = () => {
    setInputId('');
    setResult(null);
    setSearched(false);
    setError('');
  };

  const cfg = result ? STATUS_CONFIG[result.status] : null;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #0a0d14 0%, #0f1520 40%, #160a08 100%)',
      paddingBottom: '5rem',
      fontFamily: FONT_STACK,
    }}>

      {/* ── Hero banner ──────────────────────────────────── */}
      <div style={{
        position: 'relative',
        padding: '4.5rem 1.5rem 3.5rem',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 300,
          background: 'radial-gradient(ellipse, rgba(217,27,36,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, right: 0,
          width: 300, height: 300,
          background: 'radial-gradient(ellipse, rgba(217,27,36,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto' }}>
          <div style={{
            width: 60, height: 60,
            background: `linear-gradient(135deg, ${RED}, ${RED_DARK})`,
            borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.5rem',
            boxShadow: '0 12px 30px rgba(217,27,36,0.4)',
            color: 'white',
          }}>
            <TicketIcon />
          </div>

          <p style={{
            color: RED, fontSize: '0.9rem', fontWeight: 700,
            margin: '0 0 0.9rem',
          }}>
            புகார் நிலை · Complaint status
          </p>

          <h1 style={{
            color: 'white', fontSize: 'clamp(1.9rem, 4.2vw, 2.7rem)',
            fontWeight: 800, lineHeight: 1.12,
            margin: '0 0 1rem', letterSpacing: '-0.02em',
          }}>
            Track your complaint in seconds
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.55)', fontSize: '1rem',
            maxWidth: 440, margin: '0 auto 2.5rem', lineHeight: 1.65,
          }}>
            Enter the complaint ID from your submission confirmation to see where things stand.
          </p>

          {/* ── Search Form ── */}
          <form onSubmit={handleSearch} noValidate style={{
            display: 'flex', gap: 8,
            flexWrap: 'wrap',
            background: 'rgba(255,255,255,0.06)',
            border: `1.5px solid ${isInputFocused ? 'rgba(217,27,36,0.5)' : 'rgba(255,255,255,0.12)'}`,
            borderRadius: 16, padding: 6,
            backdropFilter: 'blur(12px)',
            boxShadow: isInputFocused ? '0 8px 32px rgba(217,27,36,0.18)' : '0 8px 32px rgba(0,0,0,0.4)',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}>
            <label htmlFor="complaint-id-input" style={{
              position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)',
            }}>
              Complaint ID
            </label>
            <div style={{ position: 'relative', flex: '1 1 200px' }}>
              <span style={{
                position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
                color: 'rgba(255,255,255,0.35)', pointerEvents: 'none', display: 'flex',
              }}>
                <TicketIcon />
              </span>
              <input
                id="complaint-id-input"
                type="text"
                value={inputId}
                onChange={(e) => { setInputId(e.target.value); setError(''); }}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                placeholder="e.g. TVK-MAD-1234"
                style={{
                  width: '100%', background: 'transparent',
                  border: 'none', outline: 'none',
                  color: 'white', fontSize: '1rem', fontWeight: 600,
                  fontFamily: FONT_STACK,
                  padding: '0.85rem 1rem 0.85rem 3rem',
                  letterSpacing: '0.03em',
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <button
              id="search-complaint-btn"
              type="submit"
              onFocus={() => setSubmitFocused(true)}
              onBlur={() => setSubmitFocused(false)}
              onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = 'brightness(1)'; }}
              style={{
                background: `linear-gradient(135deg, ${RED}, #b01219)`,
                border: 'none', borderRadius: 12,
                color: 'white', fontWeight: 700, fontSize: '0.95rem',
                fontFamily: FONT_STACK,
                padding: '0.85rem 1.6rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: '0 4px 16px rgba(217,27,36,0.35)',
                transition: 'filter 0.15s',
                whiteSpace: 'nowrap',
                flex: '0 0 auto',
                ...(isSubmitFocused ? focusRing : {}),
              }}
            >
              <SearchIcon /> Track
            </button>
          </form>

          {error && (
            <p role="alert" style={{ color: '#f87171', fontSize: '0.87rem', marginTop: 12, fontWeight: 500 }}>
              {error}
            </p>
          )}

          {/* Demo hint chips */}
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem' }}>Check your email or SMS for your Ticket ID.</span>
          </div>
        </div>
      </div>

      {/* ── Results area ─────────────────────────────────── */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Not found state */}
        {searched && !result && (
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1.5px solid rgba(255,255,255,0.08)',
            borderRadius: 20, padding: '3rem 2rem', textAlign: 'center',
          }}>
            <div style={{
              width: 68, height: 68, borderRadius: '50%',
              background: 'rgba(239,68,68,0.12)', border: '2px solid rgba(239,68,68,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.25rem',
            }}>
              <svg viewBox="0 0 24 24" width="30" height="30" fill="#EF4444">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
              </svg>
            </div>
            <h3 style={{ color: 'white', fontWeight: 700, margin: '0 0 0.6rem', fontSize: '1.15rem' }}>
              We couldn't find that complaint
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', margin: '0 0 1.75rem', fontSize: '0.92rem', lineHeight: 1.6 }}>
              No complaint matches <strong style={{ color: 'rgba(255,255,255,0.8)' }}>{inputId.toUpperCase()}</strong>.
              Check the ID from your confirmation message and try again.
            </p>
            <button onClick={handleReset} style={{
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)',
              color: 'rgba(255,255,255,0.75)', borderRadius: 10,
              padding: '0.7rem 1.6rem', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600,
              fontFamily: FONT_STACK,
              transition: 'background 0.15s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.11)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
            >
              Try again
            </button>
          </div>
        )}

        {/* Found — complaint card */}
        {result && cfg && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* ── Top summary card ── */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1.5px solid rgba(255,255,255,0.09)',
              borderRadius: 22, overflow: 'hidden',
            }}>
              <div style={{ height: 4, background: `linear-gradient(90deg, ${cfg.color}, transparent)` }} />

              <div style={{ padding: '1.75rem 2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: '1.5rem' }}>
                  <div>
                    <p style={{ color: 'rgba(255,255,255,0.42)', fontSize: '0.8rem', fontWeight: 600, margin: '0 0 4px' }}>
                      Complaint ID
                    </p>
                    <h2 style={{ color: 'white', fontWeight: 800, fontSize: '1.5rem', margin: 0, letterSpacing: '0.02em' }}>
                      {result.id}
                    </h2>
                  </div>
                  <StatusBadge status={result.status} />
                </div>

                <div style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: 14, marginBottom: '1.75rem',
                }}>
                  <InfoCard icon={<UserIcon />} label="Complainant" value={result.name} />
                  <InfoCard icon={<CalendarIcon />} label="Submitted on" value={result.date} />
                  <InfoCard icon={<TicketIcon />} label="Category" value={result.category} />
                  <InfoCard icon={<LocationIcon />} label="Address" value={result.address} />
                </div>

                <div style={{
                  background: 'rgba(217,27,36,0.07)',
                  border: '1px solid rgba(217,27,36,0.2)',
                  borderRadius: 12, padding: '1.1rem 1.25rem',
                }}>
                  <p style={{ color: 'rgba(255,255,255,0.42)', fontSize: '0.78rem', fontWeight: 600, margin: '0 0 6px' }}>
                    Description
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.92rem', margin: 0, lineHeight: 1.65 }}>
                    {result.description}
                  </p>
                </div>
              </div>
            </div>

            {/* ── Progress Steps card ── */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1.5px solid rgba(255,255,255,0.09)',
              borderRadius: 22, padding: '1.75rem 2rem',
            }}>
              <h3 style={{ color: 'white', fontWeight: 700, margin: '0 0 1.75rem', fontSize: '1.02rem' }}>
                Resolution progress
              </h3>
              <ProgressSteps status={result.status} />
            </div>

            {/* ── Timeline card ── */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1.5px solid rgba(255,255,255,0.09)',
              borderRadius: 22, padding: '1.75rem 2rem',
            }}>
              <h3 style={{ color: 'white', fontWeight: 700, margin: '0 0 1.5rem', fontSize: '1.02rem' }}>
                Activity timeline
              </h3>
              {result.timeline.map((item, i) => (
                <TimelineItem key={i} item={item} isLast={i === result.timeline.length - 1} />
              ))}
            </div>

            {/* Search again */}
            <div style={{ textAlign: 'center', paddingTop: '0.5rem' }}>
              <button onClick={handleReset} style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.65)', borderRadius: 10,
                padding: '0.7rem 1.85rem', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600,
                fontFamily: FONT_STACK,
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'background 0.15s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
              >
                <ArrowLeftIcon /> Search another complaint
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default ComplaintStatus;