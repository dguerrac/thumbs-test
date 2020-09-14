import React from 'react';
import Thumb from '../Thumb/Thumb';
import Button from '../Button/Button';
import { HiThumbUp, HiThumbDown } from 'react-icons/hi';

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

	const thumbs = [ HiThumbUp, HiThumbDown ];

	const getDate = startDate => ((new Date().getMonth() + 1) - (new Date(startDate).getMonth() + 1));

  return (
    <section className={'character-container'} style={{backgroundImage: `url('${imageUrl}')`}}>
    	<div className={'character-container__content'}>
    		<div className={'title'}>
    			<div><Thumb Thumb={HiThumbDown}/></div>
    			<h2>{name}</h2>
    		</div>
    		<div className={'body'}>
    			<p><b>{getDate(startDate)} months ago</b>{' '}in{' '}{category}</p>
    			<p>{description}</p>
    			<div className={'body__vote'}>
    				{thumbs.map((thumb, index) => {
    					return (
    						<button key={index} className={`body__vote_thumbs body__vote_thumbs--${index}`}>
    							<Thumb Thumb={thumb}/>
    						</button>	
    					)
    				})}
    				<Button category={'vote'} className={'button-vote'}>
    					Vote now
    				</Button>
    			</div>
    		</div>
    	</div>
    </section>
  )
}

export default Character;