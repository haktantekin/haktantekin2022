import React from "react";
import styled from "styled-components";
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
const StyledImage = styled.img`
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
        <Title>Çalıştığım Şirketler</Title>
        <Intro>Frontend Developer olarak 13 yıldır çalışmaktayım.</Intro>
        <CompanyList>
          <CompanyListItem id="encazip">
            <LeftContent>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://encazip.com"
              >
                {" "}
                <StyledImage alt="encazip.com" width="320" height={78} src={'/img/encazip.png'} />
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
                <Year>03.2022 - current</Year>
              </Company>
              <AboutCompany>
                encazip.com elektrik fiyatları karşılaştırma, kredi, sigorta ve telekomunikasyon alanlarında satış yapan bir şirket. Güncel teknolojileri kullanmakta beraber SEO tarafında da optimizeler yaparak en iyi değerlere ulaştık!
              </AboutCompany>
              <UsingTech>
                <SubTitle>Kullandığım Teknolojiler</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faReact} /> react
                </UsingTechItem>
                <UsingTechItem>TypeScript</UsingTechItem>
                <UsingTechItem>next.js</UsingTechItem>
                <UsingTechItem>axios</UsingTechItem>
                <UsingTechItem>Tailwind Css</UsingTechItem>
                <UsingTechItem>styled-components</UsingTechItem>
                <UsingTechItem>Flexible / Responsive</UsingTechItem>
                <UsingTechItem>grid</UsingTechItem>
                <UsingTechItem>Scrum</UsingTechItem>
                <UsingTechItem>git</UsingTechItem>
                <UsingTechItem>npm package</UsingTechItem>
                <UsingTechItem>Seo Optimizasyonu</UsingTechItem>
                <UsingTechItem>Figma</UsingTechItem>
              </UsingTech>
              <Projects>
                <SubTitle>Projeler</SubTitle>
                <ProjectsItem title="bilgi için tıklayın" href="/tr/portfolyo#encazip">
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
                <StyledImage alt="akinon.com" width={320} height={78} src={'/img/akinon.svg'} />
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
                Akinon Türkiye&apos;deki en büyük e-ticaret sitelerinin yazılım alanında geliştirmelerini yapan bir şirket.
              </AboutCompany>
              <UsingTech>
                <SubTitle>Kullandığım Teknolojiler</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faJs} /> javaScript / JQuery
                </UsingTechItem>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
                </UsingTechItem>
                <UsingTechItem>Flexible / Responsive</UsingTechItem>
                <UsingTechItem>sass</UsingTechItem>
                <UsingTechItem>jira</UsingTechItem>
                <UsingTechItem>Scrum / Kanban</UsingTechItem>
                <UsingTechItem>git</UsingTechItem>
                <UsingTechItem>npm package</UsingTechItem>
                <UsingTechItem>Seo Optimizasyonu</UsingTechItem>
                <UsingTechItem>Zeplin</UsingTechItem>
              </UsingTech>
              <Projects>
                <SubTitle>Projects</SubTitle>
                <ProjectsItem title="bilgi için tıklayın" href="/tr/portfolyo#ecommerce">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> derimod.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem title="bilgi için tıklayın" href="/tr/portfolyo#ecommerce">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> desa.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem title="bilgi için tıklayın" href="/tr/portfolyo#ecommerce">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> lacoste.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem
                  title="bilgi için tıklayın"
                  href="/tr/portfolyo#ecommerce"
                >
                  <a>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                    /> superstep.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem title="bilgi için tıklayın" href="/tr/portfolyo#ecommerce">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> kigili.com{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem
                  title="bilgi için tıklayın"
                  href="/tr/portfolyo#ecommerce"
                >
                  <a>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                    /> abdullahkigili.com{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem title="bilgi için tıklayın" href="/tr/portfolyo#ecommerce">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> gap.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem title="bilgi için tıklayın" href="/tr/portfolyo#ecommerce">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> gant.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem
                  title="bilgi için tıklayın"
                  href="/tr/portfolyo#ecommerce"
                >
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} />{" "}
                    marksandspencer.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem title="bilgi için tıklayın" href="/tr/portfolyo#ecommerce">
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
                <StyledImage alt="encazip.com" width={183} height={71} src={'/img/nuevo.png'} />
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
                Nuevo, devlete ait web projeleri bulunan bir yazılım evi.
              </AboutCompany>
              <UsingTech>
                <SubTitle>Kullandığım Teknolojiler</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faJs} /> javaScript / JQuery
                </UsingTechItem>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
                </UsingTechItem>
                <UsingTechItem>Flexible / Responsive</UsingTechItem>
                <UsingTechItem>less</UsingTechItem>
                <UsingTechItem>Jira</UsingTechItem>
                <UsingTechItem>git</UsingTechItem>
                <UsingTechItem>gulp</UsingTechItem>
                <UsingTechItem>npm package</UsingTechItem>
                <UsingTechItem>Seo Optimizasyonu</UsingTechItem>
                <UsingTechItem>.net Entegrasyonu</UsingTechItem>
                <UsingTechItem>Adobe XD</UsingTechItem>
              </UsingTech>
              <Projects>
                <SubTitle>Projeler</SubTitle>
                <ProjectsItem
                  title="bilgi için tıklayın"
                  href="/tr/portfolyo#gastroclub"
                >
                  <a>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                    /> gastroclub.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem title="bilgi için tıklayın" href="/tr/portfolyo#tbb">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> tbb.org.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem
                  title="bilgi için tıklayın"
                  href="/tr/portfolyo#riskmerkezi"
                >
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> riskmerkezi.org{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem title="bilgi için tıklayın" href="/tr/portfolyo#trlibor">
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
                <StyledImage alt="magiclick.com" width={384} height={112} src={'/img/magiclick.png'} />
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
                Magiclick, Türkiye&apos;deki en büyük bankaların yazılım tarafında güncellemelerini yapan şirkettir.
              </AboutCompany>
              <UsingTech>
                <SubTitle>Kullandığım Teknolojiler</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faJs} /> javaScript / JQuery
                </UsingTechItem>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
                </UsingTechItem>
                <UsingTechItem>Flexible / Responsive</UsingTechItem>
                <UsingTechItem>less</UsingTechItem>
                <UsingTechItem>TFS</UsingTechItem>
                <UsingTechItem>Seo Optimizasyonu</UsingTechItem>
                <UsingTechItem>Adobe Photoshop</UsingTechItem>
              </UsingTech>
              <Projects>
                <SubTitle>Projeler</SubTitle>
                <ProjectsItem
                  title="bilgi için tıklayın"
                  href="/tr/portfolyo#yapikredi">
                  <a>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                    /> yapikredi.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem
                  title="bilgi için tıklayın"
                  href="/tr/portfolyo#yapikredi"
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
                <StyledImage alt="dream-box.tv" width={180} height={32} src={'/img/dreambox.png'} />
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
              <AboutCompany>Dreambox çeşitli holding şirketlerine web hizmetleri sunan bir dijital ajans. Aynı zamanda stajımı da yaptığım bir şirkettir.</AboutCompany>
              <UsingTech>
                <SubTitle>Kullandığım Teknolojiler</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faJs} /> javaScript / JQuery
                </UsingTechItem>
                <UsingTechItem>Css</UsingTechItem>
                <UsingTechItem>Seo Optimization</UsingTechItem>
                <UsingTechItem>C# Integration</UsingTechItem>
                <UsingTechItem>Adobe Photoshop</UsingTechItem>
              </UsingTech>
              <Projects>
                <SubTitle>Projeler</SubTitle>
                <ProjectsItem title="bilgi için tıklayın" href="/tr/portfolyo#borusan">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} /> borusan.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem
                  title="bilgi için tıklayın"
                  href="/tr/portfolyo#eczacibasi"
                >
                  <a>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                    /> eczacibasi.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem
                  title="bilgi için tıklayın"
                  href="/tr/portfolyo#erenholding"
                >
                  <a>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                    /> erenholding.com.tr{" "}
                  </a>
                </ProjectsItem>
                <ProjectsItem
                  title="bilgi için tıklayın"
                  href="/tr/portfolyo#borusanenbwenerji">
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
