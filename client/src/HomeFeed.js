import React from 'react';
import { CurrentUserContext } from './CurrentUserContext';
import styled from 'styled-components/macro';
import { COLORS } from './constants';
import Error from './Error';

import SmallTweet from './SmallTweet';

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

  function handleMeowBtn(ev) {
    ev.preventDefault();

  }

  React.useEffect(() => {
    fetch('/api/me/home-feed')
    .then(response => response.json())
    .then(data => {
      setFeedData(data);
    })
    .catch(err => {
      console.log('this is your error',err);
      return (
        <Error/>
      )
    }
    )
  }, [])
      console.log('this is your homefeed', feedData);

    return (
      <Wrapper>
        <TopHomeFeed>
          <Header>Home</Header>
          <AvInpDiv>
            <Avatar src={avatarSrc}/>
            <TextArea placeholder="What's Happening?"></TextArea>
          </AvInpDiv>
          <MeowBtn onClick={handleMeowBtn}>MEOW</MeowBtn>
        </TopHomeFeed>
        <BottomHomeFeed>
          {feedData.tweetIds.map((tweetId) => {
            const tweet = feedData.tweetsById[tweetId];
            return (
            <SmallTweet tweet={tweet}/>
            )
          })}
        </BottomHomeFeed>

      </Wrapper>
    )
};
const Wrapper = styled.div`
  border:none;
`
const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  z-index: 100;
`;
const TopHomeFeed = styled.form`
  width: 100%;
  border-bottom: 1px solid lightslategray;
  padding-bottom: 20px;
`;
const AvInpDiv = styled.div`
  display:flex;
`
const Avatar = styled.img`
  display: inline-block;
  border-radius: 50%;
  width: 65px;
  border: 2px solid white;
`;
const TextArea = styled.input`
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
  margin-left: 76%;
  cursor: pointer;
`;
const BottomHomeFeed = styled.div`
  padding-top: 20px;
`

export default HomeFeed;