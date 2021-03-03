import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop, toggle, sidebar }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink onClick={() => toggle(!sidebar)} theme={theme} href="#about">
        About
      </AnchorLink>
      <AnchorLink onClick={() => toggle(!sidebar)} theme={theme} href="#applications">
        Applications
      </AnchorLink>
      <AnchorLink onClick={() => toggle(!sidebar)} theme={theme} href="#contact">
        Contact
      </AnchorLink>
      <ToggleTheme />
    </Wrapper>
  );
};

export default NavbarLinks;
