import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  margin-right: auto;
  color:  #EBD8FF;
  text-decoration: none;
  font-weight: 500;
  :hover,
  :focus {
    color: #edbc2b;;
  }
`;
