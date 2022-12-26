import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Ben Dako<br />
        Fullstack Developer.
      </SectionTitle>
        <SectionText>
          <p>
            Qualified full-stack developer passionate about writing code,
            solving problems, and creating a better user experience.
            Having a high ambition for learning new technologies and working
            with teams to create user-friendly web applications. Eager to
            develop skills in a fast-paced environment and contribute to a
            company's success.
          </p>
        </SectionText>
        <Button>
            <a href="#contact">
              Contact Me
            </a>
          </Button>
    </LeftSection>
  </Section>
);

export default Hero;