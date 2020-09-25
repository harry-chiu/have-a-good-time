import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Camera = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid #303030;
  perspective: ${props => props.perspective || 0}px;
  perspective-origin: ${props =>
    `${props.perspectiveOriginX}% ${props.perspectiveOriginY}%` || '50% 50%'};

  &::before {
    content: 'Camera';
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Space = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px dashed #303030;
  transform-style: preserve-3d;
  transform: translateX(50px) translateY(50px);
  display: flex;
  flex-wrap: wrap;

  &::before {
    content: 'Space';
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Box = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  transform: translateX(50px) translateY(50px)
    translateZ(${props => props.translateZ || 0}px)
    rotateX(${props => props.rotateX || 0}deg)
    rotateY(${props => props.rotateY || 0}deg);
  background: skyblue;

  &::before {
    content: 'Box';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  margin: 0;
  padding: 16px 0;
`;
