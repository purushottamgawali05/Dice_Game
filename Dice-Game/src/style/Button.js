import styled from 'styled-components';

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background-color: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
   border: 1px solid black;
   cursor:pointer;
  transition: 0.4s background ease-in;

  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const ButtonOutline = styled (Button)`
background-color: white;
color: black;
border-color: 1px solid black;
    &:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;

export default Button;
