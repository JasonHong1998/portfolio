import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper, StyledAnchorLink } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <StyledAnchorLink href="#about">About</StyledAnchorLink>
      <StyledAnchorLink href="#applications">Applications</StyledAnchorLink>
      <StyledAnchorLink href="#contact">Contact</StyledAnchorLink>
      <ToggleTheme />
    </Wrapper>
  );
};

export default NavbarLinks;
