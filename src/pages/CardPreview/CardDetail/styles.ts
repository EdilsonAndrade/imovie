import styled, { keyframes, css } from 'styled-components';

export const BackDropImage = styled.img`
width:100%;
border-radius:8px;

`;

export const BottomContainer = styled.div`
position:absolute;
top:0;
z-index:3;
width:100%;
display:flex;
flex-direction:column;
background:rgba(0,0,0,.8);
padding:10px;
max-height:420px;
border-radius:8px;

`;
export const Title = styled.strong`
font-size:14px;

color:#fff;
text-align: center;
`;

export const OverViewContainer = styled.summary`

  color:#fff;
`;

export const VoteContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
background:rgba(0,0,0,.9);

`;

export const VoteCotent = styled.div`
background:red;
padding:5px;
border-radius:0 0 0 8px;
color:#fff;
width:40px;
text-align:center;
font-weight:bold;
`;

export const ReleaseDate = styled.strong`
font-size:14px;
color:#fff;
`;
export const AverageVote = styled.div`
background:green;
padding:5px;
border-radius:0 0 0 8px;
color:#fff;
width:40px;
text-align:center;
font-weight:bold;
`;

const fromSmallToBig = keyframes`
  from{
    opacity:0;
    width:0px;
    height:0px;
    top:0;
  }
  to{
    opacity:1;
    width:18vmax;
    height:10vmax;
    top:-108px;
  }
`;

const fromBigToSmall = keyframes`
  from{
    opacity:1;
    width:18vmax;
    height:10vmax;
    top:-108px;
  }
  to{
    opacity:0;
    width:0px;
    height:0px;
    top:0;

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
z-index:2;
left: 50%;
transform: translateX(-50%);


${(props) => (props.visible
    ? css`
  animation:${fromSmallToBig} .5s;
  width:18vmax;
  height:10vmax;
  top:-108px;
  `
    : css`
  animation:${fromBigToSmall} .5s;
  opacity:0;
  width:0px;
  height:0px;
  top:0;
  `)}
`;
