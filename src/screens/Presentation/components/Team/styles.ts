import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  width: 100%;
  padding: 50px 70px;
  background-color: #E8F7FF;
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2vw;
  color: black;
  text-align: center;
  font-weight: 600;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10vh;
  flex-wrap: wrap;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  align-items: center;
  justify-content: center;
  boder: 0px;
`;

export const Image = styled.img`
  height: 80%;
  width: 80%;
  background-color: rgba(0, 0, 200, 0.5);
  clip-path: circle(35%);
  transition: 0.4s;
  object-fit: contain;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
    box-shadow: 0 2px 10px -8px rgba(0, 0, 0, 0.8);
  }
`;

export const Label = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 15px;
  color: black;
  opacity: 0.7;
  font-weight: 600;
`;
