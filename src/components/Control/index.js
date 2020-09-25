import React from 'react';
import { Container, Title, Input, Value } from './style';

const Control = ({ min, max, title, value, setValue, unit }) => (
  <Container>
    <Title>{title}</Title>
    <Input type="range" min={min} max={max} value={value} onChange={setValue} />
    <Value>{`${value}${unit}`}</Value>
  </Container>
);

export default Control;
