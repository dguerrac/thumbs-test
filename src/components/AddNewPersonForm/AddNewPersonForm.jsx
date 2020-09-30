import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import FormControl from '../FormControl/FormControl';
import Button from '../Button/Button';
import { StoreContext } from '../StoreProvider/StoreProvider';
import { validationNewPerson } from '../../utils/validationSchema';
import { AiOutlineClose } from 'react-icons/ai';
import './AddNewPersonForm.scss';

const AddNewPersonForm = (props) => {
  const { handleShowForm, handleAddPerson } = useContext(StoreContext);
	const initialValues = {
		name: '',
    category: '',
    description: '',
    imageUrl: '',
    startDate: null,
	}
	
	const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    const upgradeValues = JSON.parse(JSON.stringify(values));
    const { name } = { ...upgradeValues };
    handleAddPerson(upgradeValues, name);
    handleShowForm();
  }
  return (
    <Formik
    	initialValues={initialValues}
    	validationSchema={validationNewPerson}
    	onSubmit={onSubmit}
    >
    	{formikProps => {
        return (
          <Form className={'form-container'}>
            <div 
              role={'button'}
              aria-label={'search-close'}
              tabIndex={0}
              className={'close-form'}
              onClick={handleShowForm}
            >
              <AiOutlineClose />
            </div>
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
              className={`${(!formikProps.isValid || formikProps.isSubmitting) ? 'form-container__button-disabled' : 'form-container__button'}`}
              type={'submit'} 
              category={'vote'}
              disabled={!formikProps.isValid || formikProps.isSubmitting}
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