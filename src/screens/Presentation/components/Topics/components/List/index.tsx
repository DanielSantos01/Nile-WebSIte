/* eslint-disable arrow-body-style */
import React from 'react';

import { topics } from './data/topics';
import {
  Container,
  Icon,
  ItemContainer,
  Label,
} from './styles';

const List: React.FC = () => {
  return (
    <Container>
      {topics.map((topic) => (
        <ItemContainer>
          <Icon />
          <Label>{topic}</Label>
        </ItemContainer>
      ))}
    </Container>
  );
};

export default List;
