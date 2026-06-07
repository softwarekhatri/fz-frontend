import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { authAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import './VerifyEmailPage.css';

const RESEND_DELAY = 60;

const VerifyEmailPage: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(RESEND_DELAY);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const navigate = useNavigate();
  const location = useLocation();
  const email = (location.state as any)?.email || '';
  const { login } = useAuth();

  // Countdown timer
  useEffect(() => {
    if (countdown <= 0) { setCanResend(true); return; }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleChange = useCallback((index: number, value: string) => {
    // Only take the last entered character
    const char = value.replace(/\D/g, '').slice(-1);
    const newOtp = [...otp];
    newOtp[index] = char;
    setOtp(newOtp);

    // Auto-focus next
    if (char && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all filled
    if (char && index === 5 && newOtp.every((c) => c !== '')) {
      handleVerify(newOtp.join(''));
    }
  }, [otp]);

  const handleKeyDown = useCallback((index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  }, [otp]);

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const newOtp = Array(6).fill('');
    pasted.split('').forEach((char, i) => { newOtp[i] = char; });
    setOtp(newOtp);
    if (pasted.length === 6) {
      inputRefs.current[5]?.focus();
      handleVerify(pasted);
    } else {
      inputRefs.current[pasted.length]?.focus();
    }
  };

  const handleVerify = async (code?: string) => {
    const otpCode = code || otp.join('');
    if (otpCode.length !== 6) {
      toast.error('Please enter all 6 digits');
      return;
    }
    setIsVerifying(true);
    try {
      const res = await authAPI.verifyEmail({ email, otp: otpCode });
      const { token, user } = res.data;
      if (token) login(token, user);
      toast.success(`Welcome to FashionZone, ${user?.name || 'there'}! 🎉`);
      navigate('/', { replace: true });
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Invalid OTP. Please try again.');
      setOtp(Array(6).fill(''));
      inputRefs.current[0]?.focus();
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = async () => {
    if (!canResend) return;
    setIsResending(true);
    try {
      await authAPI.resendOTP(email);
      toast.success('OTP resent! Check your inbox.');
      setCountdown(RESEND_DELAY);
      setCanResend(false);
      setOtp(Array(6).fill(''));
      inputRefs.current[0]?.focus();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Failed to resend OTP');
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="verify-page">
      <motion.div
        className="verify-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Icon */}
        <div className="verify-icon">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className="verify-title">Verify Your Email</h1>
        <p className="verify-sub">
          We've sent a 6-digit code to
        </p>
        <p className="verify-email">{email || 'your email address'}</p>
        <p className="verify-hint">Check your spam folder if you don't see it.</p>

        {/* OTP Inputs */}
        <div className="otp-container" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <motion.input
              key={index}
              ref={(el) => { inputRefs.current[index] = el; }}
              type="text"
              inputMode="numeric"
              pattern="\d*"
              maxLength={2}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={`otp-input ${digit ? 'filled' : ''} ${isVerifying ? 'verifying' : ''}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.06 }}
              autoFocus={index === 0}
              disabled={isVerifying}
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          className="verify-btn"
          onClick={() => handleVerify()}
          disabled={isVerifying || otp.some((d) => !d)}
        >
          {isVerifying ? (
            <>
              <span className="btn-spinner" />
              Verifying…
            </>
          ) : 'Verify Email'}
        </button>

        {/* Resend */}
        <div className="resend-section">
          {canResend ? (
            <button
              className="resend-btn"
              onClick={handleResend}
              disabled={isResending}
            >
              {isResending ? 'Resending…' : 'Resend OTP'}
            </button>
          ) : (
            <p className="resend-countdown">
              Resend OTP in{' '}
              <span className="countdown-val">
                {String(Math.floor(countdown / 60)).padStart(2, '0')}:
                {String(countdown % 60).padStart(2, '0')}
              </span>
            </p>
          )}
        </div>

        {/* Back to login */}
        <button
          className="back-to-login"
          onClick={() => navigate('/login')}
        >
          ← Back to Login
        </button>
      </motion.div>
    </div>
  );
};

export default VerifyEmailPage;
