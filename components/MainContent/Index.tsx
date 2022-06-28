import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../Layout/Devices";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const MainContent = () => {
  const Wrapper = styled.div`
    padding: 0 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    height: calc(100vh - 105px);
    ${mediaQueries("md")`
       padding:0;
    `};
    svg {
      ${mediaQueries("lg")`
        display:none;
      `};
    }
    &:before {
      content: "";
      background-color: #f5f5f5;
      width: 100vw;
      height: 100vh;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
      clip-path: polygon(52% 0, 100% 0, 100% 100%, 68% 100%);
    }
  `;
  return (
      <Wrapper>
        <LeftContent />
        <RightContent />
      </Wrapper>
  );
};

export default MainContent;
