import styled, { css, keyframes } from 'styled-components';

interface IContainer{
  searchClicked?:boolean;
}

const showView = keyframes`
  from{
    border:none;
    width:1px;
  }
  to{
    width:220px;
    border:1px solid #7159c1;
    border-radius:8px;
  }
`;

const hideView = keyframes`
  from{
    width:220px;
    border:1px solid #7159c1;
    border-radius:8px;

  }
  to{
    border:none;
    width:1px;
  }
`;

export const Container = styled.div<IContainer>`
  padding:5px;
  display:flex;
  flex-direction:row;
  align-items:center;
  width:0px;
  border:0;
  ${(props) => props.searchClicked && css`
    animation: ${showView} .5s;
    width:220px;
    border:1px solid #7159c1;
    border-radius:8px;
  `}
  ${(props) => (props.searchClicked !== undefined && !props.searchClicked) && css`
    animation: ${hideView} .5s;
    width:0px;
    border:0;
  `}
  button{
      background:none;
      border:none;
    }


`;

export const Content = styled.div`

`;

export const InputText = styled.input<IContainer>`
background:transparent;
color:#7159c1;
border:0px;
visibility:hidden;
width:72%;
${(props) => (props.searchClicked ? css`visibility:visible` : css`visibility:hidden`)}
`;
