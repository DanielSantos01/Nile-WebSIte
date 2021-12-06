import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 30px 70px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const InfraContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Infra = styled.img`
  width: 70%;
  height: 60%;
  transition: 0.4s;
  border-radius: 10px;

  :hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;
