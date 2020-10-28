import React from 'react';
import styled from 'styled-components';
import {ModalBtn} from './ButtonModal';

const Overlay = styled.div`
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
  margin-bottom:20px;
`;

const ModalTitle = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  padding:0 40px;
`;



const ModalItemWrap = styled.div`
  display: flex;
  height: 350px;
  flex-direction: column;
  justify-content: space-between;
`;


export const ModalItem = ({openItem, setOpenItem}) => {


  function closeModal(e){
    if(e.target.id === 'overlay'){
      setOpenItem(null);
    }
  }

  if(!openItem) return null;

 return (
    <Overlay id="overlay" onClick={closeModal}>
    
    <Modal>
    <Banner img={openItem.img}/>
    <ModalItemWrap>
    <ModalTitle>
      <h3>{openItem.name}</h3>
      <h3>{openItem.price}&#8381;</h3>
    </ModalTitle>
    <ModalBtn>Добавить</ModalBtn> 
    </ModalItemWrap>
    </Modal>
  </Overlay>
 )
};