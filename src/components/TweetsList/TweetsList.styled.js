import styled from 'styled-components';


export const Wrapper = styled.div`
  width: 100%;
`;
export const ListCards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
   gap: 20px;
  :hover{
    text-shadow: 2px 0 2px #7d5bcd, 0 1px 5px #5736a3a6, -1px 0 5px #7d5bcd,
    0 -1px 2px #5736a3a6;
  }  
`;
export const Card = styled.li`
  margin: 0;
`;
