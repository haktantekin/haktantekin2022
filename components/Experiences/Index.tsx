import Image from "next/image";
import React from "react";
import styled from "styled-components";
import encazipLogo from "../../public/img/encazip.png";
import akinonLogo from "../../public/img/akinon.svg";
import nuevoLogo from "../../public/img/nuevo.png";
import magiclickLogo from "../../public/img/magiclick.png";
import dreamboxLogo from "../../public/img/dreambox.png";
import { mediaQueries } from "../Layout/Devices";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircleInfo,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import colors from "../Layout/colors";
library.add(fas);

const Container = styled.div`
  width: 1200px;
  min-height: calc(100vh - 105px);
  display: block;
  margin: 0 auto;
  padding: 40px 0;
  position: relative;
  ${mediaQueries("md")`
      width:100%;
      padding:20px;
  `};
`;
const Title = styled.h1`
  font-size: 36px;
  width: 100%;
  display: block;
  font-weight: 500;
  margin-bottom: 10px;
  ${mediaQueries("md")`
      width:100%;
  `};
`;

const Intro = styled.p`
  color: #ababab;
  font-weight: 400;
  margin-top: 10px;
  font-size: 16px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  width: 100%;
  display: block;
  font-weight: 600;
  margin-top: 30px;
  color: ${colors.colorTwo};
  ${mediaQueries("md")`
      width:100%;
  `};
`;
const CompanyList = styled.ul`
  display: flex;
  flex-direction: column;
`;
const CompanyListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.colorOne};
  padding: 40px 0;
  ${mediaQueries("md")`
     flex-direction: column;
  `};
  &:last-child {
    border: 0;
  }
  a {
    color: ${colors.colorBlack};
  }
`;
const LeftContent = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  ${mediaQueries("md")`
      width:100%;
      align-items:center;
  `};
`;
const RightContent = styled.div`
  width: 70%;
  ${mediaQueries("md")`
      width:100%;
      margin-top:40px;
  `};
`;
const Company = styled.h2`
  display: block;
  width: 100%;
  font-weight: 600;
  font-size: 24px;
`;
const Year = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-left: 0px;
  top: -10px;
  position: relative;
`;
const AboutCompany = styled.div`
  color: #ababab;
  font-weight: 400;
  margin-top: 10px;
  font-size: 16px;
`;
const UsingTech = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;
const UsingTechItem = styled.li`
  list-style: none;
  background-color: ${colors.colorOne};
  padding: 5px 10px;
  border-radius: 5px;
  color: ${colors.colorTwo};
  transition: all 0.7s ease;
  &:hover {
    color: ${colors.colorOne};
    background-color: ${colors.colorTwo};
    border-radius: 0;
  }
`;
const Projects = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  a{
    list-style: none;
    background-color: ${colors.colorTwo};
    padding: 5px 10px;
    border-radius: 5px;
    color: #ffffff;
    font-size: 15px;
  }
`;
const ProjectsItem = styled(Link)``;
const StyledImage = styled(Image)`
  width: 200px !important;
  min-width: auto !important;
  max-width: inherit !important;
  min-height: auto !important;
  height: auto !important;
  padding: 0 !important;
  margin: 0 auto !important;

`;

const ExperiencesContent = () => {
  return (
    <>
      <Container>
        <Title>My Jobs</Title>
        <Intro>I have 12 years of experience as a frontend developer.</Intro>
        <CompanyList>
          <CompanyListItem id="encazip">
            <LeftContent>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://encazip.com"
              >
                {" "}
                <StyledImage alt="encazip.com" src={encazipLogo} />
              </a>
            </LeftContent>
            <RightContent>
              <Company>
                <a
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  href="https://encazip.com"
                >
                  encazip.com
                </a>{" "}
                <Year>03.2022 - Current</Year>
              </Company>
              <AboutCompany>
                encazip.com is an impartial, independent electricity tariff
                comparison and supplier switching website.
              </AboutCompany>
              <UsingTech>
                <SubTitle>Technologies</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faReact} /> React
                </UsingTechItem>
                <UsingTechItem>TypeScript</UsingTechItem>
                <UsingTechItem>NextJS</UsingTechItem>
                <UsingTechItem>Axios</UsingTechItem>
                <UsingTechItem>Styled Components</UsingTechItem>
                <UsingTechItem>Css Flexbox</UsingTechItem>
                <UsingTechItem>Scrum</UsingTechItem>
                <UsingTechItem>git</UsingTechItem>
                <UsingTechItem>npm package</UsingTechItem>
                <UsingTechItem>Seo Optimization</UsingTechItem>
                <UsingTechItem>Figma</UsingTechItem>
              </UsingTech>
              <Projects>
                <SubTitle>Projects</SubTitle>
                <ProjectsItem title="click for info" href="/Portfolio#encazip">
                  <a>
                    <FontAwesomeIcon icon={faCircleInfo} /> encazip.com
                  </a>
                </ProjectsItem>
              </Projects>
            </RightContent>
          </CompanyListItem>
          <CompanyListItem id="akinon">
            <LeftContent>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://akinon.com"
              >
                <StyledImage alt="akinon.com" src={akinonLogo} />
              </a>{" "}
            </LeftContent>
            <RightContent>
              <Company>
                <a
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  href="https://akinon.com"
                >
                  {" "}
                  akinon.com
                </a>{" "}
                <Year>01.2021 - 03.2022</Year>
              </Company>
              <AboutCompany>
                Akinon is a global software development company that provides
                state-of-the-art omnichannel commerce solutions to top retail
                brands worldwide.
              </AboutCompany>
              <UsingTech>
                <SubTitle>Technologies</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faJs} /> JavaScript / JQuery
                </UsingTechItem>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
                </UsingTechItem>
                <UsingTechItem>Css Flexbox</UsingTechItem>
                <UsingTechItem>Sass</UsingTechItem>
                <UsingTechItem>Jira</UsingTechItem>
                <UsingTechItem>Scrum / Kanban</UsingTechItem>
                <UsingTechItem>git</UsingTechItem>
                <UsingTechItem>npm package</UsingTechItem>
                <UsingTechItem>Seo Optimization</UsingTechItem>
                <UsingTechItem>Zeplin</UsingTechItem>
              </UsingTech>
              <Projects>
                <SubTitle>Projects</SubTitle>
                <ProjectsItem title="click for info" href="/Portfolio#ecommerce">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> derimod.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem title="click for info" href="/Portfolio#ecommerce">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> desa.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem title="click for info" href="/Portfolio#ecommerce">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> lacoste.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem
                  title="click for info"
                  href="/Portfolio#ecommerce"
                >
                  <a>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                    /> superstep.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem title="click for info" href="/Portfolio#ecommerce">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> kigili.com{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem
                  title="click for info"
                  href="/Portfolio#ecommerce"
                >
                  <a>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                    /> abdullahkigili.com{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem title="click for info" href="/Portfolio#ecommerce">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> gap.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem title="click for info" href="/Portfolio#ecommerce">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> gant.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem
                  title="click for info"
                  href="/Portfolio#ecommerce"
                >
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} />{" "}
                    marksandspencer.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem title="click for info" href="/Portfolio#ecommerce">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> salomon.com.tr{" "}
                  </a>
                </ProjectsItem>
              </Projects>
            </RightContent>
          </CompanyListItem>
          <CompanyListItem id="nuevo">
            <LeftContent>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://www.nuevo.com.tr/"
              >
                <StyledImage alt="nuevo.com.tr" src={nuevoLogo} />
              </a>{" "}
            </LeftContent>
            <RightContent>
              <Company>
                <a
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  href="https://nuevo.com.tr"
                >
                  {" "}
                  nuevo.com.tr
                </a>{" "}
                <Year>05.2019 - 01.2021</Year>
              </Company>
              <AboutCompany>
                Nuevo has been established in 2012 as a softwarehouse. Nuevo
                provides a wide scope of services and solutions ranging from
                custom .net applications to various SharePoint solutions, Mobile
                applications, digital signage solutions, mobile websites and
                dealer management systems.
              </AboutCompany>
              <UsingTech>
                <SubTitle>Technologies</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faJs} /> JavaScript / JQuery
                </UsingTechItem>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
                </UsingTechItem>
                <UsingTechItem>Css Flexbox</UsingTechItem>
                <UsingTechItem>less</UsingTechItem>
                <UsingTechItem>Jira</UsingTechItem>
                <UsingTechItem>git</UsingTechItem>
                <UsingTechItem>gulp</UsingTechItem>
                <UsingTechItem>npm package</UsingTechItem>
                <UsingTechItem>Seo Optimization</UsingTechItem>
                <UsingTechItem>.net Integration</UsingTechItem>
                <UsingTechItem>Adobe XD</UsingTechItem>
              </UsingTech>
              <Projects>
                <SubTitle>Projects</SubTitle>
                <ProjectsItem
                  title="click for info"
                  href="/Portfolio#gastroclub"
                >
                  <a>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                    /> gastroclub.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem title="click for info" href="/Portfolio#tbb">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> tbb.org.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem
                  title="click for info"
                  href="/Portfolio#riskmerkezi"
                >
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> riskmerkezi.org{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem title="click for info" href="/Portfolio#trlibor">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> trlibor.org{" "}
                  </a>
                </ProjectsItem>
              </Projects>
            </RightContent>
          </CompanyListItem>
          <CompanyListItem id="magiclick">
            <LeftContent>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://www.magiclick.com"
              >
                <StyledImage alt="magiclick.com" src={magiclickLogo} />
              </a>{" "}
            </LeftContent>
            <RightContent>
              <Company>
                <a
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  href="https://magiclick.com"
                >
                  {" "}
                  magiclick.com
                </a>{" "}
                <Year>07.2017 - 03.2019</Year>
              </Company>
              <AboutCompany>
                Magiclick that develops software for all banks in Turkey.
              </AboutCompany>
              <UsingTech>
                <SubTitle>Technologies</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faJs} /> JavaScript / JQuery
                </UsingTechItem>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
                </UsingTechItem>
                <UsingTechItem>Css Flexbox</UsingTechItem>
                <UsingTechItem>less</UsingTechItem>
                <UsingTechItem>TFS</UsingTechItem>
                <UsingTechItem>Seo Optimization</UsingTechItem>
                <UsingTechItem>Adobe Photoshop</UsingTechItem>
              </UsingTech>
              <Projects>
                <SubTitle>Projects</SubTitle>
                <ProjectsItem
                  title="click for info"
                  href="/Portfolio#yapikredi"
                >
                  <a>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                    /> yapikredi.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem
                  title="click for info"
                  href="/Portfolio#yapikredi"
                >
                  <a>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                    /> worldcard.com.tr{" "}
                  </a>
                </ProjectsItem>
              </Projects>
            </RightContent>
          </CompanyListItem>
          <CompanyListItem id="dreambox">
            <LeftContent>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://dream-box.tv"
              >
                <StyledImage alt="https://dream-box.tv" src={dreamboxLogo} />
              </a>{" "}
            </LeftContent>
            <RightContent>
              <Company>
                <a
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  href="https://dream-box.tv"
                >
                  {" "}
                  dream-box.tv{" "}
                </a>
                <Year>07.2010 - 06.2017</Year>
              </Company>
              <AboutCompany>Dreambox is a digital agency.</AboutCompany>
              <UsingTech>
                <SubTitle>Technologies</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faJs} /> JavaScript / JQuery
                </UsingTechItem>
                <UsingTechItem>Css</UsingTechItem>
                <UsingTechItem>Seo Optimization</UsingTechItem>
                <UsingTechItem>C# Integration</UsingTechItem>
                <UsingTechItem>Adobe Photoshop</UsingTechItem>
              </UsingTech>
              <Projects>
                <SubTitle>Projects</SubTitle>
                <ProjectsItem title="click for info" href="/Portfolio#borusan">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> borusan.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem
                  title="click for info"
                  href="/Portfolio#eczacibasi"
                >
                  <a>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                    /> eczacibasi.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem
                  title="click for info"
                  href="/Portfolio#erenholding"
                >
                  <a>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                    /> erenholding.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem
                  title="click for info"
                  href="/Portfolio#borusanenbwenerji"
                >
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} />{" "}
                    borusanenbwenerji.com.tr{" "}
                  </a>
                </ProjectsItem>
              </Projects>
            </RightContent>
          </CompanyListItem>
        </CompanyList>
      </Container>
    </>
  );
};

export default ExperiencesContent;
