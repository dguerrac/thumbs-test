import React, { useReducer, useEffect, createContext, useContext } from 'react';
import { rulingsList } from '../../utils/rulingsList';
import charactersReducer from '../../utils/charactersReducer';

const RulingsListContext = createContext();

let initialState; 
// if data in localstorage is malformed
try {
  // If the left-hand side is null or undefined use the value on the right
  initialState = JSON.parse(localStorage.getItem('rulingsList')) ?? rulingsList;
} catch {
  console.error('data could not be parsed into JSON');
  initialState = [];
}

const RulingsListProvider = ({children}) => {
  //If the second argument is a function => The function will only be run the first time the component renders (for expensive calculations)
  const [state, dispatch] = useReducer(charactersReducer, initialState);

  useEffect(() => {
    localStorage.setItem('rulingsList', JSON.stringify(state));
  }, [state]);

  /*const handleUpdateVote = (id, thumb) => {
    setData((items) => items.map((i) => i.id === id ? { ...i, [thumb]: i[thumb] + 1 } : i));
  }

  const getRandomNum = () => Math.floor(Math.random() * 100000);

  const handleAddPerson = (objectPerson, name) => {
  	setData(prevData => ([...prevData, {...objectPerson, thumbsDown: 0, thumbsUp: 0, id: `${getRandomNum()}-${name}`}]));
  }*/

  return (
    <RulingsListContext.Provider 
    	value={{ 
	    	state, 
	    	dispatch,
    	}}
    >
    	{children}
    </RulingsListContext.Provider>
  );
}

export function useRulingsList() {
  const context = useContext(RulingsListContext);
  if (!context) {
    throw new Error('Expected an StoreContextProvider somewhere in the react tree to set context value');
  }
  return context;
}

export default RulingsListProvider;