import React from "react";
import styled from "styled-components";
import { mainColorHover } from "../../Styles";
import { ModalLogIn, ModalSginUp } from "../../Components/index";
const Register = () => {
  return (
    <>
      <RegisterDiv>
        <span data-bs-target="#log-in" data-bs-toggle="modal" className="me-2">
          log in
        </span>
        |
        <span data-bs-target="#sgin-in" data-bs-toggle="modal" className="ms-2">
          sgin up
        </span>
      </RegisterDiv>
      <ModalLogIn />
      <ModalSginUp />
    </>
  );
};
const RegisterDiv = styled.div`
  padding: 10px;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 12;
  font-weight: 600;
  color: white;
  text-transform: capitalize;
  font-size: 18px;
  span {
    cursor: pointer;
    transition: all 0.5s;
    z-index: 30;
    position: relative;
  }
  span::before {
    content: "";
    position: absolute;
    height: 2px;
    width: 0;
    left: 0;
    bottom: -5px;
    background-color: ${mainColorHover};
    z-index: 30;
    transition: all 0.5s;
  }
  span:hover::before {
    width: 100%;
  }
`;
export default Register;
