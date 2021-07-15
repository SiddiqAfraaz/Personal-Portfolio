import React, { useEffect } from 'react';
import { FaGlobeAmericas, FaGithub } from 'react-icons/fa';
import { Section, SectionDivider, SectionTitle, SectionText, SectionBreak } from '../../styles/GlobalComponents';
import { ProjectWrapper, Project, ContentWrapper, ProjectImage, ButtonGroup, Button, ButtonDivider, ContentText, ButtonIcon, ButtonText } from './WorksStyles';

import { projects } from '../../constants/constants';

import AOS from "aos";
import "aos/dist/aos.css";


const Works = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <Section>
            <SectionDivider
                id="works"
                data-aos="fade-down" data-aos-offset="100" data-aos-delay="100" data-aos-once="true" />
            <SectionTitle
                data-aos="fade-down" data-aos-offset="100" data-aos-delay="100" data-aos-once="true" >
                Notable Works
            </SectionTitle>
            <SectionText
                data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-once="true" >
                I have worked on many different kinds of projects. Listed here are some of the my most notable works,
            </SectionText>
            <SectionBreak />
            <ProjectWrapper>
                {projects.map((work, i) => (
                    <Project
                        key={work.id}
                        data-aos="fade-down" data-aos-offset="100" data-aos-delay={300 + (100 * i)} data-aos-once="true" >
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
}

export default Works;