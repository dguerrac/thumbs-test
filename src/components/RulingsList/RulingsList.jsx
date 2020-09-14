import React, { useState } from 'react';
import { rulingsList } from '../../utils/rulingsList';
import Character from '../Character/Character';

import './RulingsList.scss';

const RulingsList = () => {
	const [data, setData] = useState(rulingsList);
	console.log(data);

  return (
    <section className={'rulings-list-container'}>
    	<h2>Previous Rulings</h2>
    	<div className={'rulings-list-container__list'}>
    		{(data || []).map((character, index) => {
    			return (
    				<Character key={index} character={character}/>
    			)
    		})}	
    	</div>
    </section>
  )
}

export default RulingsList;