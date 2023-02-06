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
        <Title>Kimim Ben?</Title>
        <AboutItem bgColor={colors.colorTwo} color="#FFFFFF" align="left">
          <FontAwesomeIcon icon={faCanadianMapleLeaf} className="out" />
          <SubTitle>
            <FontAwesomeIcon icon={faUser} /> Giriş
          </SubTitle>
          <Text>
            İsmim Haktan. 10 Mayıs 1993 doğumluyum. İstanbul&apos;da, ailemle beraber yaşamaktayım.
            Ayaklarımda doğuştan ortopedik bir engelim bulunmakta. Ufak bir yürüme bozukluğu, işime engel bir durum değildir.
            2012 yılından beri keyifle gözlük kullanmaktayım. Gülmeyi, güldürmeyi seven biriyim.
          </Text>
        </AboutItem>
        <AboutItem bgColor="#CACACA" color={colors.colorBlack} align="right">
          <FontAwesomeIcon icon={faCanadianMapleLeaf} className="out" />
          <SubTitle>
            <FontAwesomeIcon icon={faBook} /> Eğitim
          </SubTitle>
          <Text>
            <AboutList>
              <AboutListItem>
                <TextType weight="bold">Anadolu Üniversitesi</TextType>, Turizm ve Seyahat Hizmetleri (Önlisans).
                <SmallItem>2019-2021</SmallItem>
              </AboutListItem>
              <AboutListItem>
                <TextType weight="bold">Fatih Üniversitesi</TextType>, Bilgisayar Programcılığı (Önlisans).
                <SmallItem>2010-2012</SmallItem>
              </AboutListItem>
              <AboutListItem>
                <TextType weight="bold">Şişli Meslek Lisesi</TextType>, Web Tasarım ve Programlama.
                <SmallItem>2006-2010</SmallItem>
              </AboutListItem>
            </AboutList>
          </Text>
        </AboutItem>

        <AboutItem bgColor={colors.colorOne} color={colors.colorBlack} align="left">
          <FontAwesomeIcon icon={faCanadianMapleLeaf} className="out" />
          <SubTitle>
            <FontAwesomeIcon icon={faCode} /> Kısaca{" "}
            <Link href="/Experiences">Deneyimlerim</Link>
          </SubTitle>
          <Text>
          2010’dan beri 5 farklı şirkette 30’u aşkın projede görev aldım. Bu projeler holding şirketleri, kültür ve sanat, bankacılık ve e-ticaret alanlarındaydı.
            <br />
            <br />
            Sürekli kendimi geliştirmeye çalışıyorum. Özel bir hoca eşliğinde İngilizce öğreniyorum. 
            <br />
            <br />
            Yeteneklerimden bahsedecek olursam; ilk şirketlerimde HTML, CSS ve JQuery ağırlıklı projelerde çalıştım, zaman zaman da Pure Javascript projelerde bulundum. Sonrasında Bootstrap ve CSS Prosedürleri sass/less kullanılan projelerde çalıştım. npm paketlerinin yönetimi, git komutları ve terminal kullanımı, gulp ile css ve js sıkıştırma konularında bilgi sahibiyim.

            <br />
            <br />
            Şirketlerimde C# veya .net ile yazılmış projelerde çalıştım. Kodu anlayabilecek kadar backend bilgim bulunmaktadır.
            <br />
            <br />
            Flex ve grid yapısını en uygun şekilde kullanıyorum. Bootstrap ve Tailwind bilgim de bulunmaktadır. 
            <br/><br/>
            Lisede Photoshop eğitimi aldım. Kariyerim boyunca tüm tasarım araçlarıyla çalıştım.
            <br />
            <br />
            Agile ve Scrum ile çalıştım, ayrıca Kanban yapısında da çalıştım. Jira, Azure ve Trello kullanan şirketlerde çalıştım.
            <br />
            <br />
            Seo’ya özel bir ilgi duymaktayım, eğitimler izliyorum. Temasını kendim yazdığım bir WordPress bloğum var ve site üzerinde SEO denemeleri yapmaktayım. (kalorihesabi.com)
            <br /><br/>
          Yaptığım projeleri&nbsp;
            <a target={"_blank"} rel={"noreferrer noopener"} href="https://github.com/haktantekin">Github</a>{" "}profilimden görebilirsiniz.
          </Text>
        </AboutItem>
        <AboutItem bgColor="#4A6D8C" color="#ffffff" align="right">
          <FontAwesomeIcon icon={faCanadianMapleLeaf} className="out" />
          <SubTitle>
            <FontAwesomeIcon icon={faCertificate} /> Sertifikalar
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
            <FontAwesomeIcon icon={faBullseye} /> Hedeflerim
          </SubTitle>
          <Text>
            İngilizce seviyemi olabildiğince arttırıp, kod tarafında yeni framework ve yapılar öğrenip, yurt dışında bir ülkede yaşamak istiyorum.
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
