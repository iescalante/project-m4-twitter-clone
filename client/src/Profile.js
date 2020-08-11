import React from 'react';
import { CurrentUserContext, CurrentUserProvider } from './CurrentUserContext';
import styled from 'styled-components/macro';
import format from 'date-fns/format';
import { COLORS } from './constants';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const {
    currentUser,
    status,
    viewPage
  } = React.useContext(CurrentUserContext);
  console.log(viewPage);
  
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
  console.log(handle);
  return (
      <Wrapper>
        <Banner src={bannerSrc}/>
        <UserInfo>
          <Avatar src={avatarSrc}/>
          <DisplayName>{displayName}</DisplayName>
          <HandleName>@{handle}</HandleName>
          <Bio>{bio}</Bio>
          <Location>{location}</Location>
          <DateJoined>Joined {format(new Date(joined), 'MMM yyyy')}</DateJoined>
          <FollowData>
            <span>{numFollowing} Following</span>
            <span>{numFollowers} Followers</span>
          </FollowData>
        </UserInfo>
        <TweetFeedList>
          <Option>Tweet</Option>
          <Option>Media</Option>
          <Option>Likes</Option>
        </TweetFeedList>
      </Wrapper>
  )
};

const Wrapper = styled.div`
  display:block;
  margin-left: 30px;
  margin-right: 50px;
  box-sizing: border-box;
`;

const Banner = styled.img`
  max-width: 100%;
`;
const UserInfo = styled.div`
  position: relative;
  margin-top: -6%;
`;
const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 12%;
  border: 3px solid white;
  
`;
const DisplayName = styled.h2`
  font-size: 20px;
`;

const HandleName = styled.h3`
  font-size: 16px;
  color: #616161;
`;

const Bio = styled.p`
  font-weight:bold;
`;
const Location = styled.span`
  display:inline-block;
  padding: 10px 20px 10px 0;
`;
const DateJoined = styled.span`
  display:inline-block;
  padding: 10px 20px;
`;
const FollowData = styled.div`
  display:flex;
`
const TweetFeedList = styled.div`
  display:flex;
  align-items: center;
  justify-content:space-evenly;
  padding: 20px 0;
`;

const Option = styled.h2`
  display:flex;
  padding:5px 30px;
  font-size: 24px;
  color: grey;
  &:hover{
    color: ${COLORS.primary};
    border-bottom: 3px solid ${COLORS.primary};
    cursor: pointer;
  }
`
export default Profile;
