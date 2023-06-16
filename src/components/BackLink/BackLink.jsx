/* eslint-disable react/prop-types */
import React from 'react';
console.log(React.version);
import PropTypes from "prop-types";
import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

BackLink.prototype = {
  to: PropTypes.string.isRequired,
  children: PropTypes.elementType.isRequired,
}.isRequired;