import React from 'react';

import { Header } from '@/components';
import { Topics } from './components';
import { Container } from './styles';

const Presentation: React.FC = () => (
  <Container>
    <Header />

    <Topics />
  </Container>
);

export default Presentation;
