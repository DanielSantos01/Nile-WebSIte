import styled from 'styled-components';
import { FiLogIn } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 2px 10px -8px rgba(0, 0, 0, 0.8);
  padding: 5px 50px;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  margin-left: 50px;
`;

export const LoginContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  transition: 0.35s;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

export const Label = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.1vw;
  margin-right: 35px;
  cursor: pointer;
  transition: 0.35s;

  @media(max-width: 1300px) {
    font-size: 1.6vw;
  }

  :hover {
    opacity: 0.8;
  }
`;

export const Logo = styled.img``;

export const LoginIcon = styled(FiLogIn)`
  color: rgba(0, 0, 0, 0.8);
  font-size: 20px;
`;
