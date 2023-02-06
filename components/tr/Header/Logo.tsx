import React from "react";
import styled from "styled-components";
import Glasses from "../Layout/Icons/Glasses";
import color from "../Layout/colors"

const Container = styled.div`
svg{
  position: relative;
  fill:#ffffff;
  transition: all 0.5s ease-in-out;
  &:hover {
    fill: ${color.colorOne};
  }
}
`;
const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const SvgIcon = styled(Glasses)`
 
`;

const Logo = () => {
  return (
    <Container>
      <Link href="/tr/">
        <SvgIcon />
      </Link>
    </Container>
  );
};

export default Logo;
