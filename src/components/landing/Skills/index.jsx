import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/profilepic.jpg';
import { Wrapper, SkillsWrapper, Details, Thumbnail, ProfilePic, ButtonWrapper } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <ProfilePic src={dev} alt="I’m Jason and I’m a Full-Stack engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Who am I?</h1>
          <p>
            Hello! I'm a software engineer based in LA that enjoys working across the stack to build powerful and
            efficient solutions. I get excited about optimizations that improve performance and client-centered product
            design. Did I mention that nothing is more satsifying than pixel-perfect websites? They just make me go{' '}
            <b>*chef's kiss*</b>
          </p>
          <h1>Do I have a life outside of work?</h1>
          <p>
            I live by the words "work hard, play hard." Although these days I've been working hard<b>ER</b> than I've
            been playing, in my spare time, you can find me dancing to k-pop, binge-watching shows on Netflix, and
            simply sharing fellowship with my friends and family.
          </p>
          <ButtonWrapper>
            <Button as={AnchorLink} href="#contact">
              I'm Sold
            </Button>
            <p>-or-</p>
            <Button as={AnchorLink} href="#applications">
              Convince Me More
            </Button>
          </ButtonWrapper>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
