import React from 'react';
import { Button } from '../ButtonStyles';
import { BtnWrap, Column1, Column2, Headline, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoStyles';

const InfoSection = ({lightBg, imgStart, img, alt, lightText, topLine, headline, id, darkText, description, buttonLabel, primary, dark, dark2}) => {
  return (
    <>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Headline lightText={lightText}>{headline}</Headline>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button 
                    to="home" 
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 :0}
                    dark2={dark2 ? 1 : 0}
                    >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection;
