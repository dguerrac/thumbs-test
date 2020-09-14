import React from 'react';
import './Character.scss';

const Character = ({character}) => {
	const { 
		category = '', 
		description = '', 
		imageUrl, 
		name = '', 
		startDate = '', 
		thumbsDown, 
		thumbsUp, 
	} = { ...character };

  return (
    <section className={'character-container'} style={{backgroundImage: `url('${imageUrl}')`}}>
    	s
    </section>
  )
}

export default Character;