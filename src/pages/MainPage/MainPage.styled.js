import styled from "styled-components";
import { Link } from "react-router-dom";

import bg_main from "../../assets/images/title.webp";


export const StyledMainPage = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  `;
export const StyledMainWrapper = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  height: 100vh;
  background-image: url(${bg_main});
  background-size: cover;
  background-position: center center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  width: fit-content;
  height: fit-content;

  margin: auto;
  margin-bottom: 24px;
  justify-content: center;
  align-items: center;
  align-self: start;
  flex-shrink: 0;
  border: none;

  background-color: transparent;
  color: rgb(184, 184, 184);
  transition: all 0.3s ease-in-out;
  font-size: 50px;
  font-style: italic;
  line-height: normal;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    scale: 1.3;
  }
  &:active {
    scale: 0.95;
  }
`;
