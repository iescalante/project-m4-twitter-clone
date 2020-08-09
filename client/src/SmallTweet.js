import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import TweetActions from './TweetActions';
import { useHistory, useParams } from 'react-router-dom';

const SmallTweet = ({tweet}) => {
    console.log(tweet);
    let mediaType;
    let mediaSrc;
    let history = useHistory();

    function handleClickName() {
      history.push('/profile/:profileId');
    }

    function handleClickTweet() {
      history.push('/tweet/:tweetId')
    }

    if (tweet.media[0]) {
        mediaType = tweet.media[0].type;
        mediaSrc = tweet.media[0].url;
      }

    return (
      <Wrapper onClick={(ev)=> console.log(ev.target)}>
        <Avatar src={tweet.author.avatarSrc}/>
        <Text onClick={handleClickTweet} tabIndex='0'>
          <DisplayName onClick={handleClickName}>{tweet.author.displayName}</DisplayName>
          <Handle>@{tweet.author.handle}</Handle>
          <Timestamp>{format(new Date(tweet.timestamp), 'MMM dd')}</Timestamp>
          <Status>{tweet.status}</Status>
        </Text>
        {mediaType === 'img' && <MediaImg src={mediaSrc}/>}
        <TweetActions/>        
      </Wrapper>
    
    )
};
const Wrapper = styled.div`
  display:block;
`
const Avatar = styled.img`
  border-radius: 50%;
  width: 65px;
  vertical-align: middle;
`;
const Text = styled.div`
  display:inline-block;
  &:hover{
    border: 1px solid grey;
  }
`
const DisplayName = styled.p`
  display: inline-block;
  font-weight: bold;
  font-size: 16px;
  vertical-align: middle;
  margin: 0 10px;
  
  &:hover{
    cursor: pointer;
  }
`;
const Handle = styled.p`
  display: inline-block;
  font-weight: bold;
  font-size: 16px;
  vertical-align: middle;
  color: #616161;
`;
const Timestamp = styled.p`
  display: inline-block;
  font-weight: bold;
  font-size: 16px;
  vertical-align: middle;
  color: #616161;
  margin-left: 10px;
`;
const Status = styled.p`
  display: block;
  margin-left: 10px;
`
const MediaImg = styled.img`
  width: 85%;
  margin-left:65px;
  border-radius: 10px;
  height: 400px;
`;
export default SmallTweet;