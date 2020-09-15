import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImFacebook2, ImTwitter } from 'react-icons/im';

import './Footer.scss';

const Footer = () => (
  <footer className={'footer'}>
  	<ul className={'footer__terms'}>
  	  <li>
  	    <NavLink to={'/terms-and-conditions'}>
  	      Terms and Conditions
  	    </NavLink>  
  	  </li>
  	  <li>
  	    <NavLink to={'/privacy-policy'}>
  	      Privacy Policy
  	    </NavLink>  
  	  </li>
  	  <li>
  	    <NavLink to={'/contact-us'}>
  	      Contact us
  	    </NavLink>  
  	  </li>  
  	</ul>
  	<ul className={'footer__social'}>
  	  <li>
  	    Follow Us  
  	  </li>
  	  <li className={'footer__social_logos footer__social_logos--facebook'}>
  	    <a href={'https://www.facebook.com/pages/category/Community/FB-Rules-of-Thumb-318882558219309/'} target={'_blank'} rel={'noopener noreferrer'}>
  	      <ImFacebook2/>
  	    </a>  
  	  </li>
  	  <li className={'footer__social_logos footer__social_logos--twitter'}>
  	    <a href={'https://twitter.com/ruleofthumbbiz'} target={'_blank'} rel={'noopener noreferrer'}>
  	      <ImTwitter/>
  	    </a>  
  	  </li>  
  	</ul>
  </footer>
);

export default Footer;