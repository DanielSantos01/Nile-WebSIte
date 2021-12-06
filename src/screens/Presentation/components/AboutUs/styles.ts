import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  width: 100%;
  padding: 30px 70px;
  background-color: ${({ theme }) => theme.colors.terciary};
`;

export const Title = styled.p`
  font-size: 2vw;
  color: black;
  text-align: center;
  font-weight: 600;
`;

export const ContentContainer = styled.div`
  display: flex;
  height: 100%;
  margin-top: 10vh;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  height: 100%;
  width: 70%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
`;

export const Text = styled.p`
  margin-bottom: 30px;
  font-size: 23px;
`;
