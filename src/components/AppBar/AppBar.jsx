import { Logo } from "../Logo/Logo";
import React from 'react';


import { Container, Section, Nav, Cloud, Box } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Container>
      <Section>
        <Nav>
          <Cloud to="/">
            <Logo />
          </Cloud>
          {/* <Dropdown /> */}
          <Box>
            <Cloud to="/">Home</Cloud>
            <Cloud to="/tweets">Tweets</Cloud>
          </Box>
        </Nav>
      </Section>
    </Container>
  );
};
