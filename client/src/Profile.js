import React from 'react';
import { CurrentUserContext, CurrentUserProvider } from './CurrentUserContext';
import styled from 'styled-components/macro';
import format from 'date-fns/format';
import { COLORS } from './constants';
import { useParams } from 'react-router-dom';

const Profile = () => {
  // const {
  //   currentUser,
  //   status,
  //   setStatus
  // } = React.useContext(CurrentUserContext);
  const [otherProfile, setOtherProfile] = React.useState(null);
  const [otherProfileStatus, setOtherProfileStatus] = React.useState('loading');
  const { profileId } = useParams();
  
  // const {
  //   avatarSrc,
  //   bannerSrc,
  //   bio,
  //   displayName,
  //   handle,
  //   isBeingFollowedByYou,
  //   isFollowingYou,
  //   joined,
  //   location,
  //   numFollowers,
  //   numFollowing,
  //   numLikes
  // } = otherProfile.profile;

  React.useEffect(()=> {
    if (profileId !== 'me') {
      fetch(`/api/${profileId}/profile`)
      .then(response => response.json())
      .then(data => {
          setOtherProfile(data);
          setOtherProfileStatus('idle');
      })
      .catch(err => console.log('this is your error', err))
    }
  }, [])
  console.log(profileId, otherProfile);

  return (
    <>
    {otherProfile ? (<> <Wrapper>
        <Banner src={otherProfile.profile.bannerSrc}/>
        <UserInfo>
          <Avatar src={otherProfile.profile.avatarSrc}/>
          <DisplayName>{otherProfile.profile.displayName}</DisplayName>
          <HandleName>@{otherProfile.profile.handle}</HandleName>
          <Bio>{otherProfile.profile.bio}</Bio>
          <Location>{otherProfile.profile.location}</Location>
          <DateJoined>Joined {format(new Date(otherProfile.profile.joined), 'MMM yyyy')}</DateJoined>
          <FollowData>
            <Following>
              <NumFollow>{otherProfile.profile.numFollowing}</NumFollow> 
              Following
            </Following>
            <Followers>
              <NumFollow>{otherProfile.profile.numFollowers}</NumFollow> 
              Followers
            </Followers>
          </FollowData>
        </UserInfo>
        <TweetFeedList>
          <Option>Tweet</Option>
          <Option>Media</Option>
          <Option>Likes</Option>
        </TweetFeedList>
      </Wrapper></>) : (<>Loading</>)}    
    </> 
  )
};

const Wrapper = styled.div`
  display:block;
  margin-left: 30px;
  margin-right: 50px;
  box-sizing: border-box;
`;

const Banner = styled.img`
  width: 100%;
  height: 300px;
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
`;
const FollowData = styled.div`
  display: block;
  color: grey;
`;
const Following = styled.span`
  padding: 5px 10px 5px 0;
`;

const NumFollow = styled.span`
  font-weight: 800;
  color: black;
  padding: 0 5px 0 0;
`;

const Followers = styled.span`
  padding: 5px 10px;
`;

const NumFollowers = styled.span

export default Profile;
