import React, {useState} from 'react';
import video from '../../video/video.mp4';
import { HeroContainer, HeroBg, HeroContent, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroStyles';
import {Button} from '../ButtonStyles';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <video autoPlay loop muted src={video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <h1>Virtual Banking Made Easy</h1>
          <p>Sign up for a new account today and receive $250 in credit towards your next payment.</p>
          <HeroBtnWrapper>
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default HeroSection
