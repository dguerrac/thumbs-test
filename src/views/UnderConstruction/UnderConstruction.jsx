import React from 'react';
import './UnderConstruction.scss';

const UnderConstruction = ({title}) => (
  <div className={'under-construction-container'}>
  	<div className={'under-construction-container__content'} >
  		<h2>{title}</h2>
  		<p>Coming soon...</p>	
  	</div>
  </div>
);

export default UnderConstruction;