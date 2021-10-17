import React from "react";
import styled from "styled-components";
import { BsGeoAlt } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { Button, Logo } from "../../styles/globalStyles";
import { Banner } from './Banner'


const Nav = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 24px 40px;

position: static;
width: 1366px;
height: 88px;
left: 0px;
top: 0px;
`;
const DivLoc = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

position: static;
width: 333px;
height: 24px;
left: 0px;
top: 8px;
`;
const LocAndCart = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

position: static;
width: 454px;
height: 40px;
left: 872px;
top: 24px;
`;
const LocText = styled.p`
font-size: 16px;
line-height: 24px;
color: #332927;
font-weight: bold;
font-size: 16px;
line-height: 24px;
margin-top: 12px;
margin-left: 5px;
`;
const Line = styled.div`
position: static;
width: 40px;
height: 0px;
left: 349px;
top: 0px;

/* Boulder */

border: 1px solid #b8b4b4;
transform: rotate(90deg);
`;

export const Navbar = () => {


  return (
    <>
      <Nav>
        <Logo>Tiendita</Logo>
        <LocAndCart>
          <DivLoc>
            <BsGeoAlt />
            <LocText>México</LocText>
          </DivLoc>
          <Line />
          <Button small>
            <BsCart2 />
          </Button>
        </LocAndCart>
      </Nav>
      <Banner />
    </>
  );
};
