import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import './FormComponents.scss';

const TextArea = ({label, name, ...rest}) => {
  return (
    <div className={'input-container'}>
    	<label htmlFor={name} className={'input-container__label'}>{label}</label>
    	<Field
        rows={5}
    		as={'textarea'}
    		id={name} 
    		name={name} 
    		{...rest} 
    		className={'input-container__input'}
    	/>
    	<ErrorMessage name={name} component={TextError}/>
    </div>
  );
}

export default TextArea;