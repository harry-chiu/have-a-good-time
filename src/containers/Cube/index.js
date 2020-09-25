import React, { useState } from 'react';
import Controller from '../../components/Controller';
import Control from '../../components/Control';
import {
  Container,
  Camera,
  Space,
  Box,
  Front,
  Back,
  Left,
  Right,
  Top,
  Bottom,
  Title,
} from './style';

const Cube = () => {
  const [perspective, setPerspective] = useState(1000);
  const [perspectiveOriginX, setPerspectiveOriginX] = useState(50);
  const [perspectiveOriginY, setPerspectiveOriginY] = useState(50);
  const [rotateX, setRotateX] = useState(-45);
  const [rotateY, setRotateY] = useState(-45);
  const [translateZ, setTranslateZ] = useState(0);

  const withTargetValue = fn => e => fn(e.target.value);
  const handlePerspective = withTargetValue(setPerspective);
  const handlePerspectiveOriginX = withTargetValue(setPerspectiveOriginX);
  const handlePerspectiveOriginY = withTargetValue(setPerspectiveOriginY);
  const handleRotateX = withTargetValue(setRotateX);
  const handleRotateY = withTargetValue(setRotateY);
  const handleTranslateZ = withTargetValue(setTranslateZ);

  return (
    <Container>
      <Camera
        perspective={perspective}
        perspectiveOriginX={perspectiveOriginX}
        perspectiveOriginY={perspectiveOriginY}
      >
        <Space>
          <Box rotateX={rotateX} rotateY={rotateY} translateZ={translateZ}>
            <Front>1</Front>
            <Back>5</Back>
            <Left>4</Left>
            <Right>2</Right>
            <Top>3</Top>
            <Bottom>6</Bottom>
          </Box>
        </Space>
      </Camera>
      <Controller>
        <Title>Camera</Title>
        <Control
          title="Perspective"
          min={0}
          max={1000}
          unit="px"
          value={perspective}
          setValue={handlePerspective}
        />
        <Control
          title="Perspective Origin X"
          min={-100}
          max={100}
          value={perspectiveOriginX}
          setValue={handlePerspectiveOriginX}
          unit="%"
        />
        <Control
          title="Perspective Origin Y"
          min={-100}
          max={100}
          value={perspectiveOriginY}
          setValue={handlePerspectiveOriginY}
          unit="%"
        />
        <Title>Box</Title>
        <Control
          title="Rotate X"
          min={-360}
          max={360}
          unit="deg"
          value={rotateX}
          setValue={handleRotateX}
        />
        <Control
          title="Rotate Y"
          min={-360}
          max={360}
          unit="deg"
          value={rotateY}
          setValue={handleRotateY}
        />
        <Control
          title="Translate Z"
          min={-300}
          max={300}
          unit="px"
          value={translateZ}
          setValue={handleTranslateZ}
        />
      </Controller>
    </Container>
  );
};

export default Cube;
