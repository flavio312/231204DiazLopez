import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Title from "../atoms/Title";
import cardDataB from "../JS/cardDataB";
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

function CardsB() {
  return (
    <CardsContainer>
      {cardDataB.map((card, index) => (
        <Link className="SingleCards" key={index} to={card.href}>
          <CardTitle title={card.title} />
        </Link>
      ))}
    </CardsContainer>
  );
}

export default CardsB;
