import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import PageLayout from '../PageLayout';
import Home from '../pages/Home';
import About from '../pages/About';

const AppRouter = () => (
  <Router>
    <PageLayout>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
    </PageLayout>
  </Router>
);

export default AppRouter;
