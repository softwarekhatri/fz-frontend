import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  children,
  className = '',
  disabled,
  ...rest
}) => {
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth ? 'btn-full' : '',
    isLoading ? 'btn-loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} disabled={disabled || isLoading} {...rest}>
      {isLoading ? (
        <>
          <span className="btn-spinner" aria-hidden="true" />
          <span className="btn-loading-text">Loading…</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="btn-icon btn-icon-left">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="btn-icon btn-icon-right">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
