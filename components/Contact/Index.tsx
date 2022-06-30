import React from 'react'
import styled from 'styled-components';
import { mediaQueries } from '../Layout/Devices';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
library.add(fas);

const Container = styled.div`
  width: 1000px;
  min-height: calc(100vh - 105px);
  display: block;
  margin: 0 auto;
  padding: 40px 0;
  position: relative;
  ${mediaQueries("md")`
    width:100%;
    padding:0 10px;
  `};
`;
const Title = styled.h1`
  font-size: 36px;
  width: 100%;
  display: block;
  font-weight: 500;
  ${mediaQueries("md")`
    width:80%;
    margin:0 auto;
  `};
`;

const Intro = styled.p`
  color: #ababab;
  font-weight: 400;
  font-size: 16px;
  ${mediaQueries("md")`
    width:80%;
    margin:0 auto;
  `};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  flex-direction: column;
  position: absolute;
  top:50%;
  transform: translateY(-50%);
`
const ContactItemWrapper = styled.div`
display: flex;
gap: 20px;
${mediaQueries("md")`
  flex-direction: column;
`};
`
const ContactItem = styled.div<{ bgColor: string }>`
  background-color: ${props => props.bgColor};
  padding:10px 20px;
  border-radius: 5px;
  display: flex;
  color:#FFFFFF;
  width: 200px;
  ${mediaQueries("md")`
    width:80%;
    margin:0 auto;
  `};
  a{
    display: block;
    width:100%;
    height: 100%;
    display: flex;
    gap:10px;
    align-items: center;
    ${mediaQueries("md")`
      justify-content:center;
    `};
  }
`

const ContactContent = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Contact Me!</Title>
        <Intro>Are you looking for a freelance or full time frontend?</Intro>
        <ContactItemWrapper>
          <ContactItem bgColor="#868686">
            <a href="">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              Click for Mail
            </a>
          </ContactItem>
          <ContactItem bgColor="#25D366">
            <a href="">
              <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
              Click for Whatsapp
            </a>
          </ContactItem>
          <ContactItem bgColor="#006599">
            <a href="">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              Click for Linkedin
            </a>
          </ContactItem>
        </ContactItemWrapper>
      </Wrapper>
    </Container>
  )
}

export default ContactContent