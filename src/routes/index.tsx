import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default AppRoutes;
