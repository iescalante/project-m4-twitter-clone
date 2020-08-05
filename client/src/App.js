import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyles from './GlobalStyles';
import Sidebar from './Sidebar';
import Main from './Main';
import { CurrentUserContext } from './CurrentUserContext';

const App = () => {
  const {
    status
  } = React.useContext(CurrentUserContext);

  if (status === 'loading') {
    return (
      <Loading>
      LOADING....
    </Loading>
    )
  } else {
      return (
        <Router>
          <Wrapper>
            <Sidebar/>
            <Main />
            <GlobalStyles />
          </Wrapper>
        </Router>
      )
    }  
};

const Wrapper = styled.div`
  display:flex;
`;
const Loading = styled.div`
  display:flex;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: bold;
`
export default App;
