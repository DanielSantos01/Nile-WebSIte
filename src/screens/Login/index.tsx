/* eslint-disable react/style-prop-object */
/* eslint-disable arrow-body-style */
import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/logo.png';
import {
  Container,
  LogoContainer,
  Logo,
  ContentContainer,
  Title,
  Input,
  LoginButton,
  AuxContainer,
  Label,
  ButtonTextContent,
} from './styles';

const Login: React.FC = () => {
  const { push } = useHistory();

  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} alt="logo-login" />
      </LogoContainer>

      <ContentContainer>
        <Title>Login</Title>

        <Input placeholder="Digite o seu login" />

        <Input type="password" placeholder="Digite sua senha" />

        <AuxContainer>
          <input type="checkbox" style={{ marginBottom: 2, marginRight: 5 }} />
          <Label>Lembrar de mim</Label>
          <Label clickable style={{ marginLeft: 'auto' }}>Esqueci minha senha</Label>
        </AuxContainer>

        <LoginButton onClick={() => push('/app')}>
          <ButtonTextContent>Login</ButtonTextContent>
        </LoginButton>
      </ContentContainer>
    </Container>
  );
};

export default Login;
