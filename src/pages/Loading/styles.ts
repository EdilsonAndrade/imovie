import styled, { keyframes } from 'styled-components';

const spin = keyframes`
from{transform: rotate(0deg); }
to{transform: rotate(360deg); }
`;

export const Container = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #7159c1;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;

`;
