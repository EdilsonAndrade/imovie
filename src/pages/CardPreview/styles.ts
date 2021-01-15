import styled from 'styled-components';

export const MainContainer = styled.div`
  position:relative;
  background:none;
  border:none;
  cursor:pointer;
  margin-bottom:48px;
  background:#000;
`;

export const PreviewContainer = styled.div`
position:relative;
box-shadow: -2px 1px 20px -12px #fff;
border-radius:8px;

`;

export const BackDropImage = styled.img`
width:100%;
border-radius:8px;

`;
export const SmokeTitle = styled.div`
position:absolute;
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
