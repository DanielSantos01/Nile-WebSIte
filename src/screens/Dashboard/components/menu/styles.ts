import styled from 'styled-components';
import { FiArrowRight, FiLogOut } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  flex: 1;
  min-width: 150px;
  height: 100vh;
  flex-direction: column;
  background-color: #ACE1FC;
  box-shadow: 4px 0px 10px -8px rgba(0, 0, 0, 0.8);
  padding-bottom: 30px;
`;

export const Logo = styled.img`
  margin-top: 30px;
`;

export const ItemsContainer = styled.div`
  width: 100%;
  margin-top: 100px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 10px 30px;
  transition: 0.4s;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  :hover > * {
    opacity: 1;
  }
`;

export const Label = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.1em;
  color: black;
  opacity: 0.5;
  font-weight: 500;
  transition: 0.4s;
`;

export const Arrow = styled(FiArrowRight)`
  font-size: 1.3em;
  color: black;
  opacity: 0.5;
  font-weight: 500;
  transition: 0.4s;
`;

export const LogOut = styled(FiLogOut)`
  font-size: 1.3em;
  color: black;
  opacity: 0.5;
  font-weight: 500;
  transition: 0.4s;
`;
