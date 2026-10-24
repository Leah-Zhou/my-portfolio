import React, { useEffect, useState } from 'react';
import MainContent from './Main';
import './styleSheet/password.scss';

const PASSWORD = 'khds';

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
      window.history.replaceState(null, '', '/');
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  if (isUnlocked) {
    return <MainContent />;
  }

  const fieldClassName = [
    'password-gate__field',
    password ? 'password-gate__field--filled' : '',
    error ? 'password-gate__field--error' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className="password-gate">
      <form className="password-gate__panel" onSubmit={handleSubmit}>
        <h1 className="password-gate__title">Weleome to the portfolio designed & built by Leah</h1>

        <div className={fieldClassName}>
          <label className="password-gate__label" htmlFor="portfolio-password">
            Enter password
          </label>
          <input
            id="portfolio-password"
            className="password-gate__input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? 'portfolio-password-error' : undefined}
            autoComplete="current-password"
          />
          <span className="password-gate__line" aria-hidden="true" />
          {error ? (
            <p id="portfolio-password-error" className="password-gate__error" role="alert">
              {error}
            </p>
          ) : null}
        </div>

        <button className="password-gate__button" type="submit">
          <span className="password-gate__blob" aria-hidden="true" />
          <span className="password-gate__button-label">Enter Portfolio</span>
        </button>
      </form>
    </div>
  );
};

export default PasswordGate;
