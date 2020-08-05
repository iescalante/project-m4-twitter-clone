import React from 'react';
import { CurrentUserContext, CurrentUserProvider } from './CurrentUserContext';

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
      <div>
        <img src={bannerSrc}/>
        <img src={avatarSrc}/>
        <p>{displayName}</p>
        <p>{handle}</p>
        <p>{bio}</p>
        <p>{location}</p>
        <p>{joined}</p>
        <p>{numFollowing} Following</p>
        <p>{numFollowers} Followers</p>
      </div>
  )
};

export default Profile;