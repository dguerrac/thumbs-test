import React from 'react';
import Thumb from '../Thumb/Thumb';
import { ImWikipedia } from 'react-icons/im';
import { HiThumbUp, HiThumbDown } from 'react-icons/hi';
import './Intro.scss';

const Intro = () => (
	<section>
	  <div className={'intro-container'}>
	  	<span className={'intro-container__question'}>What's your opinion on</span>
	  	<h2>Pope Francis?</h2>
	  	<p className={'intro-container__description'}>He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)</p>
	  	<div className={'intro-container__more'}>
	  		<ImWikipedia/>
	  		<a href={'https://en.wikipedia.org/wiki/Catholic_Church_sexual_abuse_cases'} target={'_blank'} rel={'noopener noreferrer'}>More information</a>
	  	</div>
	  	<span className={'intro-container__veredict'}>What's Your Verdict?</span>
	  </div>
	  <div className={'thumbs'}>
	  	<div className={'thumbs__up'}>
	  		<Thumb Thumb={HiThumbUp}/>	
	  	</div>
	  	<div className={'thumbs__down'}>
	  		<Thumb Thumb={HiThumbDown}/>	
	  	</div>	
	  </div>
  </section>
);

export default Intro;