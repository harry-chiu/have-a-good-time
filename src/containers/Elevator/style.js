import styled from 'styled-components';

export const View = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  perspective: 1000px;
  perspective-origin: 50% ${props => props.perspectiveOriginY || 50}%;
  transition: 5s ease-in-out;
`;

export const City = styled.div`
  position: relative;
  top: 1000px;
`;

export const Sky = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3000px;
  background: skyblue;
`;

export const Building = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150vh;
`;

export const Building1 = styled(Building)`
  left: 75%;
  transform: translateZ(-500px) scale(1.5);
`;

export const Building2 = styled(Building)`
  top: -500px;
  left: -50%;
  transform: translateZ(-1000px) scale(2);
`;

export const Building3 = styled(Building)`
  left: 50%;
  transform: translateZ(-1500px) scale(2.5);
`;

export const Building4 = styled(Building)`
  left: -50%;
  transform: translateZ(-2000px) scale(3);
`;

export const Panel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 96px;
  height: 100vh;
  max-height: 100%;
  background: #303030;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  margin-top: 24px;
  background: lightyellow;
  cursor: pointer;

  &:first-child {
    margin-top: 0;
  }

  &:focus {
    outline: none;
  }
`;

export const Cloud1 = styled.img`
  position: absolute;
  top: -2000px;
  left: -700px;
  width: 300px;
  height: auto;
  transform: translateZ(-2000px) scale(3);
`;

export const Cloud2 = styled.img`
  position: absolute;
  top: -2500px;
  right: -300px;
  width: 500px;
  height: auto;
  transform: translateZ(-2000px) scale(3);
`;
