import styled from "styled-components";
import bg_select from "../../assets/images/background_select.jpg"

export const StyledSelectWrapper = styled.div`
height: 100vh;
width: 100vw;
background-image: url(${bg_select});
background-size: cover;
`;

export const StyledSelectPage = styled.div`
  margin: auto;
  width: 1024px;
  padding: 10px;


  & h1 {
    font-size: 50px;
    line-height: normal;
    width: fit-content;
    color: #ffffff;
    text-shadow: 2px 0px 2px black;
    padding: 20px;
    margin: 0 auto;
  };

  & h2 {
    font-size: 30px;
    line-height: normal;
    width: fit-content;
    color: rgb(184, 184, 184);
    text-shadow: 2px 0px 2px black;

    padding: 20px;
    margin: 0 auto;
  }
`;
export const StyledTable = styled.ul`
position: relative;
  margin: 0 auto;
  width: fit-content;
  width: 750px;
  height: 530px;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

export const StyledFighterWrapperLeft = styled.div`
  position: absolute;
  left: -145px;
  bottom: -10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 340px;
  width: 200px;
  border-color: black;
  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const StyledFighterWrapperRight = styled.div`
  position: absolute;
  right: -145px;
  bottom: -10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 340px;
  width: 200px;
  border-color: black;
  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: rotateY(180deg);
  }
`;