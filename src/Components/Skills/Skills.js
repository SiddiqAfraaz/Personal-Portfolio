import React from 'react';
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaNodeJs, FaGit, FaServer, FaDatabase, FaFigma, FaPaintBrush, FaSketch, FaMdb } from 'react-icons/fa';
import { Section, SectionDivider, SectionTitle, SectionText, SectionBreak } from '../../styles/GlobalComponents';
import { SkillWrapper, SkillGroup, CenterSkill, Icon, SkillTitle } from './SkillsStyles';

const Skills = () => (
    <Section>
        <SectionDivider id="skills" />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>I have worked with various web technologies from Frontend to Backend and from Wireframe to Mockup. Some of them are listed here,</SectionText>
        <SectionBreak />
        <SkillWrapper>
            <SkillGroup>
                <Icon style={{ marginTop: "-15%" }}><FaReact /></Icon>
                <CenterSkill>
                    <Icon style={{ marginLeft: "-15%" }}><FaHtml5 /></Icon>
                    <SkillTitle>Front-End</SkillTitle>
                    <Icon style={{ marginRight: "-15%" }}> <FaCss3 /></Icon>
                </CenterSkill>
                <Icon style={{ marginBottom: "-15%" }}><FaJsSquare /></Icon>
            </SkillGroup>
            <SkillGroup>
                <Icon style={{ marginTop: "-15%" }}><FaNodeJs /></Icon>
                <CenterSkill>
                    <Icon style={{ marginLeft: "-15%" }}><FaDatabase /></Icon>
                    <SkillTitle>Back-End</SkillTitle>
                    <Icon style={{ marginRight: "-15%" }}> <FaServer /></Icon>
                </CenterSkill>
                <Icon style={{ marginBottom: "-15%" }}><FaGit /></Icon>
            </SkillGroup>
            <SkillGroup>
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

export default Skills;