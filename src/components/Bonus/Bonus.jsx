import React, { useEffect, useState } from "react";
import { StyledBonusWrapper, StyledList, StyledListItem } from "./Bonus.styled";

import bonusWrapper from "../../assets/images/bonus/bonus_card_wrapper.gif";
import bonusDragon from "../../assets/images/bonus/bonus_dragon.gif";
import bonusInYan from "../../assets/images/bonus/bonus_inyan.gif";
import bonusLightning from "../../assets/images/bonus/bonus_lightning.gif";
import bonusMk from "../../assets/images/bonus/bonus_mk.gif";
import bonusRaiden from "../../assets/images/bonus/bonus_raiden.gif";
import bonusShao from "../../assets/images/bonus/bonus_shao.gif";
import bonusThree from "../../assets/images/bonus/bonus_three.gif";

const Bonus = () => {
  const [pressedQ, setPressedQ] = useState(false);
  const [pressedW, setPressedW] = useState(false);
  const [pressedE, setPressedE] = useState(false);
  const [pressedR, setPressedR] = useState(false);
  const [pressedT, setPressedT] = useState(false);
  const [pressedY, setPressedY] = useState(false);

  const pressedKeys =
    !pressedQ || !pressedW || !pressedE || !pressedR || !pressedT || !pressedY;

  useEffect(() => {
    const handleKeyPressQwerty = (evt) => {
      const key = evt.key.toLowerCase();

      const keyPressed = {
        q: "Q",
        w: "W",
        e: "E",
        r: "R",
        t: "T",
        y: "Y",
      };

      switch (keyPressed[key]) {
        case "Q":
          setPressedQ(true);
          break;
        case "W":
          setPressedW(true);
          break;
        case "E":
          setPressedE(true);
          break;
        case "R":
          setPressedR(true);
          break;
        case "T":
          setPressedT(true);
          break;
        case "Y":
          setPressedY(true);
          break;
        default:
          break;
      }
    };
    if (pressedKeys) {
      window.addEventListener("keydown", handleKeyPressQwerty);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPressQwerty);
    };
  }, [pressedKeys]);

  return (
    <>
      <StyledBonusWrapper>
        <img src={bonusWrapper} alt="bonus_wrapper" />
        <StyledList>
          <StyledListItem>
            {pressedQ ? (
              <img src={bonusInYan} alt="bonus_inyan" />
            ) : (
              <img src={bonusDragon} alt="bonus_dragon" />
            )}
          </StyledListItem>
          <StyledListItem>
            {pressedW ? (
              <img src={bonusLightning} alt="bonus_lightning" />
            ) : (
              <img src={bonusDragon} alt="bonus_dragon" />
            )}
          </StyledListItem>
          <StyledListItem>
            {pressedE ? (
              <img src={bonusMk} alt="bonus_mk" />
            ) : (
              <img src={bonusDragon} alt="bonus_dragon" />
            )}
          </StyledListItem>
          <StyledListItem>
            {pressedR ? (
              <img src={bonusRaiden} alt="bonus_raiden" />
            ) : (
              <img src={bonusDragon} alt="bonus_dragon" />
            )}
          </StyledListItem>
          <StyledListItem>
            {pressedT ? (
              <img src={bonusShao} alt="bonus_shao" />
            ) : (
              <img src={bonusDragon} alt="bonus_dragon" />
            )}
          </StyledListItem>
          <StyledListItem>
            {pressedY ? (
              <img src={bonusThree} alt="bonus_three" />
            ) : (
              <img src={bonusDragon} alt="bonus_dragon" />
            )}
          </StyledListItem>
        </StyledList>
      </StyledBonusWrapper>
    </>
  );
};

export default Bonus;
