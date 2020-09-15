import React from 'react';
import Intro from '../../components/Intro/Intro';
import CountDown from '../../components/CountDown/CountDown';

import './Hero.scss';

const Hero = () => (
  <section className={'hero-container'}>
  	<Intro />
  	<CountDown />
  </section>
);

export default Hero;