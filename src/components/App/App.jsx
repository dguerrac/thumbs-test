import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Layout from '../Layout/Layout';
import UnderConstruction from '../../views/UnderConstruction/UnderConstruction';
import Home from '../../views/Home/Home';
import ReactGA from 'react-ga';

import './App.scss';

ReactGA.initialize('UA-179381284-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/past-trials'}>
          <UnderConstruction title={'Past trials'}/>
        </Route>
        <Route exact path={'/how-it-works'}>
          <UnderConstruction title={'How it works'}/>
        </Route>
        <Route exact path={'/login'}>
          <UnderConstruction title={'Login'}/>
        </Route>
        <Route exact path={'/terms-and-conditions'}>
          <UnderConstruction title={'Terms and conditions'}/>
        </Route>
        <Route exact path={'/privacy-policy'}>
          <UnderConstruction title={'Privacy policy'}/>
        </Route>
        <Route exact path={'/contact-us'}>
          <UnderConstruction title={'Contact us'}/>
        </Route>
      </Switch>
    </Layout>
  </Router>  
);

export default App;