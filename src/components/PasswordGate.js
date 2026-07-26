import React, { useEffect, useState } from 'react';
import MainContent from './Main';

const PASSWORD = 'lzpd';

const PasswordGate = () => {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const savedAccess = window.sessionStorage.getItem('portfolio-access');
    if (savedAccess === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.toLowerCase() === PASSWORD) {
      window.sessionStorage.setItem('portfolio-access', 'true');
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  if (isUnlocked) {
    return <MainContent />;
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0f172a',
        color: '#f8fafc',
        fontFamily: 'Arial, sans-serif',
        padding: '24px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
        }}
      >
        <h2 style={{ marginBottom: '8px' }}>Portfolio Access</h2>
        <p style={{ marginBottom: '20px', lineHeight: 1.5, color: '#cbd5e1' }}>
          Enter the password to view Leah's portfolio.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
            style={{
              width: '94%',
              padding: '12px 12px',
              borderRadius: '8px',
              border: '1px solid #64748b',
              marginBottom: '12px',
              fontSize: '16px',
            }}
          />

          {error ? (
            <p style={{ color: '#fda4af', marginBottom: '12px' }}>{error}</p>
          ) : null}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              background: '#38bdf8',
              color: '#fff',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Enter Portfolio
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordGate;
