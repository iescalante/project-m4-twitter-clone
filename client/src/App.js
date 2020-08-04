import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyles from './GlobalStyles';
import Sidebar from './Sidebar';
import Main from './Main';

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Sidebar/>
        <Main />
        <GlobalStyles />
      </Wrapper>
    </Router>
  )
};

const Wrapper = styled.div`
  display:flex;
`;

export default App;
