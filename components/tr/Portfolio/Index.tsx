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
        <Title>Portfolyo</Title>
        <Intro>20&apos;yi aşkın proje tecrübesi.</Intro>
        <ProjectList>
          <ProjectListItem id="encazip">
            <LeftContent>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://encazip.com.tr"
              >
                {" "}
                <StyledImage alt="encazip.com" width={320} height={78} src={'/img/encazip.png'} />
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
                <Year>2021 - mevcut</Year>
              </ProjectItem>
              <AboutCompany>
                encazip.com elektrik fiyatları karşılaştırma, kredi, sigorta ve telekomunikasyon alanlarında satış yapan bir şirket. Güncel teknolojileri kullanmakta beraber SEO tarafında da optimizeler yaparak en iyi değerlere ulaştık!
              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Şirket</SubTitle>
                <Company
                  title="bilgi için tıklayın"
                  href="/tr/deneyimler#encazip"
                >
                  <a>
                    encazip.com
                  </a>
                </Company>
              </CompanyInfo>
              <UsingTech>
                <SubTitle>Kullandığım Teknolojiler</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faReact} /> React
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
              <ProjectsURL>
                <SubTitle>Web Sitesi</SubTitle>
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
                  e-ticaret
                </a>{" "}
                <Year>2020 - 2021</Year>
              </ProjectItem>
              <AboutCompany>
                Akinon&apos;da büyük e-ticaret şirketleri üzerinde çalıştım.<br />
                Çalıştığım projeler: <strong>Lacoste, Superstep, Kiğılı, Barçın, GAP, GANT, Marks & Spencer, Derimod, Salomon, Desa and Sportive</strong> markalarıdır. <br />
                Proejelerde .sass kullandık.<br />
                Bazı projeler Bootstrap veya Tailwind kullandık. Projelerde npm paketleri ve gulp kullandık. <br />
                Genellikle JQuery kullanılan projelerde çalıştım.<br />
                Frontend geliştirmelerinin yanı sıra Seo Optimizasyonu (CLS, site hızlandırma vb.) da yapıyordum. İşe ilk girdiğimde kanban metodu ile çalışırken, Mayıs 2021&apos;den beri Scrum metodu ile çalışıyorduk.
              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Şirket</SubTitle>
                <Company
                  title="bilgi için tıklayın"
                  href="/tr/deneyimler#akinon"
                >
                  <a>
                    akinon.com
                  </a>
                </Company>
              </CompanyInfo>
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
              <ProjectsURL>
                <SubTitle>Web Sitesi</SubTitle>
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
                <Year>2010 - 2014 - halen</Year>
              </ProjectItem>
              <AboutCompany>
                dream-box.tv&apos;de çalışırken, Borusan Holding&apos;in 3 kez arayüzü güncellendi. HTML/CSS ve javaScript tarafında geliştirmeler yaptım. Borusan Holding&apos;in yanı sıra 10 farklı alt projesinde de geliştirmeler yaptım. <strong>(Borusan Art, Borusan Music House, İyi Enerji, Borusan EnBW Energy, Artcenter, Borusan Lojistik, Borusan Contemporary)</strong>
              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Şirket</SubTitle>
                <Company
                  title="bilgi için tıklayın"
                  href="/tr/deneyimler#dreambox"
                >
                  <a>
                    dream-box.tv
                  </a>
                </Company>
              </CompanyInfo>
              <UsingTech>
                <SubTitle>Kullandığım Teknolojiler</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faJs} /> javaScript / JQuery
                </UsingTechItem>
                <UsingTechItem>Css</UsingTechItem>
                <UsingTechItem>Seo Optimizasyonu</UsingTechItem>
                <UsingTechItem>C# Entegrasyonu</UsingTechItem>
                <UsingTechItem>Adobe Photoshop</UsingTechItem>
              </UsingTech>
              <ProjectsURL>
                <SubTitle>Web Sitesi</SubTitle>
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
                Eczacıbaşı Holding web sitesi için arayüz iki kez güncellendi. HTML/CSS ve javaScript tarafında geliştirmeler yaptım.
              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Şirket</SubTitle>
                <Company
                  title="bilgi için tıklayın"
                  href="/tr/deneyimler#dreambox"
                >
                  <a>
                    dream-box.tv
                  </a>
                </Company>
              </CompanyInfo>
              <UsingTech>
                <SubTitle>Kullandığım Teknolojiler</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faJs} /> javaScript / JQuery
                </UsingTechItem>
                <UsingTechItem>Css</UsingTechItem>
                <UsingTechItem>Seo Optimizasyonu</UsingTechItem>
                <UsingTechItem>C# Entegrasyonu</UsingTechItem>
                <UsingTechItem>Adobe Photoshop</UsingTechItem>
              </UsingTech>
              <ProjectsURL>
                <SubTitle>Web Sitesi</SubTitle>
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
                <StyledImage alt="eczacibasi.com.tr" width="320" height={78} src={'/img/portfolio/erenholding.png'} />
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
                Eren Holding ve 8 alt şirketinin web siteleri için HTML/CSS ve javaScript geliştirmeleri yaptım.
              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Şirket</SubTitle>
                <Company
                  title="bilgi için tıklayın"
                  href="/tr/deneyimler#dreambox"
                >
                  <a>
                    dream-box.tv
                  </a>
                </Company>
              </CompanyInfo>
              <UsingTech>
                <SubTitle>Kullandığım Teknolojiler</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faJs} /> javaScript / JQuery
                </UsingTechItem>
                <UsingTechItem>Css</UsingTechItem>
                <UsingTechItem>Seo Optimizasyonu</UsingTechItem>
                <UsingTechItem>C# Entegrasyonu</UsingTechItem>
                <UsingTechItem>Adobe Photoshop</UsingTechItem>
              </UsingTech>
              <ProjectsURL>
                <SubTitle>Web Sitesi</SubTitle>
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
                <StyledImage alt="tbb.org.tr" width={300} height={300} src={'/img/portfolio/tbb.png'} />
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
                <Year>2019 - halen</Year>
              </ProjectItem>
              <AboutCompany>
                Türkiye Bankalar Birliği web sitesinin yenilenmesi tarafımdan yapılmıştır. Mevcut tasarımları HTML, CSS3 (Less), Bootstrap 4 ve JQuery kullanarak sıfırdan oluşturdum. Minify için gulp ve modüller için npm kullandım. Arayüz kodlaması bittikten sonra eski sitedeki .net kodlarını kendi yazdığım arayüze uyarladım.              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Şirket</SubTitle>
                <Company
                  title="bilgi için tıklayın"
                  href="/tr/deneyimler#nuevo"
                >
                  <a>
                    nuevo.com.tr
                  </a>
                </Company>
              </CompanyInfo>
              <UsingTech>
                <SubTitle>Kullandığım Teknolojiler</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faJs} /> javaScript / JQuery
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
                <UsingTechItem>Seo Optimizasyonu</UsingTechItem>
                <UsingTechItem>.net Entegrasyonu</UsingTechItem>
                <UsingTechItem>Adobe XD</UsingTechItem>
              </UsingTech>
              <ProjectsURL>
                <SubTitle>Web Sitesi</SubTitle>
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
                <StyledImage alt="yapikredi.com" width={320} height={78} src={'/img/portfolio/yapikredi.png'} />
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
                Yapı Kredi bankasının web sitesi üzerinde geliştirmeler yaptım. Aynı zamanda Yapı Kredi&apos;ye bağlı <strong>Adios Kart, Bonus Kart, World Kart ve Crystal Kart</strong> sitelerine de maintanance olarak destek verdim.
              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Şirket</SubTitle>
                <Company
                  title="bilgi için tıklayın"
                  href="/tr/deneyimler#magiclick"
                >
                  <a>
                    magiclick.com
                  </a>
                </Company>
              </CompanyInfo>
              <UsingTech>
                <SubTitle>Kullandığım Teknolojiler</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faJs} /> javaScript / JQuery
                </UsingTechItem>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
                </UsingTechItem>
                <UsingTechItem>Css Flexbox</UsingTechItem>
                <UsingTechItem>less</UsingTechItem>
                <UsingTechItem>TFS</UsingTechItem>
                <UsingTechItem>Seo Optimizasyonu</UsingTechItem>
                <UsingTechItem>Adobe Photoshop</UsingTechItem>
              </UsingTech>
              <ProjectsURL>
                <SubTitle>Web Sitesi</SubTitle>
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
                <StyledImage alt="borusanenbw.com.tr" width={320} height={78} src={'/img/portfolio/borusanEnbw.png'} />
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
                Freelancer olarak Borusan EnBW Enerji&apos;nin mevcut sitesini Bootstrap ile kodladım. Yayınlanana kadar arayüz geliştirmelerine destek oldum.
              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Şirket</SubTitle>
                <Company
                  title="bilgi için tıklayın"
                  href="/tr/deneyimler#dreambox"
                >
                  <a>
                    dream-box.tv
                  </a>
                </Company>
              </CompanyInfo>
              <UsingTech>
                <SubTitle>Kullandığım Teknolojiler</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faJs} /> javaScript / JQuery
                </UsingTechItem>
                <UsingTechItem>Bootstrap</UsingTechItem>
                <UsingTechItem>Css</UsingTechItem>
                <UsingTechItem>Seo Optimizasyonu</UsingTechItem>
                <UsingTechItem>C# Entegrasyonu</UsingTechItem>
                <UsingTechItem>Adobe Photoshop</UsingTechItem>
              </UsingTech>
              <ProjectsURL>
                <SubTitle>Web Sitesi</SubTitle>
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
                <StyledImage alt="gastro.com.tr" width={228} height={156} src={'/img/portfolio/gastro.png'} />
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
              Gastroclub web sitesi için Bootstrap, CSS(Less) ve javaScript ile geliştirmeler yaptım.
              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Şirket</SubTitle>
                <Company
                  title="bilgi için tıklayın"
                  href="/tr/deneyimler#nuevo"
                >
                  <a>
                    nuevo.com.tr
                  </a>
                </Company>
              </CompanyInfo>
              <UsingTech>
                <SubTitle>Kullandığım Teknolojiler</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faJs} /> javaScript / JQuery
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
                <UsingTechItem>Seo Optimizasyonu</UsingTechItem>
                <UsingTechItem>.net Entegrasyonu</UsingTechItem>
                <UsingTechItem>Adobe XD</UsingTechItem>
              </UsingTech>
              <ProjectsURL>
                <SubTitle>Web Sitesi</SubTitle>
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
                <StyledImage alt="tbb.org.tr" width={300} height={300} src={'/img/portfolio/tbb.png'} />
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
              Türkiye Bankalar Birliği web sitesinin yenilenmesi tarafımdan yapılmıştır. Mevcut tasarımları HTML, CSS3 (Less), Bootstrap 4 ve JQuery kullanarak sıfırdan oluşturdum. Minify için gulp ve modüller için npm kullandım. Arayüz kodlaması bittikten sonra eski sitedeki .net kodlarını kendi yazdığım arayüze uyarladım.              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Şirket</SubTitle>
                <Company
                  title="bilgi için tıklayın"
                  href="/tr/deneyimler#nuevo"
                >
                  <a>
                    nuevo.com.tr
                  </a>
                </Company>
              </CompanyInfo>
              <UsingTech>
                <SubTitle>Kullandığım Teknolojiler</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faJs} /> javaScript / JQuery
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
                <UsingTechItem>Seo Optimizasyonu</UsingTechItem>
                <UsingTechItem>.net Entegrasyonu</UsingTechItem>
                <UsingTechItem>Adobe XD</UsingTechItem>
              </UsingTech>
              <ProjectsURL>
                <SubTitle>Web Sitesi</SubTitle>
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
                <StyledImage alt="tbb.org.tr" width={300} height={300} src={'/img/portfolio/tbb.png'} />
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
              Türkiye Bankalar Birliği web sitesinin yenilenmesi tarafımdan yapılmıştır. Mevcut tasarımları HTML, CSS3 (Less), Bootstrap 4 ve JQuery kullanarak sıfırdan oluşturdum. Minify için gulp ve modüller için npm kullandım. Arayüz kodlaması bittikten sonra eski sitedeki .net kodlarını kendi yazdığım arayüze uyarladım.              </AboutCompany>
              <CompanyInfo>
                <SubTitle>Şirket</SubTitle>
                <Company
                  title="bilgi için tıklayın"
                  href="/tr/deneyimler#nuevo"
                >
                  <a>
                    nuevo.com.tr
                  </a>
                </Company>
              </CompanyInfo>
              <UsingTech>
                <SubTitle>Kullandığım Teknolojiler</SubTitle>
                <UsingTechItem>
                  <FontAwesomeIcon icon={faJs} /> javaScript / JQuery
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
                <UsingTechItem>Seo Optimizasyonu</UsingTechItem>
                <UsingTechItem>.net Entegrasyonu</UsingTechItem>
                <UsingTechItem>Adobe XD</UsingTechItem>
              </UsingTech>
              <ProjectsURL>
                <SubTitle>Web Sitesi</SubTitle>
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
