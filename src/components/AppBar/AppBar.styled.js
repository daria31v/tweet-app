import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
`;
export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const Nav = styled.nav` 
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-left: auto;
  
`;
export const Cloud = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  border: 2px solid #a58ae5;
  border-radius: 10px;
  height: 10px;
  width: 50px;
  padding: 20px;
  position: relative;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
    color:  #EBD8FF;
  :hover,
  :focus, 
  &.active{
    color: #edbc2b;
    border-color: #edbc2b;   
  }
`;
