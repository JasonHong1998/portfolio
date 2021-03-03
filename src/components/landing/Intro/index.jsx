import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h4>Hi, my name is</h4>
          <h1>Jason Hong.</h1>
          <h2>I build things for the web.</h2>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Jason and I’m a Full-Stack engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
