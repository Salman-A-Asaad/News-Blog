import React from "react";
import styled from "styled-components";
import { mainColor, mainColorHover } from "../../Styles/index";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="container text-center text-secondary fw-bold text-capitalize fs-5 mt-4 mb-2">
      Copyright © {year} news blog |{" "}
      <span>
        <Href
          href="https://salman-a-asaad.github.io/salman-a-asaad/"
          target="_blank"
        >
          SAA
        </Href>
      </span>
    </div>
  );
};
const Href = styled.a`
  color: ${mainColor};
  transition: all 0.5s;
  text-decoration: none;
  &:hover {
    letter-spacing: 2px;
    color: ${mainColorHover};
  }
`;
export default Footer;
