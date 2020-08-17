import React from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import styled from "styled-components/macro";
import { COLORS } from "./constants";
import Error from "./Error";

import SmallTweet from "./SmallTweet";

const HomeFeed = () => {
  const { currentUser } = React.useContext(CurrentUserContext);
  const [feedData, setFeedData] = React.useState({
    tweetIds: [],
    tweetsById: {},
  });

  const [status, setStatus] = React.useState("");

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
    numLikes,
  } = currentUser.profile;

  const [toggleFetch, setToggleFetch] = React.useState(false);

  //Render every single Tweet info
  React.useEffect(() => {
    fetch("/api/me/home-feed")
      .then((response) => response.json())
      .then((data) => {
        setFeedData(data);
      })
      .catch((err) => {
        console.log("this is your error", err);
        return <Error />;
      });
  }, [toggleFetch]);

  //Posting new tweets
  const sendMeow = (e) => {
    e.preventDefault();

    fetch("/api/tweet", {
      method: "POST",
      body: JSON.stringify({ status }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // add the tweet id to tweetIds
        // add the tweet to tweetsById
        console.log("data", data.tweet);
        setTimeout(
          fetch("/api/me/home-feed")
            .then((response) => response.json())
            .then((data) => {
              setFeedData(data);
            }),
          100
        );
        setStatus("");
      })
      .catch((err) => {
        console.log("this is your error", err);
        return <Error />;
      });
  };

  const handleChange = (ev) => setStatus(ev.target.value);

  console.log("this is your homefeed", feedData);

  return (
    <Wrapper>
      <TopHomeForm onSubmit={sendMeow}>
        <Header>Home</Header>
        <AvInpDiv>
          <Avatar src={avatarSrc} />
          <TextInput
            value={status}
            onChange={(ev) => handleChange(ev)}
            name="status"
            placeholder="What's Happening?"
            type="text"
          />
        </AvInpDiv>
        <MeowBtn type="submit">MEOW</MeowBtn>
      </TopHomeForm>
      <BottomHomeFeed>
        {feedData.tweetIds.map((tweetId) => {
          const tweet = feedData.tweetsById[tweetId];
          return (
            <SmallTweet
              key={tweet.id}
              tweet={tweet}
              toggleFetch={toggleFetch}
              setToggleFetch={setToggleFetch}
            />
          );
        })}
      </BottomHomeFeed>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border: none;
`;
const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  z-index: 100;
`;
const TopHomeForm = styled.form`
  width: 100%;
  border-bottom: 1px solid lightslategray;
  padding-bottom: 20px;
`;
const AvInpDiv = styled.div`
  display: flex;
`;
const Avatar = styled.img`
  display: inline-block;
  border-radius: 50%;
  width: 65px;
  border: 2px solid white;
`;
const TextInput = styled.input`
  border: 1px solid grey;
  display: inline-block;
  width: 80%;
  padding-bottom: 45px;
  padding-right: 15px;
  font-family: Arial, Helvetica, sans-serif;
  border: none;
  resize: none;
`;
const MeowBtn = styled.button`
  padding: 10px 40px;
  background-color: ${COLORS.primary};
  color: white;
  border-radius: 20px;
  border: none;
  margin-left: 76%;
  cursor: pointer;
`;
const BottomHomeFeed = styled.div`
  padding-top: 20px;
`;

export default HomeFeed;
