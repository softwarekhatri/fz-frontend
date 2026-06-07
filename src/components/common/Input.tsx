import React, { forwardRef } from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, leftIcon, rightIcon, onRightIconClick, className = '', id, ...rest }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`;
    return (
      <div className={`input-wrapper ${className}`}>
        {label && (
          <label htmlFor={inputId} className="input-label">
            {label}
          </label>
        )}
        <div className={`input-field-wrap ${error ? 'input-error' : ''} ${leftIcon ? 'has-left-icon' : ''} ${rightIcon ? 'has-right-icon' : ''}`}>
          {leftIcon && <span className="input-icon input-icon-left">{leftIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            className="input-field"
            {...rest}
          />
          {rightIcon && (
            <button
              type="button"
              className="input-icon input-icon-right input-icon-btn"
              onClick={onRightIconClick}
              tabIndex={-1}
            >
              {rightIcon}
            </button>
          )}
        </div>
        {error && <p className="input-error-msg">{error}</p>}
        {hint && !error && <p className="input-hint">{hint}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
