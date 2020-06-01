import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './user/pages/Dashboard';

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route path="/minha-conta" component={Dashboard} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;
