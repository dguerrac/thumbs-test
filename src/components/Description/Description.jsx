import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import './Description.scss';

const Description = () => {
  return (
    <section className={'description-container'}>
    	<div className={'description-container__content'}>
    		<div className={'description-container__content__titles'}>
    			<p className={'description-container__content__titles_heard'}>Speak out. Be heard.</p>
    			<p className={'description-container__content__titles_counted'}>Be counted</p>	
    		</div>
    		<div className={'description-container__content__description'}>
    			<p>
    				Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It‘s easy: You share your opinion, we analyze and put the data in a public report.
    			</p>
    		</div>	
    	</div>
  		<button><RiCloseLine/></button>	
    </section>
  )
}

export default Description;