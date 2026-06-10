'use client';

import { useState } from 'react';

const LockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <circle cx="12" cy="16" r="1" fill="#1a1a1a" stroke="none" />
  </svg>
);

export default function PasswordPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!password.trim()) {
      setError('Please enter a password.');
      return;
    }
    // Add your password logic here
    setError('Incorrect password. Please try again.');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#d4d4d4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        padding: '24px',
      }}
    >
      {/* Card */}
      <div
        style={{
          backgroundColor: 'rgba(255,255,255,0.45)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.6)',
          borderRadius: '20px',
          padding: '52px 56px',
          width: '100%',
          maxWidth: '480px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {/* Lock icon circle */}
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '4px',
          }}
        >
          <LockIcon />
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '20px',
            fontWeight: 800,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#0f172a',
            margin: 0,
          }}
        >
          Protected Page
        </h1>

        {/* Password label + input row */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: '#1a1a1a',
              textAlign: 'center',
            }}
          >
            Password
          </label>

          <div style={{ display: 'flex', gap: '0', width: '100%' }}>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              style={{
                flex: 1,
                padding: '13px 16px',
                fontSize: '13px',
                color: '#333',
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '8px 0 0 8px',
                outline: 'none',
                fontFamily: 'sans-serif',
              }}
            />
            <button
              onClick={handleSubmit}
              style={{
                backgroundColor: '#FAC104',
                color: '#fff',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                padding: '13px 20px',
                border: 'none',
                borderRadius: '0 8px 8px 0',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontFamily: 'sans-serif',
              }}
            >
              Submit
            </button>
          </div>

          {/* Error message */}
          {error && (
            <p style={{ fontSize: '12px', color: '#e05252', textAlign: 'center', margin: 0 }}>
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
