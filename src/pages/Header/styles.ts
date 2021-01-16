import styled from 'styled-components';

export const Container = styled.header`
padding:0 50px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:flex-start;
position: fixed;
top: 0;
z-index: 4;
width:100%;
box-shadow:inset 0px 18px 107px 4px rgb(151 151 151 / 33%);
border-radius:0 0 18px 18px;
`;
export const MenuContent = styled.nav`
flex:1;

align-items:flex-start;
ul{
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  li{
    padding:2px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;

    @media(max-width:767px){
    flex-direction:column;

  }

  }
}
`;
