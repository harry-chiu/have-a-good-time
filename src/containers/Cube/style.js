import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const Camera = styled.div`
  width: 500px;
  height: 500px;
  border: 1px dashed #000000;
  perspective: ${props => props.perspective || 0}px;
  perspective-origin: ${props =>
    `${props.perspectiveOriginX}% ${props.perspectiveOriginY}%` || '50% 50%'};
`;

export const Space = styled.div`
  width: 100%;
  height: 100%;
`;

export const Box = styled.div`
  width: 200px;
  height: 200px;
  transform: translateX(150px) translateY(150px)
    translateZ(${props => props.translateZ || 0}px)
    rotateX(${props => props.rotateX || 0}deg)
    rotateY(${props => props.rotateY || 0}deg);
  transform-style: preserve-3d;
`;

const Side = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border: 1px solid #000000;
  background: skyblue;
  font-size: 48px;
  transform-origin: center;
`;

export const Front = styled(Side)`
  transform: translateZ(100px);
`;

export const Back = styled(Side)`
  transform: translateZ(-100px) rotateX(180deg);
`;

export const Left = styled(Side)`
  transform: translateX(-100px) rotateY(-90deg);
`;

export const Right = styled(Side)`
  transform: translateX(100px) rotateY(90deg);
`;

export const Top = styled(Side)`
  transform: translateY(100px) rotateX(90deg);
`;

export const Bottom = styled(Side)`
  transform: translateY(-100px) rotateX(90deg);
`;

export const Title = styled.h1`
  font-size: 16px;
  margin: 0;
  padding: 16px 0;
`;
