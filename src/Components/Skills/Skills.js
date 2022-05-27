import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGit,
  FaServer,
  FaFigma,
} from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobexd,
  SiAdobephotoshop,
  SiMongodb,
} from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
  SectionBreak,
} from "../../styles/GlobalComponents";
import {
  SkillWrapper,
  SkillGroup,
  CenterSkill,
  Icon,
  SkillTitle,
} from "./SkillsStyles";

import AOS from "aos";
import "aos/dist/aos.css";
import react from "react";
import { icons } from "react-icons";

const Skills = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Section>
      <SectionDivider
        id="skills"
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-delay="100"
        data-aos-once="true"
      />
      <SectionTitle
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-delay="100"
        data-aos-once="true"
      >
        Technologies
      </SectionTitle>
      <SectionText
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-delay="200"
        data-aos-once="true"
      >
        I have worked with various web technologies from Frontend to Backend and
        from Wireframe to Mockup. Some of them are listed here,
      </SectionText>
      <SectionBreak />
      <SkillWrapper>
        <SkillGroup
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <Icon style={{ marginTop: "-15%" }}>
            <FaReact />
          </Icon>
          <CenterSkill>
            <Icon style={{ marginLeft: "-15%" }}>
              <FaHtml5 />
            </Icon>
            <SkillTitle>Front-End</SkillTitle>
            <Icon style={{ marginRight: "-15%" }}>
              {" "}
              <FaCss3 />
            </Icon>
          </CenterSkill>
          <Icon style={{ marginBottom: "-15%" }}>
            <FaJsSquare />
          </Icon>
        </SkillGroup>
        <SkillGroup
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="400"
          data-aos-once="true"
        >
          <Icon style={{ marginTop: "-15%" }}>
            <FaNodeJs />
          </Icon>
          <CenterSkill>
            <Icon style={{ marginLeft: "-15%" }}>
              <SiMongodb />
            </Icon>
            <SkillTitle>Back-End</SkillTitle>
            <Icon style={{ marginRight: "-15%" }}>
              {" "}
              <FaServer />
            </Icon>
          </CenterSkill>
          <Icon style={{ marginBottom: "-15%" }}>
            <FaGit />
          </Icon>
        </SkillGroup>
        <SkillGroup
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <Icon style={{ marginTop: "-15%" }}>
            <FaFigma />
          </Icon>
          <CenterSkill>
            <Icon style={{ marginLeft: "-15%" }}>
              <SiAdobeillustrator />
            </Icon>
            <SkillTitle>UI/UX</SkillTitle>
            <Icon style={{ marginRight: "-15%" }}>
              {" "}
              <SiAdobephotoshop />
            </Icon>
          </CenterSkill>
          <Icon style={{ marginBottom: "-15%" }}>
            <SiAdobexd />
          </Icon>
        </SkillGroup>
      </SkillWrapper>
      <SectionBreak />
    </Section>
  );
};

export default Skills;
