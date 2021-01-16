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
   font-size:14px;
  }


`;

export const OverViewContainerText = styled.summary`
  overflow-y:hidden;
  color:#fff;
  font-size:16px;
  @media(max-width:1200px){
   overflow-y:auto;
   font-size:15px
  }
  @media(max-width:667px){
   font-size:13px;
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
  padding:5px 17px;
  justify-content:center;
  align-items:center;
  span{
    color:#fff;
    font-size:13px;
    @media(max-width:667px){
  font-size:12px;
}
  }
background:red;
border-radius:0 0 8px 0px;
color:#fff;
text-align:center;
font-weight:bold;
`;

export const ReleaseDate = styled.strong`
span{
    color:#fff;
    font-size:14px;
    @media(max-width:667px){
    font-size:12px;
    }

  }
  padding:15px;
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
    font-size:12px;
    }

  }
background:green;
padding:5px 9px;
border-radius:0 0 0 8px;
color:#fff;
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
top:-114px;

@media(max-width:640px){
  top:-100px;
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
