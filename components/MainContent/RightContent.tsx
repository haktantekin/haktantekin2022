import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../Layout/Devices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

const RightColumn = styled.div`
  position: absolute;
  top: 50%;
  right: 100px;
  transform: translateY(-50%);
  padding: 40px;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  align-content: flex-end;
  padding-bottom: 0;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  ${mediaQueries("sm")`
    position:relative;
    order:1;
    top:auto;
    transform:inherit;
    right:auto;
    width: 70%;
    margin: 0 auto;
    margin-top: 20px;
  `};

  img {
    width: auto;
    height: auto;
    &:after {
      transform: scale(0.95) translateY(36px) translateZ(-30px);
      filter: blur(20px);
      opacity: 0.9;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: inherit;
      background-size: cover;
      z-index: -1;
      transition: filter 0.3s ease;
    }
  }
  svg {
    &.code-graduate {
      top: -130px;
      color: #ffffff;
      font-size: 90px;
      z-index: 100;
      position: absolute;
      left: 80px;
      opacity: 0.7;
      transform: rotate(-25deg);
      ${mediaQueries("sm")`
        display:none;
      `};
    }
  }
`;

const Image = styled.img``

const RightContent = () => {
  return (
    <RightColumn>
      <FontAwesomeIcon icon={faGraduationCap} className="code-graduate" />
      <Image alt="Haktan Tekin" width="380"  height={394} src={'/img/haktantekin.png'} />
    </RightColumn>
  );
};

export default RightContent;
