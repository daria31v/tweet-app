import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin-top: 20px;
 
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  color: tomato;
  > a {
    text-decoration: none;
  }
  :hover {
    border-bottom: 1px solid tomato;
    border-top: 1px solid tomato;  
  }
`;

export const MoviesTitle = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  font-size: 16px;
  :hover {
    color: tomato;
    text-transform: uppercase;
    
  }
`;