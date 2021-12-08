import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  height: 25vw;
  width: 20vw;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 10px -8px rgba(0, 0, 0, 0.8);
  transition: 0.4s;

  :hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2em;
  font-weight: 600;
  color: #263238;
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 18px;
  color: #607D8B;
`;
