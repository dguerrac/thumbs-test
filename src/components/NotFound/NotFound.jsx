import React from 'react';
import Button from '../Button/Button';
import './NotFound.scss';

const NotFound = () => (
  <section className={'not-found-container'}>
  	<div className={'not-found-container__message'}>
  		<p>We've not found the person you are looking for</p>	
  	</div>
  	<div className={'not-found-container__add'}>
  		<p>You may want to add someone else</p>
  		<Button category={'new'}>Submit a Name</Button>
  	</div>
  </section>
);

export default NotFound;