import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 8;
  height: 100vh;
  flex-direction: column;
  background-color: #F2FBFF;
  padding: 30px;
  overflow-y: auto;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const Title = styled.p`
  font-size: 2.7em;
  font-weight: 600;
  color: #817979;
  text-align: center;
`;
