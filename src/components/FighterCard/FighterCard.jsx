import React from "react";
import { StyledFighterCard, StyledWrapper } from "./FighterCard.styled";
import fighters from "../../data/fighters";

const FighterCard = ({selectedId}) => {
  // console.log(selectedId.name);

  return (
    <>
      {fighters.map((fighter) => {
        return (
          <StyledFighterCard key={fighter.id} id={fighter.id}>
            <StyledWrapper>
              <img src={fighter.img_select} alt={fighter.name} />
            </StyledWrapper>
          </StyledFighterCard>
        );
      })}
    </>
  );
};

export default FighterCard;
