import React, { useState, useEffect, useRef } from "react";
import {
  WrapperDropdown,
  DropdownBtn,
  BoxContentDropdown,
  Content
} from "./Dropdown.styled";
import { selectStatusFilter } from "redux/selectors";
import {  useSelector, useDispatch } from "react-redux";
import { setStatusFilter } from "redux/filterSlice";
import { statusFilters } from "redux/filter";

export const Dropdown = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  const [isHidden, setHidden] = useState(true);
  const menuRef = useRef();

  const handleOpen = () => {
    setHidden(false);
  };
  const handleClose = () => {
    setHidden(true);
  };

  useEffect(() => {
    const dropdown = document.querySelector("#myDropdown");
    if (!isHidden) {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  }, [isHidden]);


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
        <Content
          href=""
          selected={filter === statusFilters.all}
          onClick={() => handleFilterChange(statusFilters.all)}
        >
          Show All
        </Content>
        <Content
          href=""
          selected={filter === statusFilters.follow}
          onClick={() => handleFilterChange(statusFilters.follow)}
        >
          Follow
        </Content>
        <Content
          href=""
          selected={filter === statusFilters.following}
          onClick={() => handleFilterChange(statusFilters.following)}
        >
          Following
        </Content>
      </BoxContentDropdown>
    </WrapperDropdown>
  );
};
