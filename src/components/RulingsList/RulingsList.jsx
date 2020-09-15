import React, { useState, useEffect } from 'react';
import { rulingsList } from '../../utils/rulingsList';
import Character from '../Character/Character';
import { ToastContainer } from "react-toastify";

import './RulingsList.scss';

const RulingsList = () => {
	const [data, setData] = useState(() =>
      JSON.parse(localStorage.getItem('rulingsList')) || rulingsList
    );
  useEffect(() => {
    localStorage.setItem('rulingsList', JSON.stringify(data))
  }, [data])

	const handleUpdateData = (id, thumb) => {
    
    const characters = data.map(character => {
      if (character.id === id) {
        character[thumb] += 1;
        return character;
      }
      return character;
    });

    setData(characters);
  }

  return (
    <section className={'rulings-list-container'}>
    	<h2>Previous Rulings</h2>
    	<div className={'rulings-list-container__list'}>
    		{(data || []).map((character, index) => {
    			return (
    				<Character key={index} character={character} handleUpdateData={handleUpdateData}/>
    			)
    		})}	
    	</div>
    	<ToastContainer/>
    </section>
  )
}

export default RulingsList;