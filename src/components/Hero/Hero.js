import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Ben Dako<br />
        Fullstack Developer.
      </SectionTitle>
        <SectionText>lorem ipsum dolor sit amet, consectetur adipiscing elit.
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </SectionText>
        <Button>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;