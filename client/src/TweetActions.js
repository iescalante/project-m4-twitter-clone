import React from 'react';
import styled from 'styled-components';
import { 
    FiMessageSquare,
    FiRepeat,
    FiHeart,
    FiUpload
 } from 'react-icons/fi';

const TweetActions = () => {
  return (
      <Wrapper>
        <FiMessageSquare/>
        <FiRepeat/>
        <FiHeart/>
        <FiUpload/>
      </Wrapper>
  )

};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
`;

export default TweetActions;