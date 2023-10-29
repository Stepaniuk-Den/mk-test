import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  StyledBattle,
  StyledDigital,
  StyledDragonLeft,
  StyledDragonRight,
  StyledPlayerLeft,
  StyledPlayerRight,
  StyledVersusWrapper,
  StyledVs,
} from "./VersusCodesPage.styled";

import {
  selectFirstPlayer,
  selectSecondPlayer,
} from "../../redux/selectors.js";

import battle from "../../assets/images/battle.gif";
import digital from "../../assets/images/digital_1.gif";
import dragonLeft from "../../assets/images/dragon_left.gif";
import dragonRight from "../../assets/images//dragon_right.gif";
import vs from "../../assets/images/vs.gif";

import startBattle from '../../assets/audio/mk3_start_battle.mp3'
import Bonus from "../../components/Bonus/Bonus";

const VersusCodesPage = () => {
  
  const navigate = useNavigate();

  const firstPlayer = useSelector(selectFirstPlayer);
  const secondPlayer = useSelector(selectSecondPlayer);

  const start = new Audio(startBattle);

 setTimeout(() => {
  start.play()
 }, 1000);

 setTimeout(() => {
  navigate("/");
}, 4000);

  useEffect (()=> {

  }, []);

  return (
    <>
      <StyledVersusWrapper>
        <StyledDragonLeft>
          <img src={dragonLeft} alt="dragonLeft" />
        </StyledDragonLeft>
        <StyledBattle>
          <img src={battle} alt="battle" />
        </StyledBattle>
        <StyledDigital>
          <img src={digital} alt="digital" />
        </StyledDigital>
        <StyledDragonRight>
          <img src={dragonRight} alt="dragonRight" />
        </StyledDragonRight>
        <StyledVs>
          <img src={vs} alt="vs" />
        </StyledVs>
        <StyledPlayerLeft>
          <img src={firstPlayer.img_versus} alt="" />
        </StyledPlayerLeft>
        <StyledPlayerRight>
          <img src={secondPlayer.img_versus} alt="" />
        </StyledPlayerRight>
        <Bonus/>
      </StyledVersusWrapper>
    </>
  );
};

export default VersusCodesPage;
