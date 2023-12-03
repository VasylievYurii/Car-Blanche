import React from 'react';
import {
  WelcomeWrapper,
  Logo,
  Wrapper,
  LinkStyled,
  MainText,
  MainDescription,
} from './Welcome.styled';

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <Logo>CarBlanche</Logo>
      <Wrapper>
        <MainText>
          We are the best rental <p>car website</p>
        </MainText>
        <MainDescription>
          Where your dream ride awaits among premium advertisements.
        </MainDescription>
        <LinkStyled to="/advertisement">GO!</LinkStyled>
      </Wrapper>
    </WelcomeWrapper>
  );
};

export default Welcome;
