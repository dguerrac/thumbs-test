import React, { useState, useEffect, useContext } from 'react';
//import { rulingsList } from '../../utils/rulingsList';
import Character from '../Character/Character';
import NotFound from '../NotFound/NotFound';
import { StoreContext } from '../StoreProvider/StoreProvider';
import { ToastContainer } from "react-toastify";
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

import './RulingsList.scss';

const RulingsList = () => {
  const { data } = useContext(StoreContext);
	/*const [data, setData] = useState(() =>
      JSON.parse(localStorage.getItem('rulingsList')) || rulingsList
    );*/
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState('');

  /*useEffect(() => {
    localStorage.setItem('rulingsList', JSON.stringify(data))
  }, [data]);*/

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

	/*const handleUpdateData = (id, thumb) => {
    
    const characters = data.map(character => {
      if (character.id === id) {
        character[thumb] += 1;
        return character;
      }
      return character;
    });

    setData(characters);
  }*/

  const handleCleanInput = () => query ? setQuery('') : null;

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
        <div 
          role={'button'}
          aria-label={'search-close'}
          tabIndex={0}
          className={'rulings-list-container__search_icon'}
          onClick={handleCleanInput}
        >
          {query ? <AiOutlineClose/> : <AiOutlineSearch/>}
        </div>
      </div>
      {filtered.length === 0 ? 
        <div className={'rulings-list-container__empty-list'}>
          <NotFound/>    
        </div> : 
        <div className={'rulings-list-container__list'}>
          {(filtered || []).map((character, index) => {
            return (
              <Character key={index} character={character}/>
            )
          })} 
        </div>
      }
    	<ToastContainer/>
    </section>
  )
}

export default RulingsList;