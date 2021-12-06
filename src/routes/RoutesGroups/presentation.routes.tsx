import React from 'react';
import {
  Switch,
  RouteProps,
  useRouteMatch,
  Route,
  Redirect,
} from 'react-router-dom';

import Presentation from '@/screens/Presentation';

const AuthRoutes: React.FC<RouteProps> = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/nile`} component={Presentation} />
      <Redirect to={`${path}/nile`} />
    </Switch>
  );
};

export default AuthRoutes;
