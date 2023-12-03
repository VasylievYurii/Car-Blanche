import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderNavigation,
  Logo,
  StyledLink,
  MdCarRentalStyled,
  FaHeartStyled,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo>CarBlanche</Logo>
      </Link>
      <HeaderNavigation>
        <StyledLink to="/advertisement">
          <MdCarRentalStyled />
        </StyledLink>
        <StyledLink to="/advertisement/favorites">
          <FaHeartStyled />
        </StyledLink>
      </HeaderNavigation>
    </HeaderWrapper>
  );
};

export default Header;
