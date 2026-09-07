import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tvkLogo from '../assets/TVK-LOGO.png';

function AdminLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Placeholder authentication — replace with real API call
    setTimeout(() => {
      if (formData.username === 'admin' && formData.password === 'tvk2024') {
        sessionStorage.setItem('tvk_admin_auth', 'true');
        navigate('/admin-dashboard');
      } else {
        setError('Invalid username or password. Please try again.');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="admin-login-page" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0a0d14 0%, #121624 50%, #1a0a08 100%)',
      padding: '2rem'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '24px',
        padding: '2.5rem',
        backdropFilter: 'blur(20px)'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            margin: '0 auto 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src={tvkLogo}
              alt="TVK Logo"
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 6px 18px rgba(217,27,36,0.45))'
              }}
            />
          </div>
          <h1 style={{
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: '800',
            margin: '0 0 0.25rem',
            letterSpacing: '-0.02em'
          }}>Admin Login</h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', margin: 0 }}>
            TVK Maduravoyal — Restricted Access
          </p>
        </div>

        {/* Error Banner */}
        {error && (
          <div style={{
            background: 'rgba(217,27,36,0.15)',
            border: '1px solid rgba(217,27,36,0.4)',
            borderRadius: '12px',
            padding: '0.75rem 1rem',
            marginBottom: '1.25rem',
            color: '#ff6b70',
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            ⚠️ {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{
              display: 'block',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.8rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.5rem'
            }}>
              Username
            </label>
            <input
              id="admin-username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '12px',
                padding: '0.875rem 1rem',
                color: 'white',
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.8rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.5rem'
            }}>
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '12px',
                padding: '0.875rem 1rem',
                color: 'white',
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s'
              }}
            />
          </div>

          <button
            id="admin-login-btn"
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              background: loading ? 'rgba(217,27,36,0.5)' : 'linear-gradient(135deg, #d91b24, #b01219)',
              border: 'none',
              borderRadius: '12px',
              padding: '0.9rem',
              color: 'white',
              fontWeight: '700',
              fontSize: '1rem',
              cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: '0 6px 20px rgba(217,27,36,0.3)',
              transition: 'all 0.2s',
              letterSpacing: '0.02em'
            }}
          >
            {loading ? 'Signing in...' : 'Sign In →'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
