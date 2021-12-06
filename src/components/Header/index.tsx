/* eslint-disable global-require */
/* eslint-disable arrow-body-style */
import React, { useCallback } from 'react';

import logo from '../../assets/logo.png';
import headerOptions from './data/options';
import {
  Container,
  Logo,
  RowContainer,
  Label,
  LoginContainer,
  LoginIcon,
} from './styles';

const Header: React.FC = () => {
  const mountOptions = useCallback(() => {
    const options: JSX.Element[] = headerOptions.map((data) => <Label>{data.label}</Label>);
    return options;
  }, []);

  return (
    <Container>
      <Logo src={logo} alt="logo-nile" />
      <RowContainer>
        {mountOptions()}
      </RowContainer>

      <LoginContainer>
        <Label style={{ marginRight: 10 }}>Login</Label>
        <LoginIcon />
      </LoginContainer>
    </Container>
  );
};

export default Header;
