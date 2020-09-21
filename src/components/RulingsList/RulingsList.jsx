import React, { useState, useEffect } from 'react';
import { rulingsList } from '../../utils/rulingsList';
import Character from '../Character/Character';
import { ToastContainer } from "react-toastify";

import './RulingsList.scss';

const RulingsList = () => {
	const [data, setData] = useState(() =>
      JSON.parse(localStorage.getItem('rulingsList')) || rulingsList
    );
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('rulingsList', JSON.stringify(data))
  }, [data]);

  useEffect(() => {
    let temporal = data;
    if (!!query) {
      temporal = data.filter(person => {
        const { name } = { ...person };
        return `${name}`.toLowerCase().includes(query.toLowerCase());
    });
    }
    setFiltered(temporal);
  }, [data, query]);

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
      <div className={'rulings-list-container__search'}>
        <label htmlFor={'search'} className={'rulings-list-container__search_label'}>Previous Rulings</label>
        <input
          className={'rulings-list-container__search_input'}
          id={'search'}
          type={'text'}
          onChange={e => setQuery(e.target.value)}
          value={query}
          placeholder={'Search a person...'}
        />
      </div>
    	<div className={'rulings-list-container__list'}>
    		{(filtered || []).map((character, index) => {
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