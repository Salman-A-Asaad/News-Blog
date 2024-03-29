import React from "react";
import styled, { keyframes } from "styled-components";
import { mainColor } from "../../Styles/index";

const Spinner = () => {
  return (
    <Spin>
      <div></div>
      <div></div>
      <div></div>
    </Spin>
  );
};
const loading = keyframes`
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
`;
const Spin = styled.div`
  margin: auto;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: ${mainColor};
    animation: ${loading} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
`;
export default Spinner;
