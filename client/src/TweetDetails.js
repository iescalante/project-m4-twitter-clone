import React from 'react';
import BigTweet from './BigTweet';
import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';

const TweetDetails = () => {
  const { tweetId} = useParams();
  console.log(tweetId);
    return (
        <Wrapper>
          <BigTweet tweetId={tweetId}/>
        </Wrapper>
    )
    
};
const Wrapper = styled.div`
  display:block;
`;
export default TweetDetails;