import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => lightBg ? '#f9f9f9' : '#010606'};

  @media screen and (max-width: 768px) {
    padding: 6.3rem 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 1.5rem;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 760px) {
    grid-template-areas: ${({imgStart}) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 1rem;
  padding: 0 1rem;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 1rem;
  padding: 0 1rem;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 3.8rem;


`;

export const Headline = styled.h1`
    margin-bottom: 1.5rem;
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => lightText ? '#f7f8fa' : '#010606'};

    @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`    
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 1.5rem;
  color: ${({darkText}) => darkText ? '#010606' : '#fff'};
`;


export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;

  img {
    width: 100%;
    margin: 0 0 0.7rem 0;
    padding-right: 0;
  }
`;