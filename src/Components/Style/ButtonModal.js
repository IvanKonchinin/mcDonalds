import styled from 'styled-components';

export const ButtonModal = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-color:transparent;
  background-color:#299B01;
  width:250px;
  height:65px;
  color:#fff;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  transition-property:color, background-color, border-color;
  transition-duration:0.3s;
  &:hover{
    color:#299B01;
    background-color:#fff;
    border-color:#299B01;
  }
  &:disabled{
    color:#bbb;
    background-color:#ccc;
    border-color:#aaa;
  }
`;