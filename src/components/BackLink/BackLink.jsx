import React from "react";
import PropTypes from "prop-types";
import { HiArrowLeft } from "react-icons/hi";
import { StyledLink } from "./BackLink.styled";

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
      Back
    </StyledLink>
  );
};

BackLink.prototype = {
  to: PropTypes.string.isRequired,
  children: PropTypes.elementType.isRequired
}.isRequired;
