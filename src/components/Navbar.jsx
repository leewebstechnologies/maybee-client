import { Search, ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-top: -35px;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  margin-top: -35px;
  ${mobile({ marginLeft: "10px", marginTop: "-20px" })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 150px;
  margin-top: -56px;
  margin-left: 4px;
  cursor: pointer;
  ${mobile({ width: "80px", marginLeft: "4px", marginTop: "-30px" })}
`;

const Right = styled.div`
  display: flex;
  margin-top: -20px;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    flex: "2",
    justifyContent: "center",
    marginRight: "20px",
    marginTop: "-10px",
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: "16" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Image src="./assets/images/maybeelogo.png" />
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
