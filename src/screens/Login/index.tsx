/* eslint-disable react/style-prop-object */
/* eslint-disable arrow-body-style */
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { toast } from 'react-toastify';
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
  const [isLoading, setLoading] = useState<boolean>(false);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { push } = useHistory();

  const onChangeLogin = useCallback((evt: any) => {
    if (!evt) return;
    setLogin(evt.currentTarget.value);
  }, []);

  const onChangePassword = useCallback((evt: any) => {
    if (!evt) return;
    setPassword(evt.currentTarget.value);
  }, []);

  const onSubmit = useCallback(() => {
    if (!login) {
      toast('O campo de login está vazio');
      return;
    }
    if (!password) {
      toast('O campo de senha está vazio');
      return;
    }
    setLoading(true);
    fetch(`http://172.22.69.92:3000/users/${login}`).then(async (response) => {
      setLoading(false);
      if (response.status === 200) {
        toast('Autenticado com sucesso!');
        push('/app');
      } else {
        toast('Não foi possível realizar a autenticação. Verifique seus dados');
      }
    });
  }, [login, password]);

  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} alt="logo-login" />
      </LogoContainer>

      <ContentContainer>
        <Title>Login</Title>

        <Input value={login} placeholder="Digite o seu login" onChange={onChangeLogin} />

        <Input value={password} type="password" placeholder="Digite sua senha" onChange={onChangePassword} />

        <AuxContainer>
          <input type="checkbox" style={{ marginBottom: 2, marginRight: 5 }} />
          <Label>Lembrar de mim</Label>
          <Label clickable style={{ marginLeft: 'auto' }}>Esqueci minha senha</Label>
        </AuxContainer>

        <LoginButton onClick={onSubmit}>
          {isLoading ? (
            <Loader
              type="Oval"
              color="white"
              height={35}
              width={38}
            />
          ) : (
            <ButtonTextContent>Login</ButtonTextContent>
          )}
        </LoginButton>
      </ContentContainer>
    </Container>
  );
};

export default Login;
