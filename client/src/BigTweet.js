import React from "react";
import styled from "styled-components/macro";
import format from "date-fns/format";
import BigTweetActions from "./BigTweetActions";
import { useHistory, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Error from "./Error";

const BigTweet = ({ tweetId }) => {
  console.log(tweetId);
  const [tweetInfo, setTweetInfo] = React.useState({
    tweet: {
      author: {},
      media: [],
    },
  });
  let mediaType;
  let mediaSrc;
  const [toggleFetch, setToggleFetch] = React.useState(false);

  React.useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((response) => response.json())
      .then((data) => {
        setTweetInfo(data);
      })
      .catch((err) => {
        console.log("this is your error", err);
        return <Error />;
      });
  }, [toggleFetch]);

  if (tweetInfo.tweet.media[0]) {
    mediaType = tweetInfo.tweet.media[0].type;
    mediaSrc = tweetInfo.tweet.media[0].url;
  }

  console.log(tweetInfo.tweet.timestamp);
  return (
    <Wrapper>
      <StyledFiArrowLeft onClick={(ev) => window.location.replace("/")} />
      <Header>Meow</Header>
      <TweetDiv>
        <TopPart>
          <Avatar src={tweetInfo.tweet.author.avatarSrc} />
          <UserInfo>
            <DisplayName>{tweetInfo.tweet.author.displayName}</DisplayName>
            <Handle>@{tweetInfo.tweet.author.handle}</Handle>
          </UserInfo>
        </TopPart>
        <Status>{tweetInfo.tweet.status}</Status>
        {mediaType === "img" && <MediaImg src={mediaSrc} />}
        <Timestamp>{tweetInfo.tweet.timestamp} - Critter web app</Timestamp>
      </TweetDiv>
      <BigTweetActions
        toggleFetch={toggleFetch}
        setToggleFetch={setToggleFetch}
        isLiked={tweetInfo.tweet.isLiked}
        isRetweeted={tweetInfo.tweet.isRetweeted}
        numLikes={tweetInfo.tweet.numLikes}
        numRetweets={tweetInfo.tweet.numRetweets}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: block;
`;
const Header = styled.h1`
  display: inline-block;
  font-size: 20px;
  padding-left: 10px;
  vertical-align: middle;
  font-weight: 900;
`;

const TweetDiv = styled.div`
  margin-top: 40px;
`;

const TopPart = styled.div`
  display: flex;
`;
const Avatar = styled.img`
  border-radius: 50%;
  width: 65px;
  vertical-align: middle;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;
const Text = styled.div`
  display: inline-block;
  &:hover {
    border: 1px solid grey;
  }
`;
const DisplayName = styled.p`
  display: inline-block;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;
const Handle = styled.p`
  display: block;
  font-weight: bold;
  font-size: 16px;
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
  margin: 20px 0;
  font-size: 24px;
`;
const MediaImg = styled.img`
  margin: 10px 0;
  width: 100%;
  border-radius: 15px;
`;
const StyledFiArrowLeft = styled(FiArrowLeft)`
  font-size: 20px;
  vertical-align: middle;
  &:hover {
    cursor: pointer;
  }
`;
export default BigTweet;
