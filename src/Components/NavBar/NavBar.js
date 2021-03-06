import React, {useContext} from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import loginImg from '../../image/user.svg';
import{Context} from '../Functions/context';

const NavBarStyled = styled.header`
  position:fixed;
  top:0;left:0;
  z-index:999;
  height:80px;
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0 15px;
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

const ImgLogin = styled.img`
  
`;

const LoginWrap = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  height: 75%;
  text-align:center;
`;

const LoginBtn = styled.button`
  color:white;
  background:transparent;
  background-repeat:no-repeat;
  background-position:top;
  background-size: 50%;
  border:none;
  height:100%; 
  display:flex;
`;

const User = styled.div`
  display:flex;
  align-items:center;
  text-align:center;
`;
const LogOut = styled.span`
  font-size:20px;
  font-weight:700px;
  cursor: pointer;
  margin-right:30px;
`;

const Figure = styled.figure`
  margin: 0 30px;
`;

export const NavBar = () => {

  const {auth} = useContext(Context);
  const {authentification, logIn, logOut} = auth;
  
  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImg} alt="logo"/>
        <H1>McDonalds</H1>
      </Logo>
      {authentification ? 
      <User>
        <Figure>
          <ImgLogin src={loginImg} alt={authentification.displayName}/>
          <figcaption>{authentification.displayName}</figcaption>
        </Figure>
        <LogOut title="Выйти" onClick={logOut}>X</LogOut>
      </User> :
      <LoginWrap onClick={logIn}>
        <Figure>
          <ImgLogin src={loginImg} alt="Войти"/>
          <LoginBtn>Войти</LoginBtn>
        </Figure>
        
      </LoginWrap>}
    </NavBarStyled>
  
  );
}