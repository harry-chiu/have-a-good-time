import React, { useState } from 'react';
import Building1Svg from '../../images/building-1.svg';
import Building2Svg from '../../images/building-2.svg';
import Building3Svg from '../../images/building-3.svg';
import Building4Svg from '../../images/building-4.svg';
import Cloud1Svg from '../../images/cloud-1.svg';
import Cloud2Svg from '../../images/cloud-2.svg';
import {
  View,
  City,
  Sky,
  Building1,
  Building2,
  Building3,
  Building4,
  Panel,
  ButtonGroup,
  Button,
  Cloud1,
  Cloud2,
} from './style';

const Elevator = () => {
  const [perspectiveOriginY, setPerspectiveOriginY] = useState(50);

  const handleGoUp = () => setPerspectiveOriginY(perspectiveOriginY + 50);
  const handleGoDown = () => setPerspectiveOriginY(perspectiveOriginY - 50);

  return (
    <>
      <View perspectiveOriginY={perspectiveOriginY}>
        <Sky />
        <City>
          <Cloud1 src={Cloud1Svg} alt="" />
          <Cloud2 src={Cloud2Svg} alt="" />
          <Building1 src={Building1Svg} alt="" />
          <Building2 src={Building2Svg} alt="" />
          <Building3 src={Building3Svg} alt="" />
          <Building4 src={Building4Svg} alt="" />
        </City>
      </View>
      <Panel>
        <ButtonGroup>
          <Button onClick={handleGoUp}>Up</Button>
          <Button onClick={handleGoDown}>Down</Button>
        </ButtonGroup>
      </Panel>
    </>
  );
};

export default Elevator;
