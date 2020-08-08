import React from 'react';
import { CurrentUserContext } from './CurrentUserContext';
import styled from 'styled-components';
import { COLORS } from './constants';

import Tweet from './Tweet';

const HomeFeed = () => {
  const {currentUser} = 
    React.useContext(CurrentUserContext);
  const [feedData, setFeedData] = React.useState({
    tweetIds: [],
    tweetsById: {},
  });

  const {
        avatarSrc,
        bannerSrc,
        bio,
        displayName,
        handle,
        isBeingFollowedByYou,
        isFollowingYou,
        joined,
        location,
        numFollowers,
        numFollowing,
        numLikes
      } = currentUser.profile;
    React.useEffect(() => {
        fetch('/api/me/home-feed')
        .then(response => response.json())
        .then(data => {
            setFeedData(data);
        })
        .catch(err => console.log('this is your error', err))
      }, [])
      console.log('this is your homefeed', feedData);

    return (
      <Wrapper>
        <TopHomeFeed>
          <HomeHeader>Home</HomeHeader>
          <Avatar src={avatarSrc}/>
          <TextArea placeholder="What's Happening?"></TextArea>
          <MeowBtn>MEOW</MeowBtn>
        </TopHomeFeed>
        <BottomHomeFeed>
          {feedData.tweetIds.map((tweetId) => {
            const tweet = feedData.tweetsById[tweetId];
            return (
            <Tweet tweet={tweet}/>
            )
          })}
        </BottomHomeFeed>

      </Wrapper>
    )
};
const Wrapper = styled.div`
  margin: 10px 50px 10px 20px;
`
const HomeHeader = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 20px;
`;
const TopHomeFeed = styled.div`
  max-width: 100%;
`;
const Avatar = styled.img`
  display: inline-block;
  border-radius: 50%;
  width: 65px;
  border: 2px solid white;
`;
const TextArea = styled.textarea`
  border: 1px solid grey;
  display: inline-block;
  width: 80%;
  padding-bottom: 45px;
  padding-right:15px;
  font-family: Arial, Helvetica, sans-serif;
  border:none;
  resize: none;
`;
const MeowBtn = styled.button`
  padding: 10px 40px;
  background-color: ${COLORS.primary};
  color: white;
  border-radius: 20px;
  border:none;
  float: right;
`;
const BottomHomeFeed = styled.div`
  padding-top: 50px;
`

export default HomeFeed;