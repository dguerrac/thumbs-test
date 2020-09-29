import React from 'react';
import TextInput from './FormComponents/TextInput';
import TextArea from './FormComponents/TextArea';
import DateInput from './FormComponents/DateInput';

const FormControl = ({control, ...rest}) => {
  switch (control) {
  	case 'input':
  		return <TextInput {...rest}/>;
  	case 'textarea':
  		return <TextArea {...rest} />;
  	case 'date':
  		return <DateInput {...rest} />;
  	default: return null;
  }
}

export default FormControl;