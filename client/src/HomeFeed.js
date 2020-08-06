import React from 'react';
import { CurrentUserContext } from './CurrentUserContext';
import styled from 'styled-components';

const HomeFeed = () => {
  const {currentUser} = 
    React.useContext(CurrentUserContext);
  const [feedData, setFeedData] = React.useState(null)
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
        fetch('http://localhost:31415/api/me/home-feed')
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
          <TextArea></TextArea>
        </TopHomeFeed>
        <div>Tweets by Id</div>
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
  width: 15%;
  border: 2px solid white;
`;
const TextArea = styled.textarea`
  border: 1px solid grey;
  display: inline-block;
`

export default HomeFeed;