import React from 'react';
import { Link } from 'react-router-dom';
import catLogo from './assets/logo.svg';
import { FiHome, FiUser, FiBell, FiBookmark } from 'react-icons/fi';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Wrapper>
      <CatLogo src={catLogo}/>
      <StyledLink to='/'>
        <FiHome/>
        <StyledSpan>Home</StyledSpan>
      </StyledLink>
      <StyledLink to='/profile/abc'>
        <FiUser/>
        <StyledSpan>Profile</StyledSpan>
      </StyledLink>
      <StyledLink to='/notifications'>
        <FiBell/>
        <StyledSpan>Notifications</StyledSpan>
      </StyledLink>
      <StyledLink to='Bookmarks'>
        <FiBookmark/>
        <StyledSpan>Bookmarks</StyledSpan>
      </StyledLink>
    </Wrapper>
  )
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  text-align: left;
  margin-top: 45px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin: 10px 0;
  text-align:left;
  font-size: 24px;
`;

const StyledSpan = styled.span`
  margin-left: 20px;
`;

const CatLogo = styled.img`
  box-sizing: border-box;
  position:relative;
  width: 65px;
  left: -20px;
`;
export default Sidebar;
