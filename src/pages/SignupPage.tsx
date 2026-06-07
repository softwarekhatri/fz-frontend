import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { authAPI } from '../services/api';
import './LoginPage.css';
import './SignupPage.css';

const getPasswordStrength = (password: string): { score: number; label: string; color: string } => {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return { score, label: 'Very Weak', color: '#F44336' };
  if (score === 2) return { score, label: 'Weak', color: '#FF9800' };
  if (score === 3) return { score, label: 'Fair', color: '#FFC107' };
  if (score === 4) return { score, label: 'Strong', color: '#4CAF50' };
  return { score, label: 'Very Strong', color: '#2E7D32' };
};

const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const strength = getPasswordStrength(password);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    else if (name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Enter a valid email';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Minimum 6 characters required';
    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    try {
      await authAPI.register({ name: name.trim(), email, password });
      toast.success('Account created! Please verify your email.');
      navigate('/verify-email', { state: { email } });
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      {/* Left */}
      <motion.div
        className="auth-left signup-left"
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
            Fashion is the armor to survive the reality of everyday life.
          </h2>
          <p className="auth-left-sub">— Bill Cunningham</p>
          <div className="auth-perks">
            {['Join 500K+ Fashion Lovers', 'Get ₹200 Welcome Coupon', 'Access Member-Only Sales', 'Free Styling Advice'].map((perk) => (
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

      {/* Right */}
      <motion.div
        className="auth-right"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="auth-form-container">
          <h1 className="auth-form-title">Create Account</h1>
          <p className="auth-form-sub">
            Already have an account?{' '}
            <Link to="/login" className="auth-link">Sign in</Link>
          </p>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div className="auth-field">
              <label>Full Name</label>
              <div className="auth-input-wrap">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="auth-input-icon">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: '' })); }}
                  className={errors.name ? 'error' : ''}
                  autoComplete="name"
                />
              </div>
              {errors.name && <span className="auth-error-msg">{errors.name}</span>}
            </div>

            {/* Email */}
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
                  onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: '' })); }}
                  className={errors.email ? 'error' : ''}
                  autoComplete="email"
                />
              </div>
              {errors.email && <span className="auth-error-msg">{errors.email}</span>}
            </div>

            {/* Password */}
            <div className="auth-field">
              <label>Password</label>
              <div className="auth-input-wrap">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="auth-input-icon">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
                </svg>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Min. 6 characters"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: '' })); }}
                  className={errors.password ? 'error' : ''}
                  autoComplete="new-password"
                />
                <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" strokeLinecap="round" />
                      <line x1="1" y1="1" x2="23" y2="23" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <span className="auth-error-msg">{errors.password}</span>}

              {/* Password Strength */}
              {password.length > 0 && (
                <div className="password-strength">
                  <div className="strength-bars">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="strength-bar"
                        style={{ background: i <= strength.score ? strength.color : 'var(--gray-200)' }}
                      />
                    ))}
                  </div>
                  <span className="strength-label" style={{ color: strength.color }}>
                    {strength.label}
                  </span>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="auth-field">
              <label>Confirm Password</label>
              <div className="auth-input-wrap">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="auth-input-icon">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
                </svg>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Re-enter password"
                  value={confirmPassword}
                  onChange={(e) => { setConfirmPassword(e.target.value); setErrors((p) => ({ ...p, confirmPassword: '' })); }}
                  className={errors.confirmPassword ? 'error' : ''}
                  autoComplete="new-password"
                />
              </div>
              {errors.confirmPassword && <span className="auth-error-msg">{errors.confirmPassword}</span>}
            </div>

            <button type="submit" className="auth-submit-btn" disabled={isLoading}>
              {isLoading ? (
                <>
                  <span className="btn-spinner" />
                  Creating Account…
                </>
              ) : 'Create Account'}
            </button>

            <p className="auth-terms">
              By signing up, you agree to our{' '}
              <a href="/terms">Terms of Service</a> and{' '}
              <a href="/privacy">Privacy Policy</a>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
