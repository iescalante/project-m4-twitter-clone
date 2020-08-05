import React from 'react';
import { Link } from 'react-router-dom';
import catLogo from './assets/logo.svg';
import { FiHome, FiUser, FiBell, FiBookmark } from 'react-icons/fi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS } from './constants';


const Sidebar = () => {
  return (
    <Wrapper>
      <CatLogo src={catLogo}/>
      <NavigationLink exact to='/'>
        <FiHome/>
        <StyledSpan>Home</StyledSpan>
      </NavigationLink>
      <NavigationLink to='/profile/me'>
        <FiUser/>
        <StyledSpan>Profile</StyledSpan>
      </NavigationLink>
      <NavigationLink to='/notifications'>
        <FiBell/>
        <StyledSpan>Notifications</StyledSpan>
      </NavigationLink>
      <NavigationLink to='Bookmarks'>
        <FiBookmark/>
        <StyledSpan>Bookmarks</StyledSpan>
      </NavigationLink>
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

const StyledSpan = styled.span`
  margin-left: 20px;
`;

const CatLogo = styled.img`
  box-sizing: border-box;
  position:relative;
  width: 65px;
  left: -20px;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
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
