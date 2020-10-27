import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import {ListItem} from './ListItem';
import menuBannerImg from '../image/banner.png';
const MenuStyled = styled.main`
  background:#ccc;
  margin-top:80px;
  
`;

const MenuBanner = styled.div`
  height:210px;
  background: url(${menuBannerImg}) no-repeat;
  background-size: cover;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

export const Menu = () => (
  <MenuStyled>
  <MenuBanner/>  
  <SectionMenu>
    <h2>Бургеры</h2>
    <ListItem itemList={dbMenu.burger}/>  
  </SectionMenu> 
  
  <SectionMenu>
    <h2>Закуски / Напитки</h2>
    <ListItem itemList={dbMenu.other}/>  
  </SectionMenu>   

  </MenuStyled>
)