import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './FormComponents.scss';

const DateInput = ({label, name, ...rest}) => {
  return (
    <div className={'input-container'}>
    	<label htmlFor={name} className={'input-container__label'}>{label}</label>
    	<Field name={name}>
    		{({form, field}) => {
    			const { setFieldValue } = { ...form };
    			const { value } = { ...field };
    			return (
    				<DateView 
    					id={name}
    					{...field}
    					{...rest}
    					dateFormat={'yyyy/MM/dd'}
    					selected={value}
    					onChange={val => setFieldValue(name, val)}
              showPopperArrow={false}
              className={'input-container__input'}
    				/>
    			)
    		}}
    	</Field>
    	<ErrorMessage name={name} component={TextError}/>
    </div>
  );
}

export default DateInput;