import React, {useContext} from 'react';
import styled from 'styled-components';
import {ButtonModal} from '../Style/ButtonModal';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';
import{Context} from '../Functions/context';


export const Overlay = styled.div`
  position:fixed;
  display:flex;
  justify-content:center;
  align-items:center;
  top:0;left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.5);
  z-index:20;
`;

const Modal = styled.div`
  background:#fff;
  width:600px;
  height:600px;
`;

const Banner = styled.div`
  width:100%;
  height:200px;
  background:url(${({img}) => img});
  background-size:cover;
  background-position:center;
`;

const ModalTitle = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  
`;



const ModalItemWrap = styled.div`
  display: flex;
  height: calc(100% - 200px);
  flex-direction: column;
  justify-content: space-between;
  padding:30px 40px;
`;


export const ModalItem = () => {

  const{
    orders: {orders, setOrders},
    openItem: {openItem, setOpenItem}
  } = useContext(Context);

  const counter = useCount(openItem.count);
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);
  const isEdit = openItem.index > -1;

  const closeModal = (e) => {
    if(e.target.id === 'overlay'){
      setOpenItem(null);
    }
  }

  const order = {
    ...openItem,
    count: counter.count,
    topping:toppings.toppings,
    choice: choices.choice,
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    setOpenItem(null);
  }

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  }

  const TotalPriceItem = styled.div`
    display: flex;
    justify-content:space-between;
  `;

 return (
    <Overlay id="overlay" onClick={closeModal}>
    
    <Modal>
    <Banner img={openItem.img}/>
    <ModalItemWrap>
    <ModalTitle>
      <h3>{openItem.name}</h3>
      <h3>{openItem.price}&#8381;</h3>
    </ModalTitle>
    <CountItem {...counter}/>
    {openItem.toppings && <Toppings {...toppings}/>}
    {openItem.choices && <Choices {...choices} openItem={openItem}/>}
    <TotalPriceItem>
      <span>Цена:</span>
      <span>{formatCurrency(totalPriceItems(order))}</span>
    </TotalPriceItem>
    <ButtonModal 
      onClick={isEdit ? editOrder : addToOrder}
      disabled={order.choices && !order.choice}
      >{isEdit ? 'Редактировать' : 'Добавить'}
    </ButtonModal> 
    </ModalItemWrap>
    </Modal>
  </Overlay>
 )
};