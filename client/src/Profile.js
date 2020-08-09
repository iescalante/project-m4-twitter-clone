import React from 'react';
import { CurrentUserContext, CurrentUserProvider } from './CurrentUserContext';
import styled from 'styled-components/macro';
import format from 'date-fns/format';

const Profile = () => {
  const {
    currentUser
  } = React.useContext(CurrentUserContext);

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
          <span>{location}</span>
          <span>Joined {format(new Date(joined), 'MMM yyyy')}</span>
          <div>
            <span>{numFollowing} Following</span>
            <span>{numFollowers} Followers</span>
          </div>
        </UserInfo>
        
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
`
export default Profile;
