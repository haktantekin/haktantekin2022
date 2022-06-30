import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../Layout/Devices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faEnvelope,
  faFile,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCodepen,
  faGithub,
  faGitSquare,
  faInstagram,
  faLinkedinIn,
  faReact,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import colors from "../Layout/colors";
library.add(fas);

const LeftColumn = styled.div`
  width: auto;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mediaQueries("lg")`
    order: 2;
    padding: 10px;
    width: 100%;
    height:auto;
    display: block;
    margin-top: 30px;
  `};

  svg {
    &.code-react {
      top: 20%;
      color: #c3c3c3;
      font-size: 110px;
      z-index: -1;
      opacity: 0.2;
      transform: rotate(25deg);
      position: absolute;
      left: 40%;
    }
  }
  .code-gitsquare {
    bottom: 20%;
    color: #c3c3c3;
    font-size: 50px;
    opacity: 0.2;
    position: absolute;
    left: 100px;
    width: 10px;
    height: 10px;
    z-index: 1;
    display: block;
  }
`;

const SocialLink = styled.a`
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.15s ease;
  color: ${colors.colorWhite};
  svg {
    ${mediaQueries("lg")`
      display:block !important;
    `};
  }
  &:hover {
    color: ${colors.colorWhite};
    .tooltip {
      visibility: visible;
      opacity: 1;
      transform: translate(-50%, -150%);
      color: ${colors.colorWhite};
      background-color: ${(props) => props.color};
      &:after {
        border-top-color: ${(props) => props.color};
      }
    }
  }

  &:active {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5) inset;
  }
  svg {
    position: relative;
    top: 1px;
    font-size: 20px;
  }
`;
const Tooltip = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  padding: 0.8rem 1rem;
  border-radius: 40px;
  font-size: 0.8rem;
  font-weight: bold;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -100%);
  transition: all 0.3s ease;
  z-index: 1;

  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 1px;
    left: 50%;
    width: 0;
    height: 0;
    border: solid;
    border-width: 10px 10px 0 10px;
    border-color: transparent;
    transform: translate(-50%, 100%);
  }
`;

const Name = styled.h1`
  font-size: 60px;
  position: relative;
  margin-top: 10px;
  ${mediaQueries("md")`
    font-size:28px;
    margin-top:30px;
    text-align:center;
  `};
  svg {
    position: absolute;
    top: -10px;
    font-size: 18px;
    right: 45px;
  }
`;
const Title = styled.h2`
  font-size: 30px;
  color: ${(props) => props.color};
  font-weight: 400;
  ${mediaQueries("md")`
    font-size:20px;
    text-align:center;
  `};
`;

const SocialList = styled.div`
  display: flex;
  gap: 10px;
  ${mediaQueries("md")`
    justify-content: center;
  `};
`;

const CVLink = styled.div`
  display: flex;
  gap: 15px;
  ${mediaQueries("md")`
    justify-content: center;
  `};
`;

const CVLinkItem = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  color: #7c7c7c;
  max-width: 210px;
  height: 45px;
  transition: 1s;
  transition-delay: 0.9s;
  position: relative;
  display: inline-block;
  margin-top: 5px;
  display: flex;
  align-items: center;
  ${mediaQueries("md")`
  margin-top:5px;
  height:auto;
`};
  &:hover {
    box-shadow: 0 0 10px ${colors.colorTwo}, 0 0 20px ${colors.colorTwo}, 0 0 40px ${colors.colorTwo};
    background-color: ${colors.colorTwo};
    color: #ffffff;
    padding: 0 20px;

    polyline {
      stroke-dashoffset: -460;
    }
  }
  svg:not(.svg-inline--fa) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    polyline {
      fill: transparent;
      stroke: ${colors.colorTwo};
      stroke-width: 2px;
      stroke-dasharray: 20 460;
      stroke-dashoffset: 20;
      transition: 0.4s ease-in-out;
    }
  }
  .svg-inline--fa {
    margin-right: 10px;
  }
`;

const LeftContent = () => {
  return (
    <LeftColumn>
      <SocialList>
        <SocialLink
          color={colors.colorBlack}
          href="https://codepen.io/natkah"
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          <FontAwesomeIcon icon={faCodepen} />
          <Tooltip className="tooltip">Codepen</Tooltip>
        </SocialLink>
        <SocialLink
          color="#4284c0"
          href="https://github.com/haktantekin"
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          <FontAwesomeIcon icon={faGithub} />
          <Tooltip className="tooltip">Github</Tooltip>
        </SocialLink>
        <SocialLink
          color="#006599"
          href="https://www.linkedin.com/in/haktantekin/"
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
          <Tooltip className="tooltip">Linkedin</Tooltip>
        </SocialLink>
        <SocialLink color="#bc2a8d" href="https://www.instagram.com/nat.kah/" target={"_blank"} rel={"noreferrer noopener"}>
          <FontAwesomeIcon icon={faInstagram} />
          <Tooltip className="tooltip">Instagram</Tooltip>
        </SocialLink>
        <SocialLink color="#868686" href="mailto://me@haktantekin.com" target={"_blank"} rel={"noreferrer noopener"}>
          <FontAwesomeIcon icon={faEnvelope} />
          <Tooltip className="tooltip">Mail</Tooltip>
        </SocialLink>
        <SocialLink color="#25D366" href="https://wa.me/+905399374446" target={"_blank"} rel={"noreferrer noopener"}>
          <FontAwesomeIcon icon={faWhatsapp} />
          <Tooltip className="tooltip">WhatsApp</Tooltip>
        </SocialLink>
      </SocialList>
      <Name>
        HI I{"'"}M HAKTAN TEKIN <FontAwesomeIcon icon={faCode} />
      </Name>
      <Title color="#858585">FRONTEND DEVELOPER</Title>
      <CVLink>
        <CVLinkItem target={"_blank"}
          rel={"noreferrer noopener"} href="/CV/HaktanTekinCVEN.pdf">
          <FontAwesomeIcon icon={faFile} />
          ENGLISH CV
          <svg height="50" width="180">
            <polyline points="0,0 180,0 180,50 0,50 0,00"></polyline>
          </svg>
        </CVLinkItem>
        <CVLinkItem className="turkish" target={"_blank"}
          rel={"noreferrer noopener"} href="/CV/HaktanTekinCV.pdf">
          <FontAwesomeIcon icon={faFile} />
          TÜRKÇE ÖZGEÇMİŞ
          <svg height="50" width="180">
            <polyline points="0,0 180,0 180,50 0,50 0,00"></polyline>
          </svg>
        </CVLinkItem>
      </CVLink>
      <FontAwesomeIcon icon={faReact} className="code-react" />
      <a href="https://github.com/haktantekin"
        target={"_blank"}
        rel={"noreferrer noopener"}
        className="code-gitsquare"
      ><FontAwesomeIcon icon={faGitSquare} /></a>
    </LeftColumn>
  );
};

export default LeftContent;
