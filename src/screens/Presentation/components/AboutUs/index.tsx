/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import React from 'react';

import { text1, text2 } from './data/text';
import about from '../../../../assets/about.png';
import {
  Container,
  Title,
  ContentContainer,
  Image,
  Text,
  ImageContainer,
  TextContainer,
} from './styles';

const AboutUs: React.FC = () => {
  return (
    <Container id="about-us">
      <Title>Sobre o Nile</Title>
      <ContentContainer>
        <ImageContainer>
          <Image src={about} alt="about-us" />
        </ImageContainer>

        <TextContainer>
          <Text>{text1}</Text>
          <Text>{text2}</Text>
        </TextContainer>
      </ContentContainer>
    </Container>
  );
};

export default AboutUs;
