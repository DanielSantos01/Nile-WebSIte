import React from 'react';

import { Header } from '@/components';
import { Topics, AboutUS, Team } from './components';
import { Container, ContentContainer } from './styles';

const Presentation: React.FC = () => (
  <Container>
    <Header />

    <ContentContainer>
      <Topics />
      <AboutUS />
      <Team />
    </ContentContainer>
  </Container>
);

export default Presentation;
