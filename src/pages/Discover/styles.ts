import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  padding:0 120px;
  margin-top:120px;
  justify-content:center;
  align-items:center;
  display:flex;
`;
export const CardContent = styled.div``;
export const GridContainer = styled.div`

display:grid;
grid-template-columns: repeat(5,1fr);
grid-gap:10px;
@media(max-width:940px){
  grid-template-columns: repeat(4,1fr);
}
@media(max-width:525px){
  grid-template-columns: repeat(1,1fr);
}

`;
