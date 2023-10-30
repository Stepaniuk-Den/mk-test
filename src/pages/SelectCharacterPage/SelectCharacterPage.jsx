import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  StyledFighterWrapperLeft,
  StyledFighterWrapperRight,
  StyledSelectPage,
  StyledTable,
  StyledSelectWrapper,
} from "./SelectCharacterPage.styled";
import FighterCard from "../../components/FighterCard/FighterCard";
import fighters from "../../data/fighters";

import roundOne from "../../assets/audio/mk3_round1.mp3";
import fight from "../../assets/audio/mk3_fight.mp3";

import {
  setSelectedFirstFighter,
  setSelectFirstPlayer,
  setSelectedSecondFighter,
  setSelectSecondPlayer,
  setIsSelected,
  setError,
} from "../../redux/reducer.js";

import {
  selectedFirstFighter,
  selectedSecondFighter,
  selectFirstPlayer,
  selectSecondPlayer,
} from "../../redux/selectors.js";

const SelectCharacterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const useFirstFighter = useSelector(selectedFirstFighter);
  const useFirstPlayer = useSelector(selectFirstPlayer);
  const useSecondFighter = useSelector(selectedSecondFighter);
  const useSecondPlayer = useSelector(selectSecondPlayer);

  const audioRoundOne = new Audio(roundOne);
  const audioFight = new Audio(fight);

  useEffect(() => {
    const selectFirst = document.getElementById(useFirstFighter.id);
    selectFirst.classList.add("is-active-first");

    const handleChoiceFirstPlayer = (evt) => {
      selectFirst.classList.remove("is-active-first");

      const key = evt.key;

      const keyActions = {
        ArrowLeft: -1,
        ArrowRight: 1,
        ArrowDown: 5,
        ArrowUp: -5,
      };
      try {
        if (keyActions[key]) {
          const currentIndex = fighters.findIndex(
            (fighter) => fighter.id === useFirstFighter.id
          );
          const newIndex =
            (currentIndex + keyActions[key] + fighters.length) %
            fighters.length;
          dispatch(setSelectedFirstFighter(fighters[newIndex]));
        } else if (key === "Enter") {
          const currentIndex = fighters.findIndex(
            (fighter) => fighter.id === useFirstFighter.id
          );
          dispatch(setSelectFirstPlayer(fighters[currentIndex]));
        }
      } catch (error) {
        dispatch(setError(error.message));
      }
    };

    if (!useFirstPlayer) {
      window.addEventListener("keydown", handleChoiceFirstPlayer);
    }
    return () => {
      window.removeEventListener("keydown", handleChoiceFirstPlayer);
    };
  }, [useFirstFighter, useFirstPlayer, dispatch]);

  useEffect(() => {
    if (useFirstPlayer) {
      const selectSecond = document.getElementById(useSecondFighter.id);
      selectSecond.classList.add("is-active-second");

      const handleChoiceSecondPlayer = (evt) => {
        selectSecond.classList.remove("is-active-second");

        const key = evt.key;

        const keyActions = {
          ArrowLeft: -1,
          ArrowRight: 1,
          ArrowDown: 5,
          ArrowUp: -5,
        };
        try {
          if (keyActions[key]) {
            const currentIndex = fighters.findIndex(
              (fighter) => fighter.id === useSecondFighter.id
            );
            const newIndex =
              (currentIndex + keyActions[key] + fighters.length) %
              fighters.length;
            dispatch(setSelectedSecondFighter(fighters[newIndex]));
          } else if (key === "Enter") {
            const currentIndex = fighters.findIndex(
              (fighter) => fighter.id === useSecondFighter.id
            );
            dispatch(setSelectSecondPlayer(fighters[currentIndex]));
          }
        } catch (error) {
          dispatch(setError(error.message));
        }
      };

      if (!useSecondPlayer) {
        window.addEventListener("keydown", handleChoiceSecondPlayer);
      }
      return () => {
        window.removeEventListener("keydown", handleChoiceSecondPlayer);
        dispatch(setIsSelected(true));
      };
    }
  }, [useSecondFighter, useSecondPlayer, useFirstPlayer, dispatch]);

  if (useSecondPlayer) {
    setTimeout(() => {
      audioRoundOne.play();
    }, 500);
    setTimeout(() => {
      audioFight.play();
    }, 1700);
    setTimeout(() => {
      navigate("/versus");
    }, 2000);
  }
  return (
    <StyledSelectWrapper>
      <StyledSelectPage>
        <h1>Select your fighter</h1>
        <StyledTable>
          <StyledFighterWrapperLeft>
            <img
              src={fighters[useFirstFighter.id - 1].img_gif}
              alt={fighters.name}
            />
          </StyledFighterWrapperLeft>
          <FighterCard />
          <StyledFighterWrapperRight>
            {useFirstPlayer ? (
              <img
                src={fighters[useSecondFighter.id - 1].img_gif}
                alt={fighters.name}
              />
            ) : null}
          </StyledFighterWrapperRight>
        </StyledTable>
        <h2>Combat zone: Soul Chamber</h2>
      </StyledSelectPage>
    </StyledSelectWrapper>
  );
};

export default SelectCharacterPage;
