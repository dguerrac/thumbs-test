import React from 'react';
import './FormComponents.scss';

const TextError = ({children}) => {
  return (
    <div className={'input-container__error'}>
    	{children}
    </div>
  );
}

export default TextError;