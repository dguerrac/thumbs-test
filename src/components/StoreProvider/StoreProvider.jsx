import React, { useState, useEffect, createContext } from 'react';
import { rulingsList } from '../../utils/rulingsList';

export const StoreContext = createContext();

const StoreProvider = ({children}) => {
	const [data, setData] = useState(() =>
    JSON.parse(localStorage.getItem('rulingsList')) || rulingsList
  );

  useEffect(() => {
    localStorage.setItem('rulingsList', JSON.stringify(data))
  }, [data]);

  const [ showForm, setShowForm ] = useState(false);

  const handleShowForm = () => setShowForm(!showForm);

  const handleUpdateVote = (id, thumb) => {
    const characters = data.map(character => {
      if (character.id === id) {
        character[thumb] += 1;
        return character;
      }
      return character;
    });
    setData(characters);
  }

  const getRandomNum = () => Math.floor(Math.random() * 100000);

  const handleAddPerson = (objectPerson, name) => {
  	setData(prevData => ([...prevData, {...objectPerson, thumbsDown: 0, thumbsUp: 0, id: `${getRandomNum()}-${name}`}]));
  }

  return (
    <StoreContext.Provider 
    	value={{ 
	    	data, 
	    	handleUpdateVote,
	    	handleAddPerson,
	    	showForm, 
	    	handleShowForm,
    	}}
    >
    	{children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;