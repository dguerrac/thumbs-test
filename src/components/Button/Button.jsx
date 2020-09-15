import React from 'react';

import './Button.scss';

const Button = ({ children, type, className, category, onClick }) => (
  <button
    type={type}
    className={`button button--${category} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;