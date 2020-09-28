import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import './FormComponents.scss';

const TextInput = ({label, name, ...rest}) => {
  return (
    <div className={'input-container'}>
    	<label htmlFor={name} className={'input-container__label'}>{label}</label>
    	<Field 
    		id={name} 
    		name={name} 
    		{...rest} 
    		className={'input-container__input'}
    	/>
    	<ErrorMessage name={name} component={TextError}/>
    </div>
  );
}

export default TextInput;