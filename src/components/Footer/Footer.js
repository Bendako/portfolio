import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, SocialContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:111-111-1111'>111-111-1111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-Mail</LinkTitle>
          <LinkItem href='mailto:bendk1994@gmail.com'>bendk1994@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <SocialIcons href='/'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='/'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons> 
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
