import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { authAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || '/';

  const validate = (): boolean => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Enter a valid email';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    try {
      const res = await authAPI.login({ email, password });
      const { token, user } = res.data;
      login(token, user);
      toast.success(`Welcome back, ${user.name}! 👋`);
      navigate(from, { replace: true });
    } catch (err: any) {
      const msg = err?.response?.data?.message || 'Login failed. Please try again.';
      toast.error(msg);
      if (msg.toLowerCase().includes('verify')) {
        navigate('/verify-email', { state: { email } });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      {/* Left Panel */}
      <motion.div
        className="auth-left"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="auth-left-overlay" />
        <div className="auth-left-content">
          <div className="auth-logo">
            <span className="logo-icon">✦</span>
            <span>FashionZone</span>
          </div>
          <h2 className="auth-left-heading">
            Style is a way to say who you are without having to speak.
          </h2>
          <p className="auth-left-sub">— Rachel Zoe</p>
          <div className="auth-perks">
            {['Exclusive Member Deals', 'Early Access to Sales', 'Free Returns on Orders', 'Personalized Recommendations'].map((perk) => (
              <div key={perk} className="perk-item">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {perk}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Panel */}
      <motion.div
        className="auth-right"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="auth-form-container">
          <h1 className="auth-form-title">Welcome Back</h1>
          <p className="auth-form-sub">
            Don't have an account?{' '}
            <Link to="/signup" className="auth-link">Sign up free</Link>
          </p>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="auth-field">
              <label>Email Address</label>
              <div className="auth-input-wrap">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="auth-input-icon">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
                  className={errors.email ? 'error' : ''}
                  autoComplete="email"
                />
              </div>
              {errors.email && <span className="auth-error-msg">{errors.email}</span>}
            </div>

            <div className="auth-field">
              <div className="auth-field-header">
                <label>Password</label>
                <button type="button" className="forgot-link" onClick={() => toast('Forgot password feature coming soon!')}>
                  Forgot password?
                </button>
              </div>
              <div className="auth-input-wrap">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="auth-input-icon">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
                </svg>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: undefined })); }}
                  className={errors.password ? 'error' : ''}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" strokeLinecap="round" />
                      <line x1="1" y1="1" x2="23" y2="23" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <span className="auth-error-msg">{errors.password}</span>}
            </div>

            <button type="submit" className="auth-submit-btn" disabled={isLoading}>
              {isLoading ? (
                <>
                  <span className="btn-spinner" />
                  Signing in…
                </>
              ) : 'Sign In'}
            </button>
          </form>

          <div className="auth-divider"><span>or</span></div>

          <p className="auth-signup-prompt">
            New to FashionZone?{' '}
            <Link to="/signup" className="auth-link">Create your account</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
