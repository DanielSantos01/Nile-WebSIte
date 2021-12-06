import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { PresentationRoutes } from './RoutesGroups';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/presentation" component={PresentationRoutes} />
    </Switch>
    <Redirect to="/presentation" />
  </>
);

export default Routes;
