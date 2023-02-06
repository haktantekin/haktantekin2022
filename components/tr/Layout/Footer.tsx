import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import colors from "./colors";
library.add(fas);

const FooterContainer = styled.div`
  width: 100%;
  clear: left;
  height: 30px;
  text-align: center;
  background-color: ${colors.colorOne};
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    border-bottom:1px solid ${colors.colorBlack};
    color: ${colors.colorBlack};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
        <FontAwesomeIcon icon={faReact} />&nbsp;React ile kodlanmıştır.
    </FooterContainer>
  );
};

export default Footer;
