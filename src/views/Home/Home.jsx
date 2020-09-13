import React from 'react';
import Hero from '../../components/Hero/Hero';
import Description from '../../components/Description/Description';
import './Home.scss';

const Home = () => {
  return (
  	<>
		  <Hero />
		  <section className={'rulings-container'}>
		  	<Description />	
		  </section>
    </>
  );
}

export default Home;