import React from 'react';
import styled from 'styled-components/macro';
import format from 'date-fns/format';
import TweetActions from './TweetActions';
import { useHistory, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const BigTweet = () => {

    return (
      <Wrapper>
        <StyledFiArrowLeft onClick={(ev) =>window.location.replace('/')}/>
        Meow
        <Avatar/>
        <Text tabIndex='0'>
          <DisplayName>Hello</DisplayName>
          <Handle>@Hello</Handle>
          <Timestamp>Today's date</Timestamp>
          <Status>This is a test for Big Tweet</Status>
        </Text>
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
const StyledFiArrowLeft = styled(FiArrowLeft)`
  &:hover{
      cursor: pointer;
  }
`
export default BigTweet;