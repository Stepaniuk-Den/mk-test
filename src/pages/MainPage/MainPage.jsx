import React, { useEffect } from "react";
import { StyledLink, StyledMainWrapper } from "./MainPage.styled";
import { useDispatch } from "react-redux";
import { deleteSelectedPlayers, setIsSelected } from "../../redux/reducer";
import { useNavigate } from "react-router-dom";

const MainPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {

    dispatch(deleteSelectedPlayers())
    dispatch(setIsSelected(false))

    const handlePressEnter = (evt) => {
      if (evt.key === "Enter") {
        navigate("/select");
      }
    }
      window.addEventListener("keydown", handlePressEnter);
    return () => {
      window.removeEventListener("keydown", handlePressEnter);
    };
  }, [dispatch, navigate])
  

  return <StyledMainWrapper>
    <StyledLink to="/select">Press Start</StyledLink>
  </StyledMainWrapper>;
};

export default MainPage;
