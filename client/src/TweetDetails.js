import React from 'react';
import BigTweet from './BigTweet';
import styled from 'styled-components/macro';

const TweetDetails = () => {
    return (
        <Wrapper>
          <BigTweet/>
        </Wrapper>
    )
    
};
const Wrapper = styled.div`
  display:block;
`;
export default TweetDetails;