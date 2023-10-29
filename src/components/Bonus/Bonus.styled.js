import styled from "styled-components";

export const StyledBonusWrapper = styled.div`
position: relative;
margin: auto auto 10px;
z-index: 1;
 width: 400px;
 height: fit-content;
 & img{
  display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`;

export const StyledList = styled.ul`
position: absolute;
left: 5px;
top: 5px;
column-gap: 5px;
display: flex;
flex-direction: row;
`;

export const StyledListItem = styled.li`
display: flex;
width: 60px;
& img{
  display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`;