import React from 'react';

import './Button.scss';

const Button = ({ children, type, className, category, disabled, onClick }) => (
  <button
  	disabled={disabled}
    type={type}
    className={`button button--${category} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;