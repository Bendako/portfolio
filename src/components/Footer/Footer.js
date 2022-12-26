import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, SocialContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:(+972)54-625-5880'>(+972)54-625-5880</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-Mail</LinkTitle>
          <LinkItem href='mailto:bendk1994@gmail.com'>bendk1994@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <SocialIcons href='https://github.com/Bendako' target="_blank">
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/bendako/' target="_blank">
          <AiFillLinkedin size='3rem' />
        </SocialIcons> 
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
