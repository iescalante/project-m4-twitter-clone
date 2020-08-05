import React from 'react';
import { CurrentUserContext, CurrentUserProvider } from './CurrentUserContext';
import styled from 'styled-components';

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
        <AvatarProfile src={avatarSrc}/>
        <DisplayName>{displayName}</DisplayName>
        <HandleName>@{handle}</HandleName>
        <Bio>{bio}</Bio>
        <span>{location}</span>
        <span>Joined {joined}</span>
        <div>
          <span>{numFollowing} Following</span>
          <span>{numFollowers} Followers</span>
        </div>
      </Wrapper>
  )
};

const Wrapper = styled.div`
  display:block;
  left: 40px;
  position: relative;
  box-sizing: border-box;
`;

const Banner = styled.img`
  max-width: 100%;
  width: 80%;
`;

const AvatarProfile = styled.img`
  display: block;
  border-radius: 50%;
  width: 12%;
  border: 3px solid white;
  position: relative;
  top: -70px;
  left: 20px;
`;
const DisplayName = styled.h2`
  font-size: 20px;
  position: relative;
  top: -50px;
`;

const HandleName = styled.h3`
  font-size: 16px;
  color: #616161;
  position:relative;
  top:-40px;
`;

const Bio = styled.p`
  position:relative;
  font-weight:bold;
  top: -20px;
`
export default Profile;
