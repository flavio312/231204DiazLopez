import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import Title from "../atoms/Title";

const HeaderContainer = styled.header`
  background-color: #231F20;
  padding: 10px;
  display: flex;
  align-items: center;
  border: 5px solid #ED6FBA;
  border-radius: 8px;
`;

const Logo = styled.img`
  width: 200px;
  margin-right: 10px;
`;

const RightAlignedContent = styled.div`
  margin-left: auto;
`;
function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo src="/Diaz.jpg" alt="Logo"></Logo>
        <Title title="Novedades Diaz"/>
        <RightAlignedContent>
          <Button caption="Salir" />
        </RightAlignedContent>
      </HeaderContainer>
    </>
  );
}
export default Header;