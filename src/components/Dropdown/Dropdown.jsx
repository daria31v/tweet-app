import React, { useState, useEffect, useRef } from "react";
import {
  WrapperDropdown,
  DropdownBtn,
  BoxContentDropdown,
  Content,
} from "./Dropdown.styled";

export const Dropdown = () => {
  const [isHidden, setHidden] = useState(true);
  const menuRef = useRef();

  const handleOpen = () => {   
     setHidden(false)
  };
  const handleClose = () => {   
    setHidden(true);    
};

  useEffect(() => {
    const dropdown = document.querySelector("#myDropdown");

    if (!isHidden){
      dropdown.style.display = "block";
    } else{
        dropdown.style.display = "none";
    }
  }, [isHidden]);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current.contains(e.target)) {
        setHidden(true);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <WrapperDropdown className="dropdown" ref={menuRef}>
      <DropdownBtn onClick={handleOpen} className="dropbtn">
        tweets
      </DropdownBtn>
      <BoxContentDropdown
        id="myDropdown"
        className="dropdown-content"
        isHidden={isHidden}
        toggled={setHidden}
        toggle={setHidden}
        onClick={handleClose}
      >
        <Content href="" >Show All</Content>
        <Content href="">Follow</Content>
        <Content href="">Following</Content>
      </BoxContentDropdown>
    </WrapperDropdown>
  );
};
