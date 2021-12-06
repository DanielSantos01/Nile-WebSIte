import React from 'react';

import infra from '../../../../assets/infra.png';
import { List } from './components';
import {
  Infra,
  ContentContainer,
  InfraContainer,
} from './styles';

const Presentation: React.FC = () => (
  <ContentContainer>
    <List />

    <InfraContainer>
      <Infra src={infra} alt="project-infra" />
    </InfraContainer>
  </ContentContainer>
);

export default Presentation;
