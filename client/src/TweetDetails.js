import React from 'react';
import BigTweet from './BigTweet';
import styled from 'styled-components';

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