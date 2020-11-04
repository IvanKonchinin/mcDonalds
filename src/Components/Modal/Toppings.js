import React from 'react';
import styled from 'styled-components';


const ToppingsWrap = styled.div`
  max-width:500px;
  margin: 0 auto;
  column-count:2;
  column-gap:15px;
`;

const ToppingsLabel = styled.label`
  cursor: pointer;
  display:block;
`;

const ToppingsCheckbox = styled.input`
  cursor:pointer;
  margin-right:5px;
`;

export function Toppings({toppings, checkToppings}){
  return(
    <>
    <h3>Добавки</h3>
    <ToppingsWrap>
      {toppings.map((item, i) => (
          <ToppingsLabel key={i}>
           <ToppingsCheckbox type="checkbox" checked={item.checked} onChange={() => checkToppings(i)}/>
             {item.name}
         </ToppingsLabel>
      ))}
   
    </ToppingsWrap>
    </>
  )
}