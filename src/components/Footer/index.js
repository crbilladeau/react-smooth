import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContainer, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterWrap } from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <h1>About Us</h1>
              <Link to="/signin"></Link>
              <Link to="/signin">How it works</Link>
              <Link to="/signin">Testimonials</Link>
              <Link to="/signin">Careers</Link>
              <Link to="/signin">Investors</Link>
              <Link to="/signin">Terms of Service</Link>
            </FooterLinkItems>

            <FooterLinkItems>
              <h1>Contact Us</h1>
              <Link to="/signin">Contact</Link>
              <Link to="/signin">Support</Link>
              <Link to="/signin">Destinations</Link>
              <Link to="/signin">Sponsorships</Link>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <h1>Videos</h1>
              <Link to="/"></Link>
              <Link to="/">Submit Video</Link>
              <Link to="/">Ambassadors</Link>
              <Link to="/">Agency</Link>
              <Link to="/">Influencer</Link>
            </FooterLinkItems>

            <FooterLinkItems>
              <h1>Social Media</h1>
              <Link to="/">Instagram</Link>
              <Link to="/">Facebook</Link>
              <Link to="/">Youtube</Link>
              <Link to="/">Twitter</Link>
            </FooterLinkItems>
          </FooterLinksWrapper>

        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
