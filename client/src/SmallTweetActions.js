import React from "react";
import styled from "styled-components";
import { FiMessageSquare, FiRepeat, FiHeart, FiUpload } from "react-icons/fi";
import Error from "./Error";

const SmallTweetActions = ({
  tweet,
  isLiked,
  isRetweeted,
  numLikes,
  numRetweets,
  toggleFetch,
  setToggleFetch,
}) => {
  // const [numOfLikes, setNumOfLikes] = React.useState(0);
  // const [isItLiked, setIsItLiked] = React.useState(false);

  // function handleToggleLike() {
  //   console.log(numLikes);
  //   setIsItLiked(!isItLiked);

  //   isItLiked ? setNumOfLikes(numOfLikes - 1) : setNumOfLikes(numOfLikes + 1);
  // }

  const toggleLike = (e) => {
    e.preventDefault();

    fetch(`/api/tweet/${tweet.id}/like`, {
      method: "PUT",
      body: JSON.stringify({ like: !isLiked }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(isLiked);
        setToggleFetch(!toggleFetch);
      })
      .catch((err) => {
        console.log("this is your error", err);
        return <Error />;
      });
  };
  return (
    <Wrapper>
      <TweetBtn tabIndex="0">
        <FiMessageSquare />
      </TweetBtn>
      <TweetBtn tabIndex="0">
        <FiRepeat />
        <NumRetweets>{numRetweets}</NumRetweets>
      </TweetBtn>
      <TweetBtn tabIndex="0" onClick={toggleLike}>
        <FiHeart />
        <NumLikes>{numLikes}</NumLikes>
      </TweetBtn>
      <TweetBtn tabIndex="0">
        <FiUpload />
      </TweetBtn>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex: auto;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 0;
`;
const TweetBtn = styled.div`
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
const NumRetweets = styled.span`
  padding: 0 5px;
`;
const NumLikes = styled.span`
  padding: 0 5px;
`;
export default SmallTweetActions;
