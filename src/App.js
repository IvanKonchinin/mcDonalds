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
  useTitle(openItem.openItem);
  
  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order 
      {...orders} 
      {...openItem} 
      {...auth}
      firebaseDatabase={firebase.database}
      />
      <Menu {...openItem}/>
      { openItem.openItem && <ModalItem {...openItem} {...orders}/> }
      
    </>
  );
}

export default App;
