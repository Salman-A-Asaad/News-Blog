import React from "react";
import styled from "styled-components";
import { mainColor } from "../../Styles/index";
import { Link } from "react-router-dom";
const NavLinks = (props) => {
  return (
    <li className="nav-item">
      <Link
        className=" text-decoration-none"
        to={props.linkName !== "home" ? props.linkName : "/"}
      >
        <NavLink
          id={props.linkName}
          className="nav-link text-capitalize ms-sm-auto"
        >
          {props.linkName}
        </NavLink>
      </Link>
    </li>
  );
};
const NavLink = styled.span`
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  color: white;
  position: relative;
  transition: all 0.5s;
  &:focus {
    color: white !important;
  }
  &:hover {
    color: white;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: ${mainColor};
    transition: width 0.5s;
  }
  &:hover::before {
    width: 100%;
  }
`;
export default NavLinks;
