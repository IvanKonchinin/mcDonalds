import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {NavBar} from './Components/NavBar/NavBar';
import {Menu} from './Components/Menu/Menu';
import {GlobalStyle} from './Components/Style/GlobalStyle';
import {ModalItem} from './Components/Modal/ModalItem';
import {Order} from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { useDB } from './Components/Hooks/useDB';
import {OrderConfirm} from './Components/Order/OrderConfirm';
import {useOrderConfirm} from './Components/Hooks/useOrderConfirm';
import {Context} from './Components/Functions/context';

const firebaseConfig = {
  apiKey: "AIzaSyCvxzVXY200AkxkwNHlQlz7dKgCJYqbNy0",
  authDomain: "mcdonalds-167a9.firebaseapp.com",
  databaseURL: "https://mcdonalds-167a9.firebaseio.com",
  projectId: "mcdonalds-167a9",
  storageBucket: "mcdonalds-167a9.appspot.com",
  messagingSenderId: "369252685140",
  appId: "1:369252685140:web:1d0f0b55ddfe1e1db7a4c1"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const database = firebase.database();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);
  const dbMenu = useDB(database);

  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      firebaseDatabase:firebase.database
    }}>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu dbMenu={dbMenu}/>
      { openItem.openItem && <ModalItem/> }
      {orderConfirm.openOrderConfirm && 
        <OrderConfirm/>}
    </Context.Provider>
  );
}

export default App;
