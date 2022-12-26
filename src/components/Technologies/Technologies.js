import React from 'react';
import { DiReact, DiDatabase, DiAngularSimple, DiNodejsSmall, DiMongodb } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { FiFigma  } from 'react-icons/fi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide range of technologies in the web development world.
      <br />
       from Front-end to Back-end.
    </SectionText>
    <List>
      {/* Item 1 */}
      <ListItem>
        <div>
          <SiTypescript size="3rem"/>
          <DiReact size='3rem'/>
          <DiAngularSimple size='3rem'/>
        </div>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with 
          <br/>
          React.js and Angular
        </ListParagraph>
      </ListContainer>
      {/* Item 2 */}
      </ListItem>
      <ListItem>
        <div>
          <DiDatabase size='3rem'/>
          <DiNodejsSmall size='3rem'/>
          <DiMongodb size='3rem'/>
        </div>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with 
          <br/>
          Node.js and Databases
        </ListParagraph>
      </ListContainer>
      </ListItem>
      {/* Item 3 */}
      <ListItem>
      <FiFigma size='3rem'/>
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with 
          <br/>
          Figma
        </ListParagraph>
      </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
