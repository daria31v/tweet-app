import styled from "styled-components";

export const WrapperDropdown = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 100px;
`;

export const DropdownBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #a58ae5;
  border-radius: 10px;
  height: 10px;
  width: 100px;
  padding: 25px;
  text-transform: uppercase;
  background: none;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  color: #ebd8ff;
  font-size: 14px;
  cursor: pointer;
  :hover,
  :focus,
  &.active {
    color: #edbc2b;
    border-color: #edbc2b;
  }
`;

export const BoxContentDropdown = styled.div`
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 10px;
`;

export const Content = styled.a`
  color: #edbc2b;
  padding: 5px 6px;
  text-decoration: none;
  display: block;
  font-size: 10px;
  :hover {
    background-color: #fbf8ff;
    border-radius: 10px;
  };
`;
