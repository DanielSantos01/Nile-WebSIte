/* eslint-disable max-len */
/* eslint-disable global-require */
/* eslint-disable arrow-body-style */
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

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
  const { push } = useHistory();

  const mountOptions = useCallback(() => {
    const options: JSX.Element[] = headerOptions.map((data) => <Label href={data.route}>{data.label}</Label>);
    return options;
  }, []);

  return (
    <Container>
      <Logo src={logo} alt="logo-nile" />
      <RowContainer>
        {mountOptions()}
      </RowContainer>

      <LoginContainer onClick={() => push('/login')}>
        <Label style={{ marginRight: 10 }}>Login</Label>
        <LoginIcon />
      </LoginContainer>
    </Container>
  );
};

export default Header;
