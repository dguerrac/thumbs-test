import React, { useState } from 'react';
import AddNewPersonForm from '../AddNewPersonForm/AddNewPersonForm';
import Button from '../Button/Button';

import './AddNewPerson.scss';

const AddNewPerson = () => {
  const [ showForm, setShowForm ] = useState(false);

  const handleShowForm = () => setShowForm(!showForm);
  /*useEffect(() => {
    showForm ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '')
  }, [showForm]);*/
	return (
		<section className={'add-new-person-container'}>
		 	<div className={'add-new-person-container__crowd'}>
		 		<div className={'question'}>
		 			<p>Is there anyone else you would want us to add?</p>
		 		</div>
		 		<Button category={'new'} onClick={!showForm ? handleShowForm : null}>
		 			Submit a Name
		 		</Button>
		 	</div>
		 	{showForm && <AddNewPersonForm handleShowForm={handleShowForm}/>}
		</section>
	);
}

export default AddNewPerson;