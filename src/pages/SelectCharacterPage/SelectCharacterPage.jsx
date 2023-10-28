import React, { useState, useEffect } from "react";
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

import roundOne from '../../assets/audio/mk3_round1.mp3'
import fight from '../../assets/audio/mk3_fight.mp3'

const SelectCharacterPage = () => {
  const navigate = useNavigate();

  const audioRoundOne = new Audio(roundOne);
  const audioFight = new Audio(fight);
  
  const [selectedFirstFighter, setSelectedFirstFighter] = useState(fighters[0]);
  const [selectedSecondFighter, setSelectedSecondFighter] = useState(
    fighters[4]
    );
    const [selectFirstPlayer, setSelectFirstPlayer] = useState(null);
    const [selectSecondPlayer, setSelectSecondPlayer] = useState(null);
    
    useEffect(() => {
    
    const selectFirst = document.getElementById(selectedFirstFighter.id);
    selectFirst.classList.add("is-active-first");

    const handleKeyPress = (evt) => {
      selectFirst.classList.remove("is-active-first");

      if (evt.key === "ArrowLeft") {
        const currentIndex = fighters.findIndex(
          (fighter) => fighter.id === selectedFirstFighter.id
        );
        const newIndex = (currentIndex - 1 + fighters.length) % fighters.length;
        setSelectedFirstFighter(fighters[newIndex]);
      } else if (evt.key === "ArrowRight") {
        const currentIndex = fighters.findIndex(
          (fighter) => fighter.id === selectedFirstFighter.id
        );
        const newIndex = (currentIndex + 1) % fighters.length;
        setSelectedFirstFighter(fighters[newIndex]);
      } else if (evt.key === "ArrowDown") {
        const currentIndex = fighters.findIndex(
          (fighter) => fighter.id === selectedFirstFighter.id
        );
        const newIndex = (currentIndex + 5) % fighters.length;
        setSelectedFirstFighter(fighters[newIndex]);
      } else if (evt.key === "ArrowUp") {
        const currentIndex = fighters.findIndex(
          (fighter) => fighter.id === selectedFirstFighter.id
        );
        const newIndex = (currentIndex - 5 + fighters.length) % fighters.length;
        setSelectedFirstFighter(fighters[newIndex]);
      } else if (evt.key === "Enter") {
        const currentIndex = fighters.findIndex(
          (fighter) => fighter.id === selectedFirstFighter.id
        );
        setSelectFirstPlayer(fighters[currentIndex]);
      }
    };

    if (!selectFirstPlayer) {
      window.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [selectedFirstFighter, selectFirstPlayer]);

  if (selectSecondPlayer) {
    setTimeout(() => {
      audioRoundOne.play()
    }, 500);
    setTimeout(() => {
      audioFight.play()
    }, 1700);
    setTimeout(() => {
      navigate("/versus");
    }, 2000);
  }

  useEffect(() => {
    if (selectFirstPlayer) {
      const selectSecond = document.getElementById(selectedSecondFighter.id);
      selectSecond.classList.add("is-active-second");

      const handleKeyPress = (evt) => {
        selectSecond.classList.remove("is-active-second");

        if (evt.key === "ArrowLeft") {
          const currentIndex = fighters.findIndex(
            (fighter) => fighter.id === selectedSecondFighter.id
          );
          const newIndex =
            (currentIndex - 1 + fighters.length) % fighters.length;
          setSelectedSecondFighter(fighters[newIndex]);
        } else if (evt.key === "ArrowRight") {
          const currentIndex = fighters.findIndex(
            (fighter) => fighter.id === selectedSecondFighter.id
          );
          const newIndex = (currentIndex + 1) % fighters.length;
          setSelectedSecondFighter(fighters[newIndex]);
        } else if (evt.key === "ArrowDown") {
          const currentIndex = fighters.findIndex(
            (fighter) => fighter.id === selectedSecondFighter.id
          );
          const newIndex = (currentIndex + 5) % fighters.length;
          setSelectedSecondFighter(fighters[newIndex]);
        } else if (evt.key === "ArrowUp") {
          const currentIndex = fighters.findIndex(
            (fighter) => fighter.id === selectedSecondFighter.id
          );
          const newIndex =
            (currentIndex - 5 + fighters.length) % fighters.length;
          setSelectedSecondFighter(fighters[newIndex]);
        } else if (evt.key === "Enter") {
          const currentIndex = fighters.findIndex(
            (fighter) => fighter.id === selectedSecondFighter.id
          );
          setSelectSecondPlayer(fighters[currentIndex]);
        }
      };

      if (!selectSecondPlayer) {
        window.addEventListener("keydown", handleKeyPress);
      }

      return () => {
        window.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [selectedSecondFighter, selectSecondPlayer, selectFirstPlayer, navigate]);

  return (
    <StyledSelectWrapper>
      <StyledSelectPage>
        <h1>Select your fighter</h1>
        <StyledTable>
          <StyledFighterWrapperLeft>
            <img
              src={fighters[selectedFirstFighter.id - 1].img_gif}
              alt={fighters.name}
            />
          </StyledFighterWrapperLeft>
          <FighterCard selectedId={selectedFirstFighter} />
          <StyledFighterWrapperRight>
            {selectFirstPlayer ? (
              <img
                src={fighters[selectedSecondFighter.id - 1].img_gif}
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
