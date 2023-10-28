import styled from "styled-components";

export const StyledFighterCard = styled.div`
display: flex;
box-sizing: border-box;
width: 140px;
height: 170px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;

&.is-active-first{
  border: 10px solid rgb(134,220, 50);
}
&.is-active-second{
  border: 10px solid rgb(210,40, 10);
}
`;

export const StyledWrapper = styled.div`
  overflow: hidden;
  & img {
    display: block;
    width: 140px;
    height: 170px;
    object-fit: cover;
  }
`;