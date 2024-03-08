import styled from "styled-components";
import Title from "./Title";
import cardDeploye from "../JS/cardDeployee";
import "./Card.css";

const CardsContainer = styled.div`
  display: row;
`;

const CardTitle = styled(Title)`
  text-align: center;
  margin-left: 10px;
  color: pink;
`;

function CardEmployee() {
  return (
    <CardsContainer>
      {cardDeploye.map((card, index) => (
        <div className="SingleCards" key={index} href={card.href}>
          <CardTitle title={card.title} />
        </div>
      ))}
    </CardsContainer>
  );
}

export default CardEmployee;
