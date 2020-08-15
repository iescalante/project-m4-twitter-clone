import React from "react";
import styled from "styled-components/macro";
import format from "date-fns/format";
import SmallTweetActions from "./SmallTweetActions";
import { useHistory, useParams } from "react-router-dom";

const SmallTweet = ({ tweet, toggleFetch, setToggleFetch }) => {
  let mediaType;
  let mediaSrc;
  let history = useHistory();

  function handleClickTweet(e, tweetId) {
    history.push(`/tweet/${tweetId}`);
  }

  function handleClickName(e, handle) {
    e.stopPropagation(); // stop from bubbling up to click tweet
    history.push(`/profile/${handle}`);
  }

  if (tweet.media[0]) {
    mediaType = tweet.media[0].type;
    mediaSrc = tweet.media[0].url;
  }

  return (
    <Wrapper>
      <Avatar src={tweet.author.avatarSrc} />
      <Text tabIndex="0" onClick={(e) => handleClickTweet(e, tweet.id)}>
        <DisplayName onClick={(e) => handleClickName(e, tweet.author.handle)}>
          {tweet.author.displayName}
        </DisplayName>
        <Handle>@{tweet.author.handle}</Handle>
        <Timestamp>{format(new Date(tweet.timestamp), "MMM dd")}</Timestamp>
        <Status>{tweet.status}</Status>
      </Text>
      {mediaType === "img" && <MediaImg src={mediaSrc} />}
      <StyledDiv>
        <SmallTweetActions
          tweet={tweet}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
          isLiked={tweet.isLiked}
          isRetweeted={tweet.isRetweeted}
          numLikes={tweet.numLikes}
          numRetweets={tweet.numRetweets}
        />
      </StyledDiv>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 10px 0;
  border-bottom: 1px solid lightgrey;
`;
const Avatar = styled.img`
  border-radius: 50%;
  width: 65px;
`;
const Text = styled.div`
  display: block;
  &:hover {
    border: 1px solid gray;
  }
`;
const DisplayName = styled.p`
  display: inline-block;
  font-weight: bold;
  font-size: 16px;
  vertical-align: middle;
  margin: 0 10px;
  z-index: 100;
  &:hover {
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
`;
const MediaImg = styled.img`
  width: 100%;
  margin-left: auto;
  border-radius: 10px;
  height: 400px;
`;
const StyledDiv = styled.div`
  display: inline-block;
  flex: auto;
  align-items: center;
  justify-content: space-evenly;
`;
export default SmallTweet;
