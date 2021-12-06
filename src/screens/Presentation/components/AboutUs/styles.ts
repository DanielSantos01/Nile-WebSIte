import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  width: 100%;
  padding: 30px 70px;
  background-color: ${({ theme }) => theme.colors.terciary};
  box-shadow: 0 2px 10px -8px rgba(0, 0, 0, 0.8);
  padding-bottom: 5px;
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2vw;
  color: black;
  text-align: center;
  font-weight: 600;

  @media(max-width: 770px) {
    font-size: 3vw;
  }

  @media(max-width: 500px) {
    font-size: 5vw;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  height: 100%;
  margin-top: 10vh;

  @media(max-width: 1470px) {
    margin-top: 0vh;
    align-items: center;
  }

  @media(max-width: 770px) {
    flex-direction: column;
    align-items: fles-start;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;

  @media(max-width: 770px) {
    height: auto;
    align-items: flex-end;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 70%;

  @media(max-width: 770px) {
    height: 50%;
  }
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
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-bottom: 30px;
  font-size: 1.2em;

  @media(max-width: 1470px) {
    font-size: 1em;
  }

  @media(max-width: 770px) {
    font-size: 0.8em;
  }

  @media(max-width: 500px) {
    font-size: 0.6em;
  }
`;
