import React from "react";
import styled from "styled-components";
import Title from "../atoms/Title";
import Date from "../JS/FechaActual";

const FooterContainer = styled.footer`
  background-color: #231F20;
  color: white;
  border: 5px solid #f150b4;
  padding: 10px;
  display: flex;
  justify-content: space-between; 
  align-items: center; 
`;

const Footer = () => {
  const fecha = Date(); 

  return (
    <FooterContainer>
      <p>{fecha}</p>
      <Title title="Empleado" />
    </FooterContainer>
  );
}

export default Footer;
