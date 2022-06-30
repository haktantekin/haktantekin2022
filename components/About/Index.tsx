import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBook,
  faBullseye,
  faCertificate,
  faCode,
  fas,
  faTree,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mediaQueries } from "../Layout/Devices";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import colors from "../Layout/colors";
library.add(fas);

const AboutContent = () => {
  const Container = styled.div`
    width: 1200px;
    min-height: calc(100vh - 105px);
    display: block;
    margin: 0 auto;
    padding: 40px 0;
    position: relative;
    ${mediaQueries("md")`
      width:100%;
      padding:0 20px;
      overflow:hidden;
    }
  `};
  `;
  const Title = styled.h1`
    font-size: 36px;
    width: 100%;
    display: block;
    font-weight: 500;
    margin-bottom: 40px;
    ${mediaQueries("md")`
      width:100%;
      margin-bottom: 20px;
      margin-top: 40px;
    }
  `};
  `;
  const AboutItem = styled.div<{ bgColor: string, align: string }>`
    background-color: ${(props) => props.bgColor || colors.colorBlack};
    padding: 20px 40px;
    border-radius: 10px;
    margin-bottom: 40px;
    width: 70%;
    float: ${(props) => props.align};
    color: ${(props) => props.color};
    ${mediaQueries("md")`
      width:100%;
      padding: 20px;
    }
  `};
    a {
      color: ${(props) => props.color};
      border-bottom: 1px solid ${colors.colorBlack};
    }
    svg {
      font-size: 19px;
    }
    svg.out {
      position: absolute;
      left: ${(props) => props.align === "right" && "180px"};
      font-size: 80px;
      transform: ${(props) =>
      props.align === "left"
        ? "rotate(-45deg) translate(40px)"
        : "rotate(45deg) translate(0px)"};
      color: ${(props) => props.bgColor} !important;
      right: ${(props) => props.align === "left" && "180px"};
      opacity: 0.5;
      animation: float 6s ease infinite;
      ${mediaQueries("md")`
      color:#FFFFFF !important;
      opacity: 0.2;
      left:auto;
      right:0
      }
     `};
      @keyframes float {
        0% {
          transform: rotate(0) translate(0px);
        }
        25% {
          transform: rotate(45deg) translate(-40px, 40px);
        }
        50% {
          transform: rotate(60deg) translate(-50px, 50px);
        }
        50% {
          transform: rotate(-45deg) translate(0px, 40px);
        }
        100% {
          transform: rotate(0) translate(0, 0);
        }
      }
    }
  `;
  const SubTitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 10px;
  `;
  const Text = styled.div`
    font-weight: 400;
    font-size: 16px;
    a {
      border-bottom: 1px solid ${(props) => props.color};
    }
  `;
  const AboutList = styled.ul``;
  const AboutListItem = styled.li`
    list-style: none;
    margin-bottom: 15px;
  `;
  const SmallItem = styled.span`
    font-size: 12px;
  `;

  const Tree = styled.div`
    svg {
      font-size: 30vh;
      position: absolute;
      opacity: 0.2;
      top: 100px;
      left: 30px;
      ${mediaQueries("lg")`
        display:none;
      `};
    }
    &.right {
      svg {
        font-size: 50vh;
        position: absolute;
        opacity: 0.2;
        right: 20px;
        left: auto;
        top: 200px;
        z-index: 1;
      }
    }
  `;

  const TextType = styled.span<{ weight: string }>`
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
  `;

  return (
    <>
      <Tree>
        <FontAwesomeIcon icon={faTree} />
      </Tree>
      <Container>
        <Title>Who Am I?</Title>
        <AboutItem bgColor={colors.colorTwo} color="#FFFFFF" align="left">
          <FontAwesomeIcon icon={faCanadianMapleLeaf} className="out" />
          <SubTitle>
            <FontAwesomeIcon icon={faUser} /> Intro
          </SubTitle>
          <Text>
            My name is Haktan. I{"'"}m twenty-nine years old. I{" ' "}m living in
            Istanbul. I{"'"}m living with my family. I have been disabled by
            legg since my birth. But it isn{"'"}t a problem for me. Since 2012,
            I{"'"}ve been wearing glasses. I{"'"}m a person who enjoys wearing
            glasses.
          </Text>
        </AboutItem>
        <AboutItem bgColor="#CACACA" color={colors.colorBlack} align="right">
          <FontAwesomeIcon icon={faCanadianMapleLeaf} className="out" />
          <SubTitle>
            <FontAwesomeIcon icon={faBook} /> Education
          </SubTitle>
          <Text>
            <AboutList>
              <AboutListItem>
                I graduated from; <br /> <br />
                <TextType weight="bold">Anatolion University</TextType>, Tourism
                and Travel Services (Associate Degree).{" "}
                <SmallItem>2019-2021</SmallItem>
              </AboutListItem>
              <AboutListItem>
                <TextType weight="bold">Fatih University</TextType>, Computer
                Programming Department (Associate Degree).{" "}
                <SmallItem>2010-2012</SmallItem>
              </AboutListItem>
              <AboutListItem>
                <TextType weight="bold">Şişli High School</TextType>, Web Design{" "}
                {"&"} Programming. <SmallItem>2006-2010</SmallItem>
              </AboutListItem>
            </AboutList>
          </Text>
        </AboutItem>

        <AboutItem bgColor={colors.colorOne} color={colors.colorBlack} align="left">
          <FontAwesomeIcon icon={faCanadianMapleLeaf} className="out" />
          <SubTitle>
            <FontAwesomeIcon icon={faCode} /> Short{" "}
            <Link href="/Experiences">Experiences</Link>
          </SubTitle>
          <Text>
            I{"'"}am a Frontend developer for twelve years. I worked on about thirty
            different projects. I am working in my fifth company.
            <br />
            <br />
            I{"'"}am using HTML/CSS and Jquery, but I{"'"}m using React, Typescript,
            NextJS in my new jobs.
            <br />
            <br />
            I{"'"}ve never used React before. but I
            developed my this website with React.I{"'"}m using and learning ReactJS all
            free times.
            <br />
            <br />I{"'"}m using HTML5/CSS3 as well as CSS procedures
            (sass/less).
            <br />
            <br />
            I make flexible websites.
            <br />
            <br />
            I have sufficient backend expertise to comprehend code, and I
            created my own WordPress blog theme.
            <br />
            <br />
            I{"'"}m reading current SEO articles. I have experience about page speed optimization, backlink and other seo operations.
            <br />
            <br />
            The codes can be found on my&nbsp;
            <a
              target={"_blank"}
              rel={"noreferrer noopener"}
              href="https://github.com/haktantekin"
            >
              Github
            </a>{" "}
            account.
          </Text>
        </AboutItem>
        <AboutItem bgColor="#4A6D8C" color="#ffffff" align="right">
          <FontAwesomeIcon icon={faCanadianMapleLeaf} className="out" />
          <SubTitle>
            <FontAwesomeIcon icon={faCertificate} /> Certificates
          </SubTitle>
          <Text>
            <AboutList>
              <AboutListItem>
                <a
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  href="https://www.udemy.com/certificate/UC-3bfebcd0-96f4-4668-ad08-4e623569eaed/"
                >
                  Tailwind CSS - A new way to {">"} THINK {"<"} CSS{" "}
                </a>
                <SmallItem>Udemy</SmallItem>
              </AboutListItem>
              <AboutListItem>
                <a
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  href="https://www.udemy.com/certificate/UC-0320ca29-5705-41b6-9d88-94b69cce36cb/"
                >
                  Sıfırdan İleri Seviye Vue.JS Eğitimi ve Uygulama Geliştirme{" "}
                </a>
                <SmallItem>Udemy</SmallItem>
              </AboutListItem>
              <AboutListItem>
                <a
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  href="https://www.udemy.com/certificate/UC-7ccc2b68-2280-44dc-a0bd-714955dd8a0d/"
                >
                  SEO 2022: Complete SEO Training + SEO for WordPress Websites{" "}
                </a>
                <SmallItem>Udemy</SmallItem>
              </AboutListItem>
            </AboutList>
          </Text>
        </AboutItem>
        <AboutItem bgColor="#BF665E" color="#FFFFFF" align="left">
          <FontAwesomeIcon icon={faCanadianMapleLeaf} className="out" />
          <SubTitle>
            <FontAwesomeIcon icon={faBullseye} /> My Goals
          </SubTitle>
          <Text>
            My long-term ambition is to work abroad. I{"'"}m taking private lessons from my English teacher. Every day, I strive to
            enhance my English skills.
          </Text>
        </AboutItem>
      </Container>
      <Tree className="right">
        <FontAwesomeIcon icon={faTree} />
      </Tree>
    </>
  );
};

export default AboutContent;
