import React from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  category: PropTypes.string,
};

Button.defaultProps = {
  type: 'text',
  className: '',
  category: 'primary',
};

export default Button;