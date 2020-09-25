import styled, { keyframes } from 'styled-components';

const floating = keyframes`
  0% { transform: translateY(20px); }
  100% { transform: translateY(-20px); }
`;

const moving = keyframes`
  0% { perspective-origin: 50% 50%; }
  100% { perspective-origin: -200% 50%; }
`;

export const View = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 100%;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
  perspective: 1000px;
  perspective-origin: 50% 50%;
  animation-name: ${moving};
  animation-duration: 60s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export const Sky = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: skyblue;
`;

export const Cloud1 = styled.img`
  position: absolute;
  top: -50px;
  left: -75px;
  width: 300px;
  height: auto;
  animation-name: ${floating};
  animation-duration: 10s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

export const Cloud2 = styled.img`
  position: absolute;
  top: -150px;
  right: -50px;
  width: 500px;
  height: auto;
  animation-name: ${floating};
  animation-duration: 10s;
  animation-direction: alternate-reverse;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

export const City = styled.div`
  position: relative;
  top: 500px;
  left: 0;
  width: 100%;
  height: 100vh;
`;

export const Building = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Building1 = styled(Building)`
  transform: translateX(-200px) translateZ(-2000px) scale(4);
`;

export const Building2 = styled(Building)`
  transform: translateX(700px) translateZ(-1500px) scale(3.5);
`;

export const Building3 = styled(Building)`
  transform: translateX(1200px) translateZ(-1200px) scale(2);
`;

export const Building4 = styled(Building)`
  transform: translateX(1700px) translateZ(-1000px) scale(1.5);
`;
