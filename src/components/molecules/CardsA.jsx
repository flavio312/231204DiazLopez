import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../atoms/Title";
import cardData from "../JS/cardData";
import "./SingleCards.css"

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CardTitle = styled(Title)`
  text-align: center;
  margin-left: 10px;
  color: pink;
`;

function CardsA() {
  return (
    <CardsContainer>
      {cardData.map((card, index) => (
        <Link className="SingleCards" key={index} to={card.href}>
          <CardTitle title={card.title} />
        </Link>
      ))}
    </CardsContainer>
  );
}

export default CardsA;
