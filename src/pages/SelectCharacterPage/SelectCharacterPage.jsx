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

  const firstFighter = useSelector(selectedFirstFighter);
  const firstPlayer = useSelector(selectFirstPlayer);
  const secondFighter = useSelector(selectedSecondFighter);
  const secondPlayer = useSelector(selectSecondPlayer);

  const audioRoundOne = new Audio(roundOne);
  const audioFight = new Audio(fight);

  useEffect(() => {
    const selectFirst = document.getElementById(firstFighter.id);
    selectFirst.classList.add("is-active-first");

    const handleKeyPress = (evt) => {
      selectFirst.classList.remove("is-active-first");

      if (evt.key === "ArrowLeft") {
        const currentIndex = fighters.findIndex(
          (fighter) => fighter.id === firstFighter.id
        );
        const newIndex = (currentIndex - 1 + fighters.length) % fighters.length;
        dispatch(setSelectedFirstFighter(fighters[newIndex]));
      } else if (evt.key === "ArrowRight") {
        const currentIndex = fighters.findIndex(
          (fighter) => fighter.id === firstFighter.id
        );
        const newIndex = (currentIndex + 1) % fighters.length;
        dispatch(setSelectedFirstFighter(fighters[newIndex]));
      } else if (evt.key === "ArrowDown") {
        const currentIndex = fighters.findIndex(
          (fighter) => fighter.id === firstFighter.id
        );
        const newIndex = (currentIndex + 5) % fighters.length;
        dispatch(setSelectedFirstFighter(fighters[newIndex]));
      } else if (evt.key === "ArrowUp") {
        const currentIndex = fighters.findIndex(
          (fighter) => fighter.id === firstFighter.id
        );
        const newIndex = (currentIndex - 5 + fighters.length) % fighters.length;
        dispatch(setSelectedFirstFighter(fighters[newIndex]));
      } else if (evt.key === "Enter") {
        const currentIndex = fighters.findIndex(
          (fighter) => fighter.id === firstFighter.id
        );
        dispatch(setSelectFirstPlayer(fighters[currentIndex]));
      }
    };

    if (!firstPlayer) {
      window.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [firstFighter, firstPlayer, dispatch]);

  if (secondPlayer) {
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

  useEffect(() => {
    if (firstPlayer) {
      const selectSecond = document.getElementById(secondFighter.id);
      selectSecond.classList.add("is-active-second");

      const handleKeyPress = (evt) => {
        selectSecond.classList.remove("is-active-second");

        if (evt.key === "ArrowLeft") {
          const currentIndex = fighters.findIndex(
            (fighter) => fighter.id === secondFighter.id
          );
          const newIndex =
            (currentIndex - 1 + fighters.length) % fighters.length;
          dispatch(setSelectedSecondFighter(fighters[newIndex]));
        } else if (evt.key === "ArrowRight") {
          const currentIndex = fighters.findIndex(
            (fighter) => fighter.id === secondFighter.id
          );
          const newIndex = (currentIndex + 1) % fighters.length;
          dispatch(setSelectedSecondFighter(fighters[newIndex]));
        } else if (evt.key === "ArrowDown") {
          const currentIndex = fighters.findIndex(
            (fighter) => fighter.id === secondFighter.id
          );
          const newIndex = (currentIndex + 5) % fighters.length;
          dispatch(setSelectedSecondFighter(fighters[newIndex]));
        } else if (evt.key === "ArrowUp") {
          const currentIndex = fighters.findIndex(
            (fighter) => fighter.id === secondFighter.id
          );
          const newIndex =
            (currentIndex - 5 + fighters.length) % fighters.length;
          dispatch(setSelectedSecondFighter(fighters[newIndex]));
        } else if (evt.key === "Enter") {
          const currentIndex = fighters.findIndex(
            (fighter) => fighter.id === secondFighter.id
          );
          dispatch(setSelectSecondPlayer(fighters[currentIndex]));
        }
      };

      if (!secondPlayer) {
        window.addEventListener("keydown", handleKeyPress);
      }

      return () => {
        window.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [secondFighter, secondPlayer, firstPlayer, dispatch]);

  return (
    <StyledSelectWrapper>
      <StyledSelectPage>
        <h1>Select your fighter</h1>
        <StyledTable>
          <StyledFighterWrapperLeft>
            <img
              src={fighters[firstFighter.id - 1].img_gif}
              alt={fighters.name}
            />
          </StyledFighterWrapperLeft>
          <FighterCard selectedId={firstFighter} />
          <StyledFighterWrapperRight>
            {firstPlayer ? (
              <img
                src={fighters[secondFighter.id - 1].img_gif}
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
