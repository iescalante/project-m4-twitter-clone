import React from 'react';
import { Link } from 'react-router-dom';
import catLogo from './assets/logo.svg';
import { FiHome, FiUser, FiBell, FiBookmark } from 'react-icons/fi';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { COLORS } from './constants';


const Sidebar = () => {
  return (
    <Wrapper>
      <CatLogo src={catLogo}/>
      <NavigationLink exact to='/'>
        <FiHome style={{verticalAlign:'middle'}}/>
        <StyledSpan>Home</StyledSpan>
      </NavigationLink>
      <NavigationLink to='/profile/me'>
        <FiUser style={{verticalAlign:'middle'}}/>
        <StyledSpan>Profile</StyledSpan>
      </NavigationLink>
      <NavigationLink to='/notifications'>
        <FiBell style={{verticalAlign:'middle'}}/>
        <StyledSpan>Notifications</StyledSpan>
      </NavigationLink>
      <NavigationLink to='Bookmarks'>
        <FiBookmark style={{verticalAlign:'middle'}}/>
        <StyledSpan>Bookmarks</StyledSpan>
      </NavigationLink>
    </Wrapper>
  )
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left:120px;
  text-align: left;
  margin-top: 45px;
`

const StyledSpan = styled.span`
  margin-left: 30px;
  vertical-align: middle;
`;

const CatLogo = styled.img`
  box-sizing: border-box;
  position:relative;
  width: 65px;
  left: -20px;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  display:flex;
  color: black;
  font-weight: bold;
  margin: 10px 0;
  text-align:left;
  font-size: 24px;

  &.active {
    color: ${COLORS.primary};
  }
`
export default Sidebar;
