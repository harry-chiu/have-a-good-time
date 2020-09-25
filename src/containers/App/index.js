import React from 'react';
import { Router } from '@reach/router';
import Home from '../Home';
import Cube from '../Cube';
import Parallax from '../Parallax';
import Elevator from '../Elevator';
import Train from '../Train';
import GlobalStyle from '../../components/GlobalStyle';
import NavigationBar from '../../components/NavigationBar';
import { Main } from './style';

const App = () => (
  <>
    <GlobalStyle />
    <NavigationBar />
    <Main>
      <Router>
        <Home path="/" />
        <Cube path="/cube" />
        <Parallax path="/parallax" />
        <Elevator path="/elevator" />
        <Train path="/train" />
      </Router>
    </Main>
  </>
);

export default App;
