import React, {useContext} from 'react';
import styled from 'styled-components';
import {ButtonModal} from '../Style/ButtonModal';
import {OrderListItem} from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import{Context} from '../Functions/context';

const OrderStyled = styled.section`
  position:fixed;
  top:80px;left:0;
  display:flex;
  flex-direction:column;
  background:#fff;
  width:380px;
  height:calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0,0,0,0.25);
  padding:20px;
`;

export const OrderTitle = styled.h2`
  text-align:center;
  margin-bottom:30px;

`;

const OrderContent = styled.div`
  flex-grow:1;
`;

const OrderList = styled.ul``;

export const Total = styled.div`
  display:flex;
  margin:0 35px 30px;
  & span:first-child{
    flex-grow:1;
  }
`;

export const TotalPrice = styled.span`
  text-align:right;
  min-width:65px;
  margin-left:20px;
`;

const EmptyList = styled.p`
  text-align:center;
`;



export const Order = () => {

  const{ 
    auth: {authentification, logIn},
    orders: {orders, setOrders},
    orderConfirm: {setOpenOrderConfirm}
} = useContext(Context);

  const deleteItem = index => {
    const newOrders = orders.filter((item, i) => 
      index !== i);
    
    setOrders(newOrders);
  }

  const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

  const totalCounter = orders.reduce((result, order) => order.count + result, 0);

  return (

    <OrderStyled>
      <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
      <OrderContent>
        { orders.length ? 
        <OrderList>
          {orders.map((order, index) => <OrderListItem
              key={index} 
              order={order}
              deleteItem={deleteItem}
              index={index}
              
          />)}
        </OrderList> : 
        <EmptyList>Список заказов пуст</EmptyList>}
      </OrderContent>
      {orders.length ?
        <>
        <Total>
        <span>Итого</span>
        <span>{totalCounter}</span>
        <TotalPrice>{formatCurrency(total)}</TotalPrice>
        
      </Total>
      <ButtonModal onClick={() => {
        authentification ? setOpenOrderConfirm(true) : logIn()
      }}>Оформить
      </ButtonModal>
      </> : null
      }
      
      
    </OrderStyled>  
  )
}