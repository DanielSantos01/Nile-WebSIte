/* eslint-disable arrow-body-style */
import React from 'react';

import { team } from './data/team';
import {
  Container,
  ContentContainer,
  Title,
  ItemContainer,
  Image,
  Label,
} from './styles';

const Team: React.FC = () => {
  return (
    <Container>
      <Title>Conheça a equipe</Title>

      <ContentContainer>
        {team.map((participant) => (
          <ItemContainer>
            <Image src={participant.picture} />
            <Label>{participant.name}</Label>
          </ItemContainer>
        ))}
      </ContentContainer>
    </Container>
  );
};

export default Team;
