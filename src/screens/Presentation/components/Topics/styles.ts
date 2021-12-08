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
  box-shadow: 0 2px 10px -8px rgba(0, 0, 0, 0.8);
  padding-bottom: 5px;
`;

export const InfraContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Infra = styled.img`
  width: 60%;
  height: 50%;
  transition: 0.8s;
  border-radius: 10px;

  :hover {
    clip-path: circle(100%);
    cursor: pointer;
  }
`;
