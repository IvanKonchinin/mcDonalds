import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import loginImg from '../image/user.svg';


const NavBarStyled = styled.header`
  position:fixed;
  top:0;left:0;
  z-index:999;
  height:80px;
  width:100vw;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:15px;
  background-color:#299B01;
  color:white;
`;

const Logo = styled.div`
  display:flex;
  align-items:center;
`;

const H1 = styled.h1`
  font-size:24px;
  margin-left:15px;
`;

const ImgLogo = styled.img`
  width:50px;
`;

const LoginBtn = styled.button`
  color:white;
  background:transparent url(${loginImg});
  background-repeat:no-repeat;
  background-position:top;
  background-size: 50%;
  border:none;
  height:100%; 
  display:flex;
  align-items:flex-end;
  cursor:pointer;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo"/>
      <H1>McDonalds</H1>
    </Logo>
    <LoginBtn type="button">ВОЙТИ</LoginBtn>
  </NavBarStyled>

);