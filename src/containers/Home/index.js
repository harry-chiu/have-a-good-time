import React, { useState } from 'react';
import Controller from '../../components/Controller';
import Control from '../../components/Control';
import { Container, Camera, Space, Box, Title } from './style';

const Home = () => {
  const [perspective, setPerspective] = useState(500);
  const [perspectiveOriginX, setPerspectiveOriginX] = useState(50);
  const [perspectiveOriginY, setPerspectiveOriginY] = useState(50);
  const [translateZ, setTranslateZ] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const withTargetValue = fn => e => fn(e.target.value);
  const handlePerspective = withTargetValue(setPerspective);
  const handlePerspectiveOriginX = withTargetValue(setPerspectiveOriginX);
  const handlePerspectiveOriginY = withTargetValue(setPerspectiveOriginY);
  const handleTranslateZ = withTargetValue(setTranslateZ);
  const handleRotateX = withTargetValue(setRotateX);
  const handleRotateY = withTargetValue(setRotateY);

  return (
    <Container>
      <Camera
        perspective={perspective}
        perspectiveOriginX={perspectiveOriginX}
        perspectiveOriginY={perspectiveOriginY}
      >
        <Space>
          <Box translateZ={translateZ} rotateX={rotateX} rotateY={rotateY} />
        </Space>
      </Camera>

      <Controller>
        <Title>Camera</Title>
        <Control
          title="Perspective"
          min={0}
          max={500}
          value={perspective}
          setValue={handlePerspective}
          unit="px"
        />
        <Control
          title="Perspective Origin X"
          min={-50}
          max={150}
          value={perspectiveOriginX}
          setValue={handlePerspectiveOriginX}
          unit="%"
        />
        <Control
          title="Perspective Origin Y"
          min={-50}
          max={150}
          value={perspectiveOriginY}
          setValue={handlePerspectiveOriginY}
          unit="%"
        />
        <Title>Box</Title>
        <Control
          title="Box Translate Z"
          min={-500}
          max={500}
          value={translateZ}
          setValue={handleTranslateZ}
          unit="px"
        />
        <Control
          title="Box Rotate X"
          min={-360}
          max={360}
          value={rotateX}
          setValue={handleRotateX}
          unit="deg"
        />
        <Control
          title="Box Rotate Y"
          min={-360}
          max={360}
          value={rotateY}
          setValue={handleRotateY}
          unit="deg"
        />
      </Controller>
    </Container>
  );
};

export default Home;
