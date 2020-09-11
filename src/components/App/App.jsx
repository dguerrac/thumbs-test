import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Layout from '../Layout/Layout';
import UnderConstruction from '../../views/UnderConstruction/UnderConstruction';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={'/'} component={''} />
          <Route exact path={'/past-trials'}>
            <UnderConstruction title={'Past trials'}/>
          </Route>
          <Route exact path={'/how-it-works'}>
            <UnderConstruction title={'How it works'}/>
          </Route>
          <Route exact path={'/login'}>
            <UnderConstruction title={'Login'}/>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;