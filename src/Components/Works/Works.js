import React from 'react';
import { FaGlobeAmericas, FaGithub } from 'react-icons/fa';
import { Section, SectionDivider, SectionTitle, SectionText, SectionBreak } from '../../styles/GlobalComponents';
import { ProjectWrapper, Project, ContentWrapper, ProjectImage, ButtonGroup, Button, ButtonDivider, ContentText, ButtonIcon, ButtonText } from './WorksStyles';

import { projects } from '../../constants/constants';

const Works = () => (
    <Section>
        <SectionDivider id="works" />
        <SectionTitle>Notable Works</SectionTitle>
        <SectionText>I have worked on many different kinds of projects. Listed here are some of the my most notable works,</SectionText>
        <SectionBreak />
        <ProjectWrapper>
            {projects.map((work) => (
                <Project key={work.id}>
                    <ContentWrapper>
                        <ProjectImage src={work.image} alt={work.title + "-logo"} />
                        <br />
                        <ContentText>
                            <SectionTitle>{work.title}</SectionTitle>
                            <SectionText>{work.description}</SectionText>
                        </ContentText>
                    </ContentWrapper>
                    <ButtonGroup>
                        <Button
                            onClick={() => window.open(work.visit, work.title)}>
                            <ButtonIcon><FaGlobeAmericas /></ButtonIcon> <ButtonText>VISIT SITE</ButtonText>
                        </Button>
                        <ButtonDivider />
                        <Button
                            onClick={() => window.open(work.source, work.title + "-Github")}>
                            <ButtonIcon><FaGithub /></ButtonIcon><ButtonText>VIEW CODE</ButtonText>
                        </Button>
                    </ButtonGroup>
                </Project>
            ))}
        </ProjectWrapper>
        <SectionBreak />
    </Section >

);

export default Works;