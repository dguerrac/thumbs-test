import React from 'react';
import Hero from '../../components/Hero/Hero';
import Description from '../../components/Description/Description';
import RulingsList from '../../components/RulingsList/RulingsList';

import './Home.scss';

const Home = () => {
  return (
  	<>
		  <Hero />
		  <section className={'rulings-container'}>
		  	<Description />
		  	<RulingsList />	
		  </section>
    </>
  );
}

export default Home;