import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

import { mediaQueries } from "../Layout/Devices";
import Logo from "./Logo";
import Header from "../Layout/Header";
import colors from "../Layout/colors";

const Container = styled.div`
  height: 75px;
  border-bottom: 4px solid ${colors.colorOne};
  display: flex;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  box-shadow: 0 0 5px rgb(0 0 0 / 35%);
  padding: 0 100px;
  background-color: ${colors.colorTwo};
  color: #ffffff;
  ${mediaQueries("md")`
    padding:0 15px;
  `};
`;



const MainHeader = () => {
  return (
    <Container>
      <Header />
      <Logo />
      <Navbar />
    </Container>
  );
};

export default MainHeader;
