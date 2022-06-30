import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../Layout/Devices";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLink,
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
const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
`;
const ProjectListItem = styled.li`
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
const ProjectItem = styled.h2`
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
const ProjectsURL = styled.ul`
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
const Company = styled(Link)`

`;
const CompanyInfo = styled.div`
margin-bottom:20px;
  a {
    background-color: ${colors.colorBlack};
    padding: 5px 10px;
    border-radius: 5px;
    color: ${colors.colorOne};
    -webkit-transition: all 0.7s ease;
    transition: all 0.7s ease;
    position: relative;
    top:15px;
  }
`
const StyledImage = styled.img`
  width: 200px !important;
  min-width: auto !important;
  max-width: inherit !important;
  min-height: auto !important;
  height: auto !important;
  padding: 0 !important;
  margin: 0 !important;

`;

const PortfolioContent = () => {
  return (
    <>
      <Container>
        <Title>Portfolio</Title>
        <Intro>I took part in more than 20 projects.</Intro>
        <ProjectList>
          <ProjectListItem id="encazip">
            <LeftContent>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://encazip.com.tr"
              >
                {" "}
                <StyledImage alt="encazip.com" width={320}  height={78} src={'/img/encazip.png'} />
              </a>
            </LeftContent>
            <RightContent>
              <ProjectItem>
                <a
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  href="https://encazip.com"
                >
                  encazip.com
                </a>{" "}
                <Year>2020 - 2021</Year>
              </ProjectItem>
              <AboutCompany>
                My current job is Encazip. encazip.com is an impartial, independent electricity tariff comparison and supplier switching website. I{"'"}m using to React with styled components.
              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Company</SubTitle>
                <Company
                  title="click for info"
                  href="/Experiences#encazip"
                >
                  <a>
                    encazip.com
                  </a>
                </Company>
              </CompanyInfo>
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
              <ProjectsURL>
                <SubTitle>Web Site</SubTitle>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://encazip.com">
                  <FontAwesomeIcon icon={faLink} /> encazip.com
                </a>
              </ProjectsURL>
            </RightContent>
          </ProjectListItem>
          <ProjectListItem id="ecommerce">
            <LeftContent>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://akinon.com"
              >
                {" "}
                <StyledImage alt="akinon.com" width={320} height={78} src={'/img/akinon.svg'} />
              </a>
            </LeftContent>
            <RightContent>
              <ProjectItem>
                <a
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  href="https://akinon.com"
                >
                  e-commerce
                </a>{" "}
                <Year>2020 - 2021</Year>
              </ProjectItem>
              <AboutCompany>
                I worked in the frontend - maintanance team at Akinon company.<br />
                I was working in <strong>Lacoste, Superstep, Kiğılı, Barçın, GAP, GANT, Marks & Spencer, Derimod, Salomon, Desa and Sportive</strong> brands. <br />
                We used .sass while developing HTML/CSS projects.<br />
                Along with Bootsrap, there are also projects that we use Tailwind. We were using gulp for minify along with npm modules. <br />
                We were using javaScript in JQuery and non-JQuery projects.<br />
                Besides frontend developments, I was also doing Seo Optimizations (CLS, site acceleration, etc.). While working with the Kanban method, we have been working with the Scrum method since May 2021.
              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Company</SubTitle>
                <Company
                  title="click for info"
                  href="/Experiences#akinon"
                >
                  <a>
                    akinon.com
                  </a>
                </Company>
              </CompanyInfo>
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
              <ProjectsURL>
                <SubTitle>Web Site</SubTitle>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://derimod.com.tr">
                  <FontAwesomeIcon icon={faLink} /> derimod.com.tr
                </a>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://desa.com.tr">
                  <FontAwesomeIcon icon={faLink} /> desa.com.tr
                </a>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://lacoste.com.tr">
                  <FontAwesomeIcon icon={faLink} /> lacoste.com.tr
                </a>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://superstep.com.tr">
                  <FontAwesomeIcon icon={faLink} /> superstep.com.tr
                </a>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://kigili.com">
                  <FontAwesomeIcon icon={faLink} /> kigili.com
                </a>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://abdullahkigili.com">
                  <FontAwesomeIcon icon={faLink} /> abdullahkigili.com
                </a>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://gap.com.tr">
                  <FontAwesomeIcon icon={faLink} /> gap.com.tr
                </a>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://gant.com.tr">
                  <FontAwesomeIcon icon={faLink} /> gant.com.tr
                </a>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://marksandspencer.com.tr">
                  <FontAwesomeIcon icon={faLink} /> marksandspencer.com.tr
                </a>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://salomon.com.tr">
                  <FontAwesomeIcon icon={faLink} /> salomon.com.tr
                </a>
              </ProjectsURL>
            </RightContent>
          </ProjectListItem>
          <ProjectListItem id="borusan">
            <LeftContent>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://borusan.com.tr"
              >
                {" "}
                <StyledImage alt="borusan.com.tr" width={320} height={78} src={'/img/portfolio/borusan.png'} />
              </a>
            </LeftContent>
            <RightContent>
              <ProjectItem>
                <a
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  href="https://borusan.com.tr"
                >
                  borusan.com.tr
                </a>{" "}
                <Year>2010 - 2014 - current</Year>
              </ProjectItem>
              <AboutCompany>
                While I was working at dream-box.tv, interface changes were made for Borusan Holding{"'"}s website 3 times. I made improvements on the HTML/CSS and Javascript side. I provided support as maintanance on 10 different sites belonging to Borusan Holding. <strong>(Borusan Art, Borusan Music House, İyi Enerji, Borusan EnBW Energy, Artcenter, Borusan Lojistik, Borusan Contemporary)</strong>
              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Company</SubTitle>
                <Company
                  title="click for info"
                  href="/Experiences#dreambox"
                >
                  <a>
                    dream-box.tv
                  </a>
                </Company>
              </CompanyInfo>
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
              <ProjectsURL>
                <SubTitle>Web Site</SubTitle>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://borusan.com.tr">
                  <FontAwesomeIcon icon={faLink} /> borusan.com.tr
                </a>
              </ProjectsURL>
            </RightContent>
          </ProjectListItem>
          <ProjectListItem id="eczacibasi">
            <LeftContent>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://eczacibasi.com.tr"
              >
                {" "}
                <StyledImage alt="eczacibasi.com.tr" width={320} height={78} src={'/img/portfolio/eczacibasi.png'} />
              </a>
            </LeftContent>
            <RightContent>
              <ProjectItem>
                <a
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  href="https://eczacibasi.com.tr"
                >
                  eczacibasi.com.tr
                </a>{" "}
                <Year>2010 - 2017 - current</Year>
              </ProjectItem>
              <AboutCompany>
                The interface was updated twice for the Eczacıbaşı Holding website. I made improvements on the HTML/CSS and Javascript side.
              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Company</SubTitle>
                <Company
                  title="click for info"
                  href="/Experiences#dreambox"
                >
                  <a>
                    dream-box.tv
                  </a>
                </Company>
              </CompanyInfo>
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
              <ProjectsURL>
                <SubTitle>Web Site</SubTitle>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://eczacibasi.com.tr">
                  <FontAwesomeIcon icon={faLink} /> eczacibasi.com.tr
                </a>
              </ProjectsURL>
            </RightContent>
          </ProjectListItem>
          <ProjectListItem id="erenholding">
            <LeftContent>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://erenholding.com.tr"
              >
                {" "}
                <StyledImage alt="eczacibasi.com.tr" width="320"  height={78} src={'/img/portfolio/eczacibasi.png'} />
              </a>
            </LeftContent>
            <RightContent>
              <ProjectItem>
                <a
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  href="https://erenholding.com.tr"
                >
                  erenholding.com.tr
                </a>{" "}
                <Year>2010 - 2017 - current</Year>
              </ProjectItem>
              <AboutCompany>
              I made HTML/CSS and javaScript developments for the websites of Eren Holding and its sub 8 companies.
              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Company</SubTitle>
                <Company
                  title="click for info"
                  href="/Experiences#dreambox"
                >
                  <a>
                    dream-box.tv
                  </a>
                </Company>
              </CompanyInfo>
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
              <ProjectsURL>
                <SubTitle>Web Site</SubTitle>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://erenholding.com.tr">
                  <FontAwesomeIcon icon={faLink} /> erenholding.com.tr
                </a>
              </ProjectsURL>
            </RightContent>
          </ProjectListItem>
          <ProjectListItem id="tbb">
            <LeftContent>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://www.tbb.org.tr"
              >
                {" "}
                <StyledImage alt="tbb.org.tr" width={300}  height={300} src={'/img/portfolio/tbb.png'} />
              </a>
            </LeftContent>
            <RightContent>
              <ProjectItem>
                <a
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  href="https://www.tbb.org.tr"
                >
                  tbb.org.tr
                </a>{" "}
                <Year>2019 - current</Year>
              </ProjectItem>
              <AboutCompany>
              The facelift of the Banks Association of Turkey website was done by me. I built the existing designs from scratch using HTML, CSS3(Less), Bootstrap 4 and JQuery. I used gulp for Minify and npm for modules. After the interface coding was finished, I adapted the .net codes on the old site to the interface I wrote.
              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Company</SubTitle>
                <Company
                  title="click for info"
                  href="/Experiences#nuevo"
                >
                  <a>
                  nuevo.com.tr
                  </a>
                </Company>
              </CompanyInfo>
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
              <ProjectsURL>
                <SubTitle>Web Site</SubTitle>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://www.tbb.org.tr">
                  <FontAwesomeIcon icon={faLink} /> tbb.org.tr
                </a>
              </ProjectsURL>
            </RightContent>
          </ProjectListItem>
          <ProjectListItem id="yapikredi">
            <LeftContent>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://yapikredi.com.tr"
              >
                {" "}
                <StyledImage alt="yapikredi.com" width={320}  height={78} src={'/img/portfolio/yapikredi.png'} />
              </a>
            </LeftContent>
            <RightContent>
              <ProjectItem>
                <a
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  href="https://yapikredi.com.tr"
                >
                  yapikredi.com.tr
                </a>{" "}
                <Year>2018</Year>
              </ProjectItem>
              <AboutCompany>
              I worked on the maintanance side for the live site of Yapı Kredi bank. It is also affiliated with Yapı Kredi{"'"}; I also supported <strong>Adios Kart, Bonus Kart, World Kart and Crystal Kart</strong> websites as maintanance.
              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Company</SubTitle>
                <Company
                  title="click for info"
                  href="/Experiences#magiclick"
                >
                  <a>
                  magiclick.com
                  </a>
                </Company>
              </CompanyInfo>
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
              <ProjectsURL>
                <SubTitle>Web Site</SubTitle>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://yapikredi.com.tr">
                  <FontAwesomeIcon icon={faLink} /> yapikredi.com.tr
                </a>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://worldcard.com.tr">
                  <FontAwesomeIcon icon={faLink} /> worldcard.com.tr
                </a>
              </ProjectsURL>
            </RightContent>
          </ProjectListItem>
          <ProjectListItem id="borusanenbwenerji">
            <LeftContent>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://borusanenbw.com.tr"
              >
                {" "}
                <StyledImage alt="borusanenbw.com.tr" width={320}  height={78} src={'/img/portfolio/borusanEnbw.png'} />
              </a>
            </LeftContent>
            <RightContent>
              <ProjectItem>
                <a
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  href="https://borusanenbw.com.tr"
                >
                  borusanenbw.com.tr
                </a>{" "}
                <Year>2017 - current</Year>
              </ProjectItem>
              <AboutCompany>
              As a freelancer, I coded Borusan EnBW Enerji{"'"}s current site with Bootstrap for my first company. I supported it as maintanance until it was published.
              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Company</SubTitle>
                <Company
                  title="click for info"
                  href="/Experiences#dreambox"
                >
                  <a>
                    dream-box.tv
                  </a>
                </Company>
              </CompanyInfo>
              <UsingTech>
                <SubTitle>Technologies</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faJs} /> JavaScript / JQuery
                </UsingTechItem>
                <UsingTechItem>Bootstrap</UsingTechItem>
                <UsingTechItem>Css</UsingTechItem>
                <UsingTechItem>Seo Optimization</UsingTechItem>
                <UsingTechItem>C# Integration</UsingTechItem>
                <UsingTechItem>Adobe Photoshop</UsingTechItem>
              </UsingTech>
              <ProjectsURL>
                <SubTitle>Web Site</SubTitle>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://www.borusanenbw.com.tr/">
                  <FontAwesomeIcon icon={faLink} /> borusanenbw.com.tr
                </a>
              </ProjectsURL>
            </RightContent>
          </ProjectListItem>
          <ProjectListItem id="gastroclub">
            <LeftContent>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://gastroclub.com.tr/"
              >
                {" "}
                <StyledImage alt="gastro.com.tr" width={228}  height={156} src={'/img/portfolio/gastro.png'} />
              </a>
            </LeftContent>
            <RightContent>
              <ProjectItem>
                <a
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  href="https://gastroclub.com.tr/"
                >
                gastroclub.com.tr
                </a>{" "}
                <Year>2019 - current</Year>
              </ProjectItem>
              <AboutCompany>
              I made improvements on Bootstrap, CSS(Less) and javaScript for the Gastroclub website.
              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Company</SubTitle>
                <Company
                  title="click for info"
                  href="/Experiences#nuevo"
                >
                  <a>
                  nuevo.com.tr
                  </a>
                </Company>
              </CompanyInfo>
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
              <ProjectsURL>
                <SubTitle>Web Site</SubTitle>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://www.gastroclub.com.tr">
                  <FontAwesomeIcon icon={faLink} /> gastroclub.com.tr
                </a>
              </ProjectsURL>
            </RightContent>
          </ProjectListItem>
          <ProjectListItem id="riskmerkezi">
            <LeftContent>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://riskmerkezi.org"
              >
                {" "}
                <StyledImage alt="tbb.org.tr" width={300}  height={300} src={'/img/portfolio/tbb.png'} />
              </a>
            </LeftContent>
            <RightContent>
              <ProjectItem>
                <a
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  href="https://riskmerkezi.org"
                >
                 riskmerkezi.org
                </a>{" "}
                <Year>2019 - current</Year>
              </ProjectItem>
              <AboutCompany>
              The facelift of the Banks Association of Turkey website was done by me. I built the existing designs from scratch using HTML, CSS3(Less), Bootstrap 4 and JQuery. I used gulp for Minify and npm for modules. After the interface coding was finished, I adapted the .net codes on the old site to the interface I wrote.
              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Company</SubTitle>
                <Company
                  title="click for info"
                  href="/Experiences#nuevo"
                >
                  <a>
                  nuevo.com.tr
                  </a>
                </Company>
              </CompanyInfo>
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
              <ProjectsURL>
                <SubTitle>Web Site</SubTitle>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="https://riskmerkezi.org">
                  <FontAwesomeIcon icon={faLink} /> riskmerkezi.org
                </a>
              </ProjectsURL>
            </RightContent>
          </ProjectListItem>
          <ProjectListItem id="trlibor">
            <LeftContent>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="http://www.trlibor.org/"
              >
                {" "}
                <StyledImage alt="tbb.org.tr" width={300}  height={300} src={'/img/portfolio/tbb.png'} />
              </a>
            </LeftContent>
            <RightContent>
              <ProjectItem>
                <a
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                  href="http://www.trlibor.org/"
                >
                trlibor.org
                </a>{" "}
                <Year>2019 - current</Year>
              </ProjectItem>
              <AboutCompany>
              The facelift of the Banks Association of Turkey website was done by me. I built the existing designs from scratch using HTML, CSS3(Less), Bootstrap 4 and JQuery. I used gulp for Minify and npm for modules. After the interface coding was finished, I adapted the .net codes on the old site to the interface I wrote.
              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Company</SubTitle>
                <Company
                  title="click for info"
                  href="/Experiences#nuevo"
                >
                  <a>
                  nuevo.com.tr
                  </a>
                </Company>
              </CompanyInfo>
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
              <ProjectsURL>
                <SubTitle>Web Site</SubTitle>
                <a target={"_blank"}
                  rel={"noreferrer noopener"} href="http://www.trlibor.org/">
                  <FontAwesomeIcon icon={faLink} /> trlibor.org
                </a>
              </ProjectsURL>
            </RightContent>
          </ProjectListItem>
        </ProjectList>
      </Container>
    </>
  );
};

export default PortfolioContent;
