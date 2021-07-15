import React, { useEffect } from 'react';
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaNodeJs, FaGit, FaServer, FaDatabase, FaFigma, FaPaintBrush, FaSketch, FaMdb } from 'react-icons/fa';
import { Section, SectionDivider, SectionTitle, SectionText, SectionBreak } from '../../styles/GlobalComponents';
import { SkillWrapper, SkillGroup, CenterSkill, Icon, SkillTitle } from './SkillsStyles';

import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <Section>
            <SectionDivider
                id="skills"
                data-aos="fade-down" data-aos-offset="100" data-aos-delay="100" data-aos-once="true" />
            <SectionTitle
                data-aos="fade-down" data-aos-offset="100" data-aos-delay="100" data-aos-once="true" >
                Technologies
            </SectionTitle>
            <SectionText
                data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-once="true" >
                I have worked with various web technologies from Frontend to Backend and from Wireframe to Mockup. Some of them are listed here,
            </SectionText>
            <SectionBreak />
            <SkillWrapper>
                <SkillGroup
                    data-aos="fade-right" data-aos-offset="100" data-aos-delay="200" data-aos-once="true" >
                    <Icon style={{ marginTop: "-15%" }}><FaReact /></Icon>
                    <CenterSkill>
                        <Icon style={{ marginLeft: "-15%" }}><FaHtml5 /></Icon>
                        <SkillTitle>Front-End</SkillTitle>
                        <Icon style={{ marginRight: "-15%" }}> <FaCss3 /></Icon>
                    </CenterSkill>
                    <Icon style={{ marginBottom: "-15%" }}><FaJsSquare /></Icon>
                </SkillGroup>
                <SkillGroup
                    data-aos="fade-down" data-aos-offset="100" data-aos-delay="400" data-aos-once="true" >
                    <Icon style={{ marginTop: "-15%" }}><FaNodeJs /></Icon>
                    <CenterSkill>
                        <Icon style={{ marginLeft: "-15%" }}><FaDatabase /></Icon>
                        <SkillTitle>Back-End</SkillTitle>
                        <Icon style={{ marginRight: "-15%" }}> <FaServer /></Icon>
                    </CenterSkill>
                    <Icon style={{ marginBottom: "-15%" }}><FaGit /></Icon>
                </SkillGroup>
                <SkillGroup
                    data-aos="fade-left" data-aos-offset="100" data-aos-delay="500" data-aos-once="true" >
                    <Icon style={{ marginTop: "-15%" }}><FaFigma /></Icon>
                    <CenterSkill>
                        <Icon style={{ marginLeft: "-15%" }}><FaMdb /></Icon>
                        <SkillTitle>UI/UX</SkillTitle>
                        <Icon style={{ marginRight: "-15%" }}> <FaPaintBrush /></Icon>
                    </CenterSkill>
                    <Icon style={{ marginBottom: "-15%" }}><FaSketch /></Icon>
                </SkillGroup>
            </SkillWrapper>
            <SectionBreak />
        </Section>
    );
}

export default Skills;