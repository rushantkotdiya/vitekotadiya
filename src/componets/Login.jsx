import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.min.js';
import'bootstrap-icons/font/bootstrap-icons.css'
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    const sixDigitRegex = /^\d{6}$/;

    if (!sixDigitRegex.test(password)) {
      setError('Password must be exactly 6 digits.');
      return;
    }

    setError('');
    alert('Login successful (demo)');
    // ✅ Redirect after login (example without React Router)
    window.location.href = "/home";
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <p>Enter your credentials below</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3 position-relative">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              id="password"
              placeholder="6-digit password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="password-toggle-btn"
              tabIndex={-1}
            >
              <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'}`}></i>
            </button>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            <a href='home'>Login</a>
          </button>

          <div className="signup-link">
            Don’t have an account? <a href="#">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
}
