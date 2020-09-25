import React, { useState, useRef } from 'react';
import { Link } from '@reach/router';
import { Container, List, ListItem, FloatButton } from './style';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const container = containerRef.current;

  const handleOpen = () => setIsOpen(!isOpen);

  if (container) {
    isOpen ? (container.style.right = '0') : (container.style.right = '-120px');
  }

  return (
    <>
      <Container ref={containerRef}>
        <List>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/cube">Cube</Link>
          </ListItem>
          <ListItem>
            <Link to="/parallax">Parallax</Link>
          </ListItem>
          <ListItem>
            <Link to="/elevator">Elevator</Link>
          </ListItem>
          <ListItem>
            <Link to="/train">Train</Link>
          </ListItem>
        </List>
      </Container>
      <FloatButton onClick={handleOpen}>Nav</FloatButton>
    </>
  );
};

export default NavigationBar;
