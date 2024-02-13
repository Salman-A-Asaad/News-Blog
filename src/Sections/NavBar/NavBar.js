import React from "react";
import styled from "styled-components";
import logo from "../../Assests/logo.png";
import backgroundNav from "../../Assests/background_nav.jpg";
import { NavLinks } from "../../Components/index";

const NavBar = () => {
  const links = ["home", "search", "about", "contact"];
  return (
    <ContainerNav>
      <Nav className="navbar navbar-expand-lg">
        <div className="container">
          <Logo className="navbar-brand fs-4 fw-bold text-uppercase" href="#">
            <img src={logo} className="me-1" alt="logo" />
            news
          </Logo>
          <Button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {links.map((ele, index) => {
                return <NavLinks key={index} linkName={ele} />;
              })}
            </ul>
          </div>
        </div>
      </Nav>
    </ContainerNav>
  );
};
const Nav = styled.nav`
  padding-top: 40vh;
  background-color: transparent;
`;
const Logo = styled.a`
  color: white;
  &:hover {
    color: white;
  }
`;
const Button = styled.button`
  border: 1px solid white !important;
  &:focus {
    box-shadow: 0 0 0 white !important;
    border: 3px solid white !important;
  }
`;
const ContainerNav = styled.div`
  min-height: 50vh;
  position: relative;
  background-image: url(${backgroundNav});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #00000045;
  }
`;
export default NavBar;
