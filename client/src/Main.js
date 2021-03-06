import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';

import HomeFeed from './HomeFeed';
import Notifications from './Notifications';
import Bookmarks from './Bookmarks';
import TweetDetails from './TweetDetails';
import Profile from './Profile';

const Main = () => {
    return (
      <Wrapper>
        <Switch>
          <Route exact path='/'>
            <HomeFeed/>
          </Route>
          <Route exact path='/notifications'>
            <Notifications />
          </Route>
          <Route exact path='/bookmarks'>
            <Bookmarks />
          </Route>
          <Route exact path='/tweet/:tweetId'>
            <TweetDetails />
          </Route>
          <Route exact path='/profile/:profileId'>
            <Profile/>
          </Route>
        </Switch>
      </Wrapper>
    )
};
const Wrapper = styled.div`
  display:flex;
  width: 50%;
  padding: 10px 50px 0 40px;
`;

export default Main;