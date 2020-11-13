import React from 'react';
import styled from 'styled-components';
import {ListItem} from './ListItem';
import {MenuBanner} from './Banner';
// import { useFetch } from '../Hooks/useFetch';

const MenuStyled = styled.main`
  background:#ccc;
  margin-top:80px;
  margin-left:380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

export const Menu = ({dbMenu}) => {
// const res = useFetch();
// const dbMenu = res.response;

  return(
    <MenuStyled>
  <MenuBanner/>  
 { dbMenu ? 
  <>
    <SectionMenu>
    <h2>Бургеры</h2>
    <ListItem itemList={dbMenu.burger}
    />  
    </SectionMenu> 
  
    <SectionMenu>
    <h2>Закуски / Напитки</h2>
    <ListItem itemList={dbMenu.other}
    />  
    </SectionMenu>
  </> : 
  <div>Loading...</div>
}  

  </MenuStyled>
  )
};