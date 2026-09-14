import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import tvkLogo from '../assets/TVK-LOGO.png';
import { API_BASE_URL } from '../config';

// ── Helpers ────────────────────────────────────────────────────────────────────
// Dummy functions removed.

// ── Icons ──────────────────────────────────────────────────────────────────────
const IconLogout = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
  </svg>
);
const IconComplaint = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M22 10V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v4c1.1 0 2 .9 2 2s-.9 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-2-3.46V6h16v2.54z" />
  </svg>
);
const IconCamp = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
  </svg>
);
const IconTrash = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
  </svg>
);
const IconSearch = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const STATUS_OPTS = [
  { value: 'Pending', label: 'Pending', color: '#F59E0B' },
  { value: 'In Progress', label: 'In Progress', color: '#3B82F6' },
  { value: 'Resolved', label: 'Resolved', color: '#10B981' },
  { value: 'Rejected', label: 'Rejected', color: '#EF4444' }
];

// ── Status badge ───────────────────────────────────────────────────────────────
function StatusPill({ status }) {
  const cfg = STATUS_OPTS.find(s => s.value === status) || STATUS_OPTS[0];
  return (
    <span style={{
      display: 'inline-block',
      background: `${cfg.color}22`,
      border: `1px solid ${cfg.color}55`,
      color: cfg.color,
      borderRadius: 999,
      padding: '3px 12px',
      fontSize: '0.75rem',
      fontWeight: 700,
    }}>
      {cfg.label}
    </span>
  );
}

// ── Complaints Tab ─────────────────────────────────────────────────────────────
function ComplaintsTab() {
  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState('');
  const [editId, setEditId] = useState(null);
  const [editStatus, setEditStatus] = useState('');
  const [saved, setSaved] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem('tvk_admin_auth');
    fetch(`${API_BASE_URL}/api/admin/complaints`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) setComplaints(data.data);
      });
  }, []);

  const filtered = complaints.filter(c =>
    (c.ticketId && c.ticketId.toLowerCase().includes(search.toLowerCase())) ||
    (c.name && c.name.toLowerCase().includes(search.toLowerCase())) ||
    (c.subject && c.subject.join(' ').toLowerCase().includes(search.toLowerCase()))
  );

  const openEdit = (c) => {
    setEditId(c._id);
    setEditStatus(c.status);
  };

  const handleUpdateStatus = () => {
    const token = sessionStorage.getItem('tvk_admin_auth');
    fetch(`${API_BASE_URL}/api/admin/complaints/${editId}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ status: editStatus })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const updated = complaints.map(c => c._id === editId ? { ...c, status: editStatus } : c);
          setComplaints(updated);
          setSaved(data.data.ticketId);
          setEditId(null);
          setTimeout(() => setSaved(null), 3000);
        }
      });
  };

  return (
    <div>
      {/* Search */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 12, padding: '0.65rem 1rem',
        marginBottom: '1.25rem',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.35)' }}><IconSearch /></span>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by ID, name, or category…"
          style={{
            flex: 1, background: 'transparent', border: 'none',
            outline: 'none', color: 'white', fontSize: '0.9rem',
          }}
        />
      </div>

      {saved && (
        <div style={{
          background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)',
          borderRadius: 10, padding: '0.6rem 1rem', marginBottom: '1rem',
          color: '#10B981', fontSize: '0.85rem', fontWeight: 600,
        }}>
          ✓ Status updated for <strong>{saved}</strong> — changes are now live on the website.
        </div>
      )}

      {/* Complaint list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {filtered.length === 0 && (
          <p style={{ color: 'rgba(255,255,255,0.3)', textAlign: 'center', padding: '2rem' }}>No complaints found.</p>
        )}
        {filtered.map(c => (
          <div key={c._id} style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 14, padding: '1rem 1.25rem',
          }}>
            {editId === c._id ? (
              /* Inline edit */
              <div>
                <p style={{ color: 'white', fontWeight: 700, marginBottom: 6 }}>{c.ticketId} — {c.name}</p>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', marginBottom: 4 }}>
                  <strong>Voter ID:</strong> {c.voterId || 'N/A'} &nbsp;·&nbsp; <strong>Phone:</strong> {c.mobile || 'N/A'}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', marginBottom: 8 }}>
                  <strong>Address:</strong> {c.address}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: 8 }}>{c.description}</p>
                {c.documentUrl && (
                  <a 
                    href={`${API_BASE_URL}${c.documentUrl}`} 
                    target="_blank" 
                    rel="noreferrer"
                    style={{ display: 'inline-block', marginBottom: 12, color: '#ff7a84', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(217,27,36,0.3)', padding: '4px 10px', borderRadius: 6 }}
                  >
                    🖼️ View Attached Image
                  </a>
                )}
                <label style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 6 }}>
                  Update Status
                </label>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
                  {STATUS_OPTS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setEditStatus(opt.value)}
                      style={{
                        padding: '6px 14px', borderRadius: 999, fontSize: '0.8rem', fontWeight: 700,
                        cursor: 'pointer', transition: 'all 0.15s',
                        background: editStatus === opt.value ? opt.color : `${opt.color}15`,
                        border: `1.5px solid ${editStatus === opt.value ? opt.color : `${opt.color}40`}`,
                        color: editStatus === opt.value ? 'white' : opt.color,
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    onClick={handleUpdateStatus}
                    style={{
                      background: 'linear-gradient(135deg, #d91b24, #b01219)',
                      border: 'none', borderRadius: 8, color: 'white',
                      fontWeight: 700, padding: '0.55rem 1.25rem', cursor: 'pointer', fontSize: '0.85rem',
                    }}
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    style={{
                      background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 8, color: 'rgba(255,255,255,0.5)',
                      fontWeight: 600, padding: '0.55rem 1.25rem', cursor: 'pointer', fontSize: '0.85rem',
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              /* Display row */
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <span style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem' }}>{c.ticketId}</span>
                    <StatusPill status={c.status} />
                  </div>
                  <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>
                    {c.name} · {c.subject?.join(', ')} · {new Date(c.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => openEdit(c)}
                  style={{
                    background: 'rgba(217,27,36,0.15)', border: '1px solid rgba(217,27,36,0.35)',
                    borderRadius: 8, color: '#ff7a84', fontWeight: 600,
                    padding: '0.45rem 1rem', cursor: 'pointer', fontSize: '0.82rem', whiteSpace: 'nowrap',
                  }}
                >
                  Update Status
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function TimeSelect({ value, onChange, name, hasError }) {
  const [h, m, ampm] = value ? value.split(/[: ]/) : ['10', '00', 'AM'];
  
  const update = (newH, newM, newA) => {
    onChange({ target: { name, value: `${newH}:${newM} ${newA}` } });
  };

  const selectStyle = {
    background: 'rgba(255,255,255,0.06)',
    border: `1px solid ${hasError ? '#EF4444' : 'rgba(255,255,255,0.1)'}`,
    color: 'white',
    padding: '0.5rem',
    borderRadius: 6,
    outline: 'none',
    fontFamily: 'inherit',
    fontSize: '0.9rem'
  };

  const optionStyle = { background: '#1e1e2d', color: 'white' };

  return (
    <div style={{ display: 'flex', gap: 6 }}>
      <select value={h} onChange={e => update(e.target.value, m, ampm)} style={selectStyle}>
        {[...Array(12)].map((_, i) => {
          const val = String(i + 1).padStart(2, '0');
          return <option key={val} value={val} style={optionStyle}>{val}</option>;
        })}
      </select>
      <span style={{ color: 'white', alignSelf: 'center', fontWeight: 600 }}>:</span>
      <select value={m} onChange={e => update(h, e.target.value, ampm)} style={selectStyle}>
        {['00', '15', '30', '45'].map(val => (
          <option key={val} value={val} style={optionStyle}>{val}</option>
        ))}
      </select>
      <select value={ampm} onChange={e => update(h, m, e.target.value)} style={selectStyle}>
        <option value="AM" style={optionStyle}>AM</option>
        <option value="PM" style={optionStyle}>PM</option>
      </select>
    </div>
  );
}

// ── Camp Announcements Tab ─────────────────────────────────────────────────────
function CampsTab() {
  const [camps, setCamps] = useState([]);
  const [form, setForm] = useState({ title: '', date: '', startTime: '10:00 AM', endTime: '01:00 PM', place: '', description: '' });
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('tvk_admin_auth');
    fetch(`${API_BASE_URL}/api/admin/camps`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) setCamps(data.data.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt)));
      });
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = 'Required';
    if (!form.date) e.date = 'Required';
    if (!form.startTime) e.startTime = 'Required';
    if (!form.endTime) e.endTime = 'Required';
    if (!form.place.trim()) e.place = 'Required';
    return e;
  };

  const handlePost = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    const payload = {
      title: form.title,
      description: form.description || ' ',
      date: form.date,
      startTime: form.startTime,
      endTime: form.endTime,
      location: form.place,
      address: form.place,
      time: `${form.startTime} - ${form.endTime}`,
      place: form.place,
    };

    const token = sessionStorage.getItem('tvk_admin_auth');
    fetch(`${API_BASE_URL}/api/admin/camps`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setCamps([data.data, ...camps]);
          setForm({ title: '', date: '', startTime: '10:00 AM', endTime: '01:00 PM', place: '', description: '' });
          setSaved(true);
          setTimeout(() => setSaved(false), 3000);
        }
      });
  };

  const handleDelete = id => {
    const token = sessionStorage.getItem('tvk_admin_auth');
    fetch(`${API_BASE_URL}/api/admin/camps/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setCamps(camps.filter(c => c._id !== id));
        }
      });
  };

  const inputStyle = (hasErr) => ({
    width: '100%', background: 'rgba(255,255,255,0.05)',
    border: `1.5px solid ${hasErr ? '#EF4444' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: 10, padding: '0.75rem 1rem',
    color: 'white', fontSize: '0.9rem', outline: 'none',
    boxSizing: 'border-box',
  });

  const labelStyle = {
    display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem',
    fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 6,
  };

  return (
    <div>
      {/* Post Form */}
      <div style={{
        background: 'rgba(255,255,255,0.04)', border: '1.5px solid rgba(255,255,255,0.08)',
        borderRadius: 18, padding: '1.5rem', marginBottom: '1.75rem',
      }}>
        <h3 style={{ color: 'white', fontWeight: 800, margin: '0 0 1.25rem', fontSize: '1rem' }}>
          📢 Post New Camp Announcement
        </h3>

        {saved && (
          <div style={{
            background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)',
            borderRadius: 10, padding: '0.6rem 1rem', marginBottom: '1rem',
            color: '#10B981', fontSize: '0.85rem', fontWeight: 600,
          }}>
            ✓ Camp posted! It is now live as an alert on the website.
          </div>
        )}

        <form onSubmit={handlePost}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={labelStyle}>Camp Title *</label>
            <input name="title" value={form.title} onChange={handleChange}
              placeholder="e.g. Free Medical Camp" style={inputStyle(errors.title)} />
            {errors.title && <p style={{ color: '#EF4444', fontSize: '0.75rem', margin: '4px 0 0' }}>{errors.title}</p>}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={labelStyle}>Date *</label>
              <input type="date" name="date" value={form.date} onChange={handleChange}
                style={{ ...inputStyle(errors.date), colorScheme: 'dark' }} />
              {errors.date && <p style={{ color: '#EF4444', fontSize: '0.75rem', margin: '4px 0 0' }}>{errors.date}</p>}
            </div>
            <div>
              <label style={labelStyle}>Start Time *</label>
              <TimeSelect name="startTime" value={form.startTime} onChange={handleChange} hasError={errors.startTime} />
              {errors.startTime && <p style={{ color: '#EF4444', fontSize: '0.75rem', margin: '4px 0 0' }}>{errors.startTime}</p>}
            </div>
            <div>
              <label style={labelStyle}>End Time *</label>
              <TimeSelect name="endTime" value={form.endTime} onChange={handleChange} hasError={errors.endTime} />
              {errors.endTime && <p style={{ color: '#EF4444', fontSize: '0.75rem', margin: '4px 0 0' }}>{errors.endTime}</p>}
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={labelStyle}>Place / Venue *</label>
            <input name="place" value={form.place} onChange={handleChange}
              placeholder="e.g. Maduravoyal Community Hall" style={inputStyle(errors.place)} />
            {errors.place && <p style={{ color: '#EF4444', fontSize: '0.75rem', margin: '4px 0 0' }}>{errors.place}</p>}
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={labelStyle}>Description (optional)</label>
            <textarea name="description" value={form.description} onChange={handleChange}
              rows={3} placeholder="Additional details about the camp…"
              style={{ ...inputStyle(false), resize: 'none' }} />
          </div>

          <button type="submit" style={{
            background: 'linear-gradient(135deg, #d91b24, #b01219)',
            border: 'none', borderRadius: 10, color: 'white',
            fontWeight: 700, fontSize: '0.95rem',
            padding: '0.75rem 1.75rem', cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(217,27,36,0.35)',
          }}>
            Post Announcement →
          </button>
        </form>
      </div>

      {/* Existing camps */}
      <h3 style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 700, margin: '0 0 1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        Active Announcements ({camps.length})
      </h3>

      {camps.length === 0 && (
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.88rem' }}>No camps posted yet.</p>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {camps.map(camp => (
          <div key={camp._id} style={{
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 14, padding: '1rem 1.25rem',
            display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12,
          }}>
            <div style={{ flex: 1 }}>
              <p style={{ color: 'white', fontWeight: 700, margin: '0 0 4px', fontSize: '0.95rem' }}>
                📢 {camp.title}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', margin: '0 0 2px' }}>
                📅 {camp.date} &nbsp;·&nbsp; 🕐 {camp.time || `${camp.startTime} - ${camp.endTime}`} &nbsp;·&nbsp; 📍 {camp.place || camp.location}
              </p>
              {camp.description && (
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', margin: '4px 0 0' }}>
                  {camp.description}
                </p>
              )}
              <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.72rem', margin: '6px 0 0' }}>
                Posted: {new Date(camp.postedAt).toLocaleString()}
              </p>
            </div>
            <button
              onClick={() => handleDelete(camp._id)}
              title="Delete announcement"
              style={{
                background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)',
                borderRadius: 8, color: '#EF4444', padding: '6px 8px',
                cursor: 'pointer', display: 'flex', alignItems: 'center', flexShrink: 0,
              }}
            >
              <IconTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Dashboard ─────────────────────────────────────────────────────────────
function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('complaints');
  const [stats, setStats] = useState({ total: 0, pending: 0, inprogress: 0, resolved: 0, camps: 0 });

  // Guard — redirect if not logged in
  useEffect(() => {
    const auth = sessionStorage.getItem('tvk_admin_auth');
    if (!auth) {
      navigate('/admin');
      return;
    }

    // Fetch stats
    Promise.all([
      fetch(`${API_BASE_URL}/api/admin/complaints`, { headers: { 'Authorization': `Bearer ${auth}` } }).then(res => res.json()),
      fetch(`${API_BASE_URL}/api/admin/camps`, { headers: { 'Authorization': `Bearer ${auth}` } }).then(res => res.json())
    ]).then(([complaintsRes, campsRes]) => {
      const clist = complaintsRes.success ? complaintsRes.data : [];
      const campsList = campsRes.success ? campsRes.data : [];
      setStats({
        total: clist.length,
        pending: clist.filter(c => { const s = (c.status || '').toLowerCase(); return s === 'pending'; }).length,
        inprogress: clist.filter(c => { const s = (c.status || '').toLowerCase(); return s === 'inprogress' || s === 'in progress'; }).length,
        resolved: clist.filter(c => { const s = (c.status || '').toLowerCase(); return s === 'resolved'; }).length,
        camps: campsList.length,
      });
    }).catch(err => console.error(err));
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('tvk_admin_auth');
    navigate('/admin');
  };

  const tabs = [
    { id: 'complaints', label: 'Complaint Manager', icon: <IconComplaint /> },
    { id: 'camps', label: 'Camp Announcements', icon: <IconCamp /> },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #0a0d14 0%, #0f1520 60%, #160a08 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      {/* Top Bar */}
      <div style={{
        background: 'rgba(255,255,255,0.03)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '0 1.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 60,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img
            src={tvkLogo}
            alt="TVK Logo"
            style={{
              width: 36, height: 36,
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 6px rgba(217,27,36,0.5))'
            }}
          />
          <span style={{ color: 'white', fontWeight: 800, fontSize: '1rem' }}>TVK Admin</span>
          <span style={{
            background: 'rgba(217,27,36,0.2)', border: '1px solid rgba(217,27,36,0.4)',
            color: '#ff7a84', borderRadius: 999, padding: '2px 8px', fontSize: '0.7rem', fontWeight: 700,
          }}>
            Maduravoyal
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            onClick={handleLogout}
            style={{
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 8, color: 'rgba(255,255,255,0.6)',
              padding: '0.45rem 1rem', cursor: 'pointer', fontSize: '0.82rem',
              fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6,
            }}
          >
            <IconLogout /> Logout
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 980, margin: '0 auto', padding: '2rem 1.5rem' }}>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12, marginBottom: '2rem' }}>
          {[
            { label: 'Total Complaints', value: stats.total, color: 'rgba(255,255,255,0.7)' },
            { label: 'Pending', value: stats.pending, color: '#F59E0B' },
            { label: 'In Progress', value: stats.inprogress, color: '#3B82F6' },
            { label: 'Resolved', value: stats.resolved, color: '#10B981' },
            { label: 'Camp Alerts', value: stats.camps, color: '#d91b24' },
          ].map((s, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 14, padding: '1rem 1.25rem', textAlign: 'center',
            }}>
              <p style={{ fontSize: '1.75rem', fontWeight: 900, color: s.color, margin: '0 0 4px' }}>{s.value}</p>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', margin: 0, fontWeight: 600 }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 6, marginBottom: '1.5rem', background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: 4, width: 'fit-content' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '0.6rem 1.25rem', borderRadius: 9, border: 'none',
                cursor: 'pointer', fontWeight: 700, fontSize: '0.88rem',
                transition: 'all 0.2s',
                background: activeTab === tab.id ? 'linear-gradient(135deg, #d91b24, #b01219)' : 'transparent',
                color: activeTab === tab.id ? 'white' : 'rgba(255,255,255,0.4)',
                boxShadow: activeTab === tab.id ? '0 4px 12px rgba(217,27,36,0.3)' : 'none',
              }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'complaints' && <ComplaintsTab />}
        {activeTab === 'camps' && <CampsTab />}
      </div>
    </div>
  );
}

export default AdminDashboard;
