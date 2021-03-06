import React from 'react';
import Hero from '../../components/Hero/Hero';
import Description from '../../components/Description/Description';
import RulingsList from '../../components/RulingsList/RulingsList';
import AddNewPerson from '../../components/AddNewPerson/AddNewPerson';

import './Home.scss';

const Home = () => (
	<>
	  <Hero />
	  <section className={'home-container'}>
	  	<Description />
	  	<RulingsList />
	  	<AddNewPerson />						
	  </section>
  </>
);

export default Home;