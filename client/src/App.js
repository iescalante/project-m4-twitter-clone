import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomeFeed from './HomeFeed';
import Notifications from './Notifications';
import Bookmarks from './Bookmarks';
import TweetDetails from './TweetDetails';
import Profile from './Profile';

import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <HomeFeed />
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
          <Route exact path='/:profileId'>
            <Profile />
          </Route>
        </Switch>
        <GlobalStyles />
      </div>
    </Router>
  )
};

export default App;
