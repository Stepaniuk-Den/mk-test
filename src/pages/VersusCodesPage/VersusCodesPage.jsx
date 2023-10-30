import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  StyledBattle,
  StyledDigital,
  StyledDragonLeft,
  StyledDragonRight,
  StyledPlayerLeft,
  StyledPlayerRight,
  StyledVersusPage,
  StyledVersusWrapper,
  StyledVs,
} from "./VersusCodesPage.styled";

import {
  selectFirstPlayer,
  selectSecondPlayer,
  isSelected,
} from "../../redux/selectors.js";

import {
  deleteSelectedPlayers,
  setIsSelected,
} from "../../redux/reducer.js";

import battle from "../../assets/images/battle.gif";
import digital from "../../assets/images/digital_1.gif";
import dragonLeft from "../../assets/images/dragon_left.gif";
import dragonRight from "../../assets/images//dragon_right.gif";
import vs from "../../assets/images/vs.gif";

import startBattle from '../../assets/audio/mk3_start_battle.mp3'
import Bonus from "../../components/Bonus/Bonus";

const VersusCodesPage = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const useFirstPlayer = useSelector(selectFirstPlayer);
  const useSecondPlayer = useSelector(selectSecondPlayer);
  const useIsSelected = useSelector(isSelected)

  const start = new Audio(startBattle);

  setTimeout(() => {
    start.play()
  }, 1000);
  
  useEffect (()=> {
    
    const handleBackKeyPress =() => {
      
       dispatch(deleteSelectedPlayers())
       dispatch(setIsSelected(false))
      };
  
    if (useFirstPlayer || useIsSelected) {
      window.addEventListener("popstate", handleBackKeyPress);

      setTimeout(() => {
        navigate("/");
      }, 4000);
    }
    return () => {
      window.removeEventListener("popstate", handleBackKeyPress);
    };
  }, [useFirstPlayer, useIsSelected, dispatch, navigate]);

  return (
    <>
      <StyledVersusPage>
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
          <img src={useFirstPlayer.img_versus} alt={useFirstPlayer.name} />
        </StyledPlayerLeft>
        <StyledPlayerRight>
          <img src={useSecondPlayer.img_versus} alt={useSecondPlayer.name} />
        </StyledPlayerRight>
        <Bonus/>
      </StyledVersusWrapper>
      </StyledVersusPage>
    </>
  );
};

export default VersusCodesPage;
