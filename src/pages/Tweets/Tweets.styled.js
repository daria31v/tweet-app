import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
`;
export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const Title = styled.h2`
  text-align: center;
  font-size: 48px;
  font-style: italic;
  text-transform: uppercase;
  padding: 5px 10px 5px 10px;
  color: #edbc2b;
  text-shadow: 2px 0 2px #7d5bcd, 0 1px 5px #5736a3a6, -1px 0 5px #7d5bcd,
    0 -1px 2px #5736a3a6;
`;
export const BoxTweets = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const LoadMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  border: 2px solid #a58ae5;
  border-radius: 10px;
  height: 10px;
  width: 150px;
  padding: 25px;
  text-transform: uppercase;
  background: none;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  color: #ebd8ff;
  font-size: 14px;
  :hover,
  :focus{
    color: #edbc2b;
    border-color: #edbc2b;
  }
`;