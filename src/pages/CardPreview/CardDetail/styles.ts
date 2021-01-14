import styled, { keyframes, css } from 'styled-components';

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
    top:-145px;
  }
`;

const fromBigToSmall = keyframes`
  from{
    opacity:1;
    width:18vmax;
    height:10vmax;
    top:-145px;
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
  top:-145px;
  `
    : css`
  animation:${fromBigToSmall} .5s;
  opacity:0;
  width:0px;
  height:0px;
  top:0;
  `)}
`;

export const BackDropImage = styled.img`
width:100%;
border-radius:8px;

`;
export const SmokeTitle = styled.div`
z-index:1;
bottom:0;
left: 50%;
transform: translateX(-50%);
width:100%;
justify-content:center;
align-items:center;
display:flex;
background:rgba(0,0,0,.5);
padding:10px;

`;
export const Title = styled.strong`
font-size:14px;

color:#fff;
text-align: center;
`;
