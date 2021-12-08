import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { PresentationRoutes } from './RoutesGroups';
import Login from '@/screens/Login';
import Dashboard from '@/screens/Dashboard';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/presentation" component={PresentationRoutes} />
      <Route path="/login" component={Login} />
      <Route path="/app" component={Dashboard} />
    </Switch>
    <Redirect to="/presentation" />
  </>
);

export default Routes;
