import { Logo } from "../Logo/Logo";
import React from 'react';
// import { Link } from "react-router-dom";

import { Container, Section, Nav, Cloud, Box } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Container>
      <Section>
        <Nav>
          <Cloud to="/">
            <Logo />
          </Cloud>
          <Box>
            <Cloud to="/">Home</Cloud>
            <Cloud to="/tweets">Tweets</Cloud>
          </Box>
        </Nav>
      </Section>
    </Container>
  );
};
