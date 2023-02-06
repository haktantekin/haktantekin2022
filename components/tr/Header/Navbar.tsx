import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { mediaQueries } from "../Layout/Devices";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../Layout/colors";
library.add(fas);

const Nav = styled.div`
  display: flex;
  gap: 30px;
`;

const LinkClass = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.colorSoftGray};
  cursor: pointer;
  background-image: linear-gradient(
    to right,
    ${colors.colorOne},
    ${colors.colorSoftGray} 50%,
    ${colors.colorSoftGray} 50%
  );
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  background-size: 200% 100%;
  background-position: -100%;
  &:before {
    content: "";
    background: ${colors.colorOne};
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 2px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-position: 0;
    &::before {
      width: 100%;
    }
  }
`;

const Item = styled.div`
  &.active {
    background-position: 0;
    border-bottom: 1px solid ${colors.colorOne};
    ${mediaQueries("md")`
    padding-bottom:10px;
    border-bottom:0;
    margin-bottom:-15px;
    span{
      color: #f5f5f5;
      background:transparent;
      -webkit-background-clip: inherit;
      -webkit-text-fill-color: inherit;
    }
   }
  `};
  }
`;
const MobileIcon = styled.div`
  display: none;
  ${mediaQueries("md")`
   display:block;
   .mobile-menu{
    font-size:24px;
    cursor:pointer
   }
  `};
`;

const Container = styled.div`
  ${mediaQueries("md")`
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height:100vh;
      border-top: 1px solid #fff;
      position: absolute;
      top: 70px;
      left: -110%;
      opacity: 1;
      transition: all 0.5s ease;
      padding:20px;
    }

    .nav-menu.active {
      background: #1f5156;
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
    .nav-item .active {
      color: #f5f5f5;
      border: none;
    }
    .nav-links {
      padding: 1.5rem;
      width: 100%;
      display: table;
    }
   }
  `};
`;

const Navbar = () => {
  const router = useRouter();
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <>
      <Container>
        <Nav
          onClick={() => Close()}
          className={click ? "nav-menu active" : "nav-menu"}
        >
          <Item className={router.asPath == "/tr/" ? "active" : ""}>
            <Link href="/tr/">
              <LinkClass>ANA SAYFA</LinkClass>
            </Link>
          </Item>
          <Item className={router.asPath == "/tr/hakkimda/" ? "active" : ""}>
            <Link href="/tr/hakkimda/">
              <LinkClass>HAKKIMDA</LinkClass>
            </Link>
          </Item>
          <Item className={router.asPath == "/tr/deneyimler/" ? "active" : ""}>
            <Link href="/tr/deneyimler">
              <LinkClass>DENEYİMLER</LinkClass>
            </Link>
          </Item>
          <Item className={router.asPath == "/tr/portfolyo/" ? "active" : ""}>
            <Link href="/tr/portfolyo">
              <LinkClass>PORTFOLYO</LinkClass>
            </Link>
          </Item>
          <Item className={router.asPath == "/tr/iletisim/" ? "active" : ""}>
            <Link href="/tr/iletisim">
              <LinkClass>İLETİŞİM</LinkClass>
            </Link>
          </Item>
          <Item>
            <Link href="/">
              <LinkClass>EN</LinkClass>
            </Link>
          </Item>
        </Nav>
        <MobileIcon onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} className="mobile-menu" />
        </MobileIcon>
      </Container>
    </>
  );
};

export default Navbar;
