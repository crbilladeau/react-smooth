import React from 'react';
import { Link } from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa';
import { FooterContainer, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterWrap, SocialIcons, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterStyles';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

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
              <a to="/">Instagram</a>
              <a to="/">Facebook</a>
              <a to="/">Youtube</a>
              <a to="/">Twitter</a>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <Link to='/' onClick={toggleHome}>
              bitcash
            </Link>
            <WebsiteRights>cashbit © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <a href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </a>
              <a href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </a>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
