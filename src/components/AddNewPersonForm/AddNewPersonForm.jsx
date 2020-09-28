import React from 'react';
import { Formik, Form } from 'formik';
import FormControl from '../FormControl/FormControl';
import Button from '../Button/Button';
import { validationNewPerson } from '../../utils/validationSchema';
import './AddNewPersonForm.scss';

const AddNewPersonForm = (props) => {
	const initialValues = {
		name: '',
    category: '',
    description: '',
    imageUrl: '',
    startDate: null,
	}
	
	const onSubmit = values => console.log('Form data', JSON.parse(JSON.stringify(values)));
  return (
    <Formik
    	initialValues={initialValues}
    	validationSchema={validationNewPerson}
    	onSubmit={onSubmit}
    >
    	{formikProps => {
        console.log('formikProps', formikProps);
        return (
          <Form className={'form-container'}>
            <FormControl 
              control={'input'} 
              type={'text'} 
              label={'Name'} 
              name={'name'}
            />
            <FormControl 
              control={'input'} 
              type={'text'} 
              label={'Category'} 
              name={'category'}
            />
            <FormControl 
              control={'textarea'} 
              type={'url'} 
              label={'Description'} 
              name={'description'}
            />
            <FormControl 
              control={'input'} 
              type={'url'} 
              label={'Image Url'} 
              name={'imageUrl'}
            />
            <FormControl 
              control={'date'}  
              label={'Pick a start date'} 
              name={'startDate'}
            />
            <Button 
              type={'submit'} 
              category={'vote'}
              disabled={!formikProps.isValid}
            >
              Submit a Name
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default AddNewPersonForm;