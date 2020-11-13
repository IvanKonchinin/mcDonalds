import React, {useContext} from 'react';
import styled from 'styled-components';
import {Overlay} from '../Modal/ModalItem';
import { OrderTitle, Total, TotalPrice } from './Order';
import {ButtonModal} from '../Style/ButtonModal';
import { projection } from '../Functions/secondaryFunction';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import{Context} from '../Functions/context';

const Modal = styled.div`
  background-color:white;
  width:600px;
  padding:30px;
`;

const Text = styled.h3`
  text-align:center;
  margin-bottom:30px;
`;

const rulesData = {
  itenName: ['name'],
  price:['price'],
  count:['count'],
  topping:['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name), arr => arr.length ? arr : 'no topping'],
  choice:['choice', item => item ? item : 'no choices'],
}

const sendOrder = (database, orders, authentification) => {
    
  const newOrder = orders.map(projection(rulesData));
  database.ref('orders').push().set({
    nameClient:authentification.displayName,
    email:authentification.email,
    order:newOrder
  });
  

}

export const OrderConfirm = () => {
  const{
    orders: {orders, setOrders},
    auth: {authentification},
    orderConfirm: {setOpenOrderConfirm},
    firebaseDatabase,
  } = useContext(Context);
  const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);
  const dataBase = firebaseDatabase();
  return (
    <Overlay>
      <Modal>
        <OrderTitle>{authentification.displayName}</OrderTitle>
        <Text>Осталось только подтвердить ваш заказ</Text>
        <Total>
          <span>Итого</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <ButtonModal
         onClick={() => {
            sendOrder(dataBase, orders, authentification);
            setOrders([]);
            setOpenOrderConfirm(false);
        }}>
         Подтвердить
        </ButtonModal>
      </Modal>
    </Overlay>
  )
}