import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-dirextion: row;
  align-items: center;
  height: 7vh;
`;

export const Icon = styled(AiFillCheckCircle)`
  color: black;
  font-size: 25px;
  margin-right: 25px;
`;

export const Label = styled.p`
  color: black;
  font-weight: 600;
  font-size: 26px;
`;
