import styled, { keyframes, css } from 'styled-components';

export const BackDropImage = styled.img`
width:100%;
border-radius:8px;

`;

export const TitleSummaryContainer = styled.div`
position:absolute;
top:0;
z-index:3;
width:100%;
display:flex;
flex-direction:column;
background:rgba(0,0,0,.8);
padding:10px;
border-radius:8px;
max-height:27vh;
@media(max-width:400px){
  max-height:16vh;
}

`;
export const Title = styled.strong`
font-size:18px;
color:#fff;
text-align: center;
margin:5px;
@media(max-width:1200px){
   font-size:18px;
  }

  @media(max-width:667px){
   font-size:12px;
  }

  @media(max-width:400px){
  font-size:9px;
}
`;

export const OverViewContainerText = styled.summary`
  overflow-y:hidden;
  color:#fff;
  font-size:16px;
  @media(max-width:1200px){
   overflow-y:auto;
   font-size:15px;
  }
  @media(max-width:667px){
   font-size:10px;
  }
  @media(max-width:400px){
  font-size:9px;
}
`;

export const VoteContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
background:rgba(0,0,0,.9);

`;

export const VoteCotent = styled.div`
display:flex;
  flex-direction:column;
  padding:3px;
  justify-content:center;
  align-items:center;
  span{
    color:#fff;
    font-size:13px;
    @media(max-width:667px){
  font-size:7px;
}
  }
background:red;
padding:2px;
border-radius:0 0 0 8px;
color:#fff;
text-align:center;
font-weight:bold;
min-width:4vw;
max-width:7vw;
`;

export const ReleaseDate = styled.strong`
span{
    color:#fff;
    font-size:14px;
    @media(max-width:667px){
    font-size:9px;
    }
    @media(max-width:400px){
      font-size:8px;
}
  }
`;
export const AverageVote = styled.div`
display:flex;
  flex-direction:column;
  padding:3px;
  justify-content:center;
  align-items:center;
  span{
    color:#fff;
    font-size:13px;
    @media(max-width:667px){
    font-size:7px;
    }

    @media(max-width:400px){
      font-size:4px;
}
  }
background:green;
padding:5px;
border-radius:0 0 0 8px;
color:#fff;
min-width:3vw;
max-width:7vw;
text-align:center;
font-weight:bold;
`;

const fromSmallToBig = keyframes`
  from{
    opacity:0;
    visibility:hidden;
  }
  to{
    opacity:1;
    visibility:visible;
  }
`;

const fromBigToSmall = keyframes`
  from{
    opacity:1;
    visibility:visible;
  }
  to{
    opacity:0;
    visibility:hidden;
  }
`;
interface ContainerProps{
  visible:boolean;
}
export const Container = styled.div<ContainerProps>`
position:absolute;
box-shadow: -2px 1px 20px -12px #fff;
border-radius:8px;

background:rgba(0,0,0,.7);
z-index:5;
left: 50%;
top:-108px;
@media(max-width:400px){
  top:-47px;
}
@media(max-width:640px){
  top:-43px;
}
@media(min-width:1450px){
  width:15vw;
}
transform: translateX(-50%);


${(props) => (props.visible
    ? css`
  animation:${fromSmallToBig} .5s;
  visibility:visible;
  `
    : css`
  animation:${fromBigToSmall} 1s;
  visibility:hidden;
  `)}



`;
