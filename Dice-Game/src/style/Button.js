import styled from "styled-components";

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

const ButtonOutline= styled(Button)``;

export default Button;