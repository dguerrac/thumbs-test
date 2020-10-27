import React, { useState, useContext } from 'react';
import Thumb from '../Thumb/Thumb';
import Button from '../Button/Button';
import { StoreContext } from '../StoreProvider/StoreProvider';
import showNotification from '../../utils/showNotification';
import { HiThumbUp, HiThumbDown } from 'react-icons/hi';

import './Character.scss';

const Character = ({ character }) => {
  const { handleUpdateVote } = useContext(StoreContext);
	const { 
		category = '', 
		description = '',
		id = '', 
		imageUrl, 
		name = '', 
		startDate = '', 
		thumbsDown, 
		thumbsUp, 
	} = { ...character };

	const [tab, setTab] = useState(-1);
	const [showThumbs, setShowThumbs] = useState(false);

	const thumbs = [ HiThumbUp, HiThumbDown ];

	const getDate = startDate => Math.floor(((new Date() - new Date(startDate) + 1000) / 1000) / (3600 * 24) / 30);

	const getPercentage = (thumbsUp, thumbsDown) => {
		const totalVotes = thumbsUp + thumbsDown;
		const thumbsUpPercentage = (thumbsUp * 100) / totalVotes;
		const thumbsDownPercentage = (thumbsDown * 100) / totalVotes;
		return {
			thumbsUpPercentage,
			thumbsDownPercentage,
			totalVotes,
		}
	}
	const { thumbsUpPercentage, thumbsDownPercentage, totalVotes } = getPercentage(thumbsUp, thumbsDown);
	const handleVoteClick = () => {
		if (tab === 0 && !showThumbs) {
			handleUpdateVote(id, 'thumbsUp');
			showNotification({type: 'success', message: 'Thank you for voting!'});
		}
		if (tab === 1 && !showThumbs) {
			handleUpdateVote(id, 'thumbsDown');
			showNotification({type: 'success', message: 'Thank you for voting!'});	
		}
		setTab(-1);
		setShowThumbs(!showThumbs);
	}

  return (
    <section className={'character-container'} style={{backgroundImage: `url('${imageUrl}')`}}>
    	<div className={'character-container__content'}>
    		<div className={'title'}>
    			{ totalVotes > 0 && (
    				<div className={`${thumbsUpPercentage >= thumbsDownPercentage ? 'up' : 'down'}`}>
    					<Thumb Thumb={thumbsUpPercentage >= thumbsDownPercentage ? HiThumbUp : HiThumbDown}/>
    				</div>
    			)}
    			<h2>{name}</h2>
    		</div>
    		<div className={'body'}>
    			<p><b>{getDate(startDate)} months ago</b>{' '}in{' '}{category}</p>
    			<p>{description}</p>
    			<div className={'body__vote'}>
    				{!showThumbs && thumbs.map((thumb, index) => {
    					return (
    						<button 
    							key={index} 
                  aria-label={'thumb'}
    							className={`body__vote_thumbs body__vote_thumbs--${index} ${tab === index && 'active-thumb'}`} 
    							onClick={() => setTab(index)}
    						>
    							<Thumb Thumb={thumb}/>
    						</button>	
    					)
    				})}
    				<Button category={'vote'} onClick={tab === -1 && !showThumbs ? () => showNotification({type: 'error', message: 'Please select a thumb'}) : handleVoteClick}>
    					{showThumbs ? 'Vote again' : 'Vote now'}
    				</Button>
    			</div>
    		</div>
    		<div className={'footer-bar'}>
    			{totalVotes === 0 ? (
    				<div className={'footer-bar__empty'}>
    					<p>Please Vote to get a statistic</p>	
    				</div>) : (
    				thumbs.map((thumb, index) => {
    					return (
    						<div 
    							key={index} 
    							className={`footer-bar__average footer-bar__average--${index} ${(thumbsUpPercentage < 1 || thumbsDownPercentage < 1) && 'empty'}`} 
    							style={{width: `${index === 0 ? thumbsUpPercentage : thumbsDownPercentage}%`}}
    							>
    							{(index === 0 && thumbsUpPercentage > 10 ) ? 
    								<Thumb Thumb={thumb}/> : 
    								(index === 1 && thumbsDownPercentage > 10 ) ? 
    								<Thumb Thumb={thumb}/> : 
    								null
    							}
    							<p className={`${index === 1 && 'order'}`}>
    								{(index === 0 && thumbsUpPercentage > 20 ) ? 
    									`${Math.floor(thumbsUpPercentage)}%` : 
    									(index === 1 && thumbsDownPercentage > 20 ) ? 
    									`${Math.floor(thumbsDownPercentage)}%` : 
    									null
    								}
    							</p>
    						</div>
    					)
    				}))
    			}
    		</div>
    	</div>
    </section>
  )
}

export default Character;