import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { 
    FaFacebook, 
    FaInstagram, 
    FaYoutube, 
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink, 
    SocialMedia, 
    SocialMediaWrap,
    SocialLogo, 
    WebsiteRights,
    SocialIcons,
    SocialIconsLink
} from './FooterElements';

const toggleHome = () => {
    scroll.scrollToTop();
} ;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo 
                            to='/'
                            onClick={toggleHome}
                        >
                            dolla
                        </SocialLogo>
                        <WebsiteRights>
                            dolla {new Date().getFullYear()}
                            All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconsLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook/>
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram/>
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target='_blank' aria-label='Youtube'>
                                <FaYoutube/>
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target='_blank' aria-label='Twitter'>
                                <FaTwitter/>
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin/>
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
