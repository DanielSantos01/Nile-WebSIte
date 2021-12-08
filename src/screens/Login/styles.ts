/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import styled, { css } from 'styled-components';

interface OptionalProps {
  clickable?: boolean;
}

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  flex: 1;
  padding: 30px;
  background-color: #ACE1FC;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const Logo = styled.img`
  width: 13vw;
  height: 10vh;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-top: 70px;
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: black;
  opacity: 0.85;
  font-size: 2em;
  font-weight: 600;
`;

export const Input = styled.input`
  min-width: 300px;
  height: 45px;
  background-color: white;
  color: #BDBDBD;
  border-radius: 5px;
  padding: 7px;
  border: 1px solid #CCCCCC;
  width: 20%;
  margin-top: 30px;

  :focus {
    outline: none;
    border: 2px solid #1479BD;
  }
`;

export const AuxContainer = styled.div`
  display: flex;
  height: 45px;
  min-width: 300px;
  width: 20%;
  align-items: flex-end;
`;

export const Label = styled.p<OptionalProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 14px;
  color: black;
  opacity: 0.7;

  ${({ clickable }) => {
    if (!clickable) return null;
    return css`
      :hover {
        cursor: pointer;
        text-decoration: underline;
      }
    `;
  }}
`;

export const LoginButton = styled.div`
  display: flex;
  min-width: 300px;
  width: 20%;
  height: 45px;
  background-color: #1479BD;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  transition: 0.4s;
  margin-top: 30px;

  :hover {
    transform: scale(1.01);
    cursor: pointer;
    box-shadow: 0 2px 10px -8px rgba(0, 0, 0, 0.8);
  }
`;

export const ButtonTextContent = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: white;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
`;
