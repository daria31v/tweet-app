import React from "react";
import { Container, Section, Title, WraperImg, Text } from "./Home.styled";
import picture from "../../images/picture.png";

const Home = () => {
  return (
    <Container>
      <Section>
        <Title> Welcome </Title>
        <Text>Keep in touch</Text>
        <WraperImg>
          <img src={picture} alt="backgraund" width="308" height="168"></img>
        </WraperImg>
      </Section>
    </Container>
  );
};

export default Home;
