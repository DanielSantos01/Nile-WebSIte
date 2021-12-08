/* eslint-disable arrow-body-style */
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import options from './data/options.json';
import logo from '../../../../assets/logo.png';
import {
  Container,
  Logo,
  ItemsContainer,
  ItemContainer,
  Label,
  Arrow,
  LogOut,
} from './styles';

const Content: React.FC = () => {
  const { replace } = useHistory();

  const renderItems = useCallback(() => {
    const items: JSX.Element[] = options.map((item) => (
      <ItemContainer>
        <Label>{item.label}</Label>
        <Arrow />
      </ItemContainer>
    ));
    return items;
  }, []);

  return (
    <Container>
      <Logo src={logo} alt="logo" />

      <ItemsContainer>
        {renderItems()}
      </ItemsContainer>

      <ItemContainer style={{ marginTop: 'auto' }} onClick={() => replace('/login')}>
        <Label>Sair</Label>
        <LogOut />
      </ItemContainer>
    </Container>
  );
};

export default Content;
