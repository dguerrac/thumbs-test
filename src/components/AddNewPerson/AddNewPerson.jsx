import React from 'react';
import Button from '../Button/Button';
import './AddNewPerson.scss';

const AddNewPerson = () => (
  <section className={'add-new-person-container'}>
  	<div className={'add-new-person-container__crowd'}>
  		<div className={'question'}>
  			<p>Is there anyone else you would want us to add?</p>
  		</div>
  		<Button category={'new'} className={'new-person'}>
  			Submit a Name
  		</Button>
  	</div>
 	</section>
);

export default AddNewPerson;