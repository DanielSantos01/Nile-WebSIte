/* eslint-disable radix */
/* eslint-disable arrow-body-style */
import React, { useCallback } from 'react';

import cards from './data/dashboard.json';
import { Card } from './components';
import {
  Container,
  Title,
  CardsContainer,
} from './styles';

const Content: React.FC = () => {
  const renderCards = useCallback(() => {
    const items = cards.map((card) => (
      <Card {...card} />
    ));
    return items;
  }, []);

  return (
    <Container>
      <Title>Últimas medições</Title>
      <CardsContainer>
        {renderCards()}
      </CardsContainer>
    </Container>
  );
};

export default Content;
