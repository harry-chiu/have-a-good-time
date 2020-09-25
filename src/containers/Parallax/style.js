import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100%;
  overflow: hidden;
  overflow-y: auto;
  perspective: 1px;
  perspective-origin: ${props =>
    `${props.perspectiveOriginX}% ${props.perspectiveOriginY}%` || '50% 50%'};
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const View = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px dashed #c0c0c0;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 100vh;
  object-fit: cover;
  transform: translateZ(${props => props.z || '-1'}px)
    scale(${props => props.z * -1 + 1 || 2});
`;

export const WhiteSpace = styled.div`
  height: 1000px;
`;
