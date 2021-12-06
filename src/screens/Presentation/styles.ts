import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 100vh;
`;
