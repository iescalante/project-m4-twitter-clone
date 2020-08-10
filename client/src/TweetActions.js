import React from 'react';
import styled from 'styled-components';
import { 
    FiMessageSquare,
    FiRepeat,
    FiHeart,
    FiUpload
 } from 'react-icons/fi';

const TweetActions = () => {
  function handleClick(ev) {
    console.log(ev.target);
  }
  return (
      <Wrapper>
        <FiMessageSquare onClick={handleClick}/>
        <FiRepeat onClick={handleClick}/>
        <FiHeart onClick={handleClick}/>
        <FiUpload onClick={handleClick}/>
      </Wrapper>
  )

};
const Wrapper = styled.div`
  display: flex;
  flex: auto;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 0;
  &:hover{
    cursor: pointer;
  }
`;


export default TweetActions;