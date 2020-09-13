import React from 'react';
import Button from '../Button/Button';

import './RulingsList.scss';

const RulingsList = () => {
  return (
    <section className={'rulings-list-container'}>
    	<h2>Previous Rulings</h2>
    	<Button category={'new'}>
    		Vote now
    	</Button>
    </section>
  )
}

export default RulingsList;