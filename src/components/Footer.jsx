import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.div``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  
`

const List = styled.ul`
  
`



const Right = styled.div`
  flex: 1;
  padding: 20px;
`;



const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MAYBEE.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>

      </Center>
      <Right>
        
      </Right>
    </Container>
  );
};

export default Footer;
