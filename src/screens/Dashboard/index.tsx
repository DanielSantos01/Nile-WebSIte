/* eslint-disable arrow-body-style */
import React from 'react';

import { Menu, Content } from './components';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Content />
    </Container>
  );
};

export default Dashboard;
