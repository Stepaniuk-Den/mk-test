import styled from "styled-components";

import bg_versus from "../../assets/images/background_versus.webp"


export const StyledVersusWrapper = styled.div`
display: flex;
flex-direction: column;
position: relative;
margin: auto;
width: 100%;
height: 100vh;
background-image: url(${bg_versus});
background-size: cover;
`;

export const StyledDragonLeft = styled.div`
position:absolute;
left: 0px;
top: 0px;
width: 240px;
height: 186px;
& img{
  display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`;
export const StyledDragonRight = styled.div`
position:absolute;
right: 0px;
top: 0px;
width: 240px;
height: 186px;
& img{
  display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`;

export const StyledBattle = styled.div`
margin: 0 auto;
margin-top: 50px;
 width: 600px;
 height: fit-content;
 & img{
  display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`;
export const StyledDigital = styled.div`
margin: 0 auto;
margin-top: 5px;
 width: 100px;
 height: fit-content;
 & img{
  display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`;
export const StyledVs = styled.div`
margin: 0 auto;
margin-top: 100px;
 width: 189px;
 height: 252px;
 z-index: 1;
 & img{
  display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`;

export const StyledPlayerLeft = styled.div`
position:absolute;
left: 0px;
bottom: 0px;
width: 594px;
height: 582px;
& img{
  display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`;
export const StyledPlayerRight = styled.div`
position:absolute;
right: 0px;
bottom: 0px;
width: 594px;
height: 582px;
& img{
  display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: rotateY(180deg);
}
`;

