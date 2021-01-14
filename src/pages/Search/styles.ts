import styled, { css, keyframes } from 'styled-components';

interface IContainer{
  searchClicked?:boolean;
}

const size = keyframes`
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

const hide = keyframes`
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
 width:1px;
  padding:5px;
  display:flex;
  flex-direction:row;
  align-items:center;
  width:0px;
  border:0;
  ${(props) => props.searchClicked && css`
    animation: ${size} 1s;
    width:220px;
    border:1px solid #7159c1;
    border-radius:8px;
  `}
  ${(props) => (props.searchClicked !== undefined && !props.searchClicked) && css`
    animation: ${hide} 1s;
    width:0px;
    border:0;
  `}


`;

export const Content = styled.div`

`;

export const InputText = styled.input`
background:transparent;
color:#7159c1;
border:0px;
margin-left:5px;
`;
