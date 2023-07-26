import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
  margin-top: -30px;
`;

const Image = styled.img`
  margin-top: -20px;
`;

const Desc = styled.p`
  margin-bottom: 12px;
  margin-top: 2px;
  /* margin: 10px 0px; */
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
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Image width={100} src="./assets/images/22.png" alt="logo" />
        <Desc>
          MayBee is an online supermarket where you can shop for your daily
          groceries in Nigeria at prices cheaper than others. Check off your
          grocery list and stock up your pantry with a variety of items ranging
          from rice to cooking oils, wines, Snacks, beverages, household
          cleaning items, and many others. We also have a section for fresh
          foods and canned foods. Also, Discover our baby shop for all baby
          essentials from baby food and diapers to toys and educational games.
          Beyond your daily grocery needs, you can shop on MayBee online for
          unique home furniture and interior decor pieces to beautify your homes
          and offices.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook cursor="pointer" />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Twitter cursor="pointer" />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Instagram cursor="pointer" />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest cursor="pointer" />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          6B, Oluwagbebe Street, Shasha-Akowonjo, Alimosho, Lagos
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +234 806 515 0024
        </ContactItem>
        <ContactItem>
          <MailOutline />
          mariamibraheem0@gmail.com
        </ContactItem>
        <Payment style={{ marginRight: "10px" }} src="./assets/images/21.png" />
      </Right>
    </Container>
  );
};

export default Footer;
