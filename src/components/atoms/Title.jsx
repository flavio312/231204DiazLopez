import React from "react";
import styled from "styled-components";

const StyleTitle = styled.h1`
  color: pink; 
  font-size: 24px;
  font-weight: bold;

`;

const Title = ({ title }) => {
  return <StyleTitle>{title}</StyleTitle>;
};

export default Title;
