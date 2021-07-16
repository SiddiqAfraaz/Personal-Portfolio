import React, { useEffect } from 'react';
import BGImage from './SVG/BGImage';
import SocialBar from '../SocialBar/SocialBar';
import { AOSWrapper, HeaderWrapper, NavBar, NavItem, MainImage, UpperText, LowerText, SubText, HeroWrapper, BodyWrapper, SocialWrapper, SocialWrapperDesktop } from './HeroStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <Section id="home" hero >
            <SectionDivider
                nomargin
                data-aos="fade-down" data-aos-delay="600" data-aos-once="true" />
            <HeaderWrapper>
                <SectionTitle small
                    data-aos="fade-down" data-aos-delay="600" data-aos-once="true" >
                    PERSONAL <br />
                    PORTFOLIO
                </SectionTitle>
                <SocialWrapper
                    data-aos="fade-down" data-aos-delay="1000" data-aos-once="true" >
                    <SocialBar />
                </SocialWrapper>
            </HeaderWrapper>
            <BodyWrapper>
                <NavBar>
                    <AOSWrapper data-aos="fade-down" data-aos-delay="700" data-aos-once="true">
                        <NavItem
                            onClick={() => window.location.href = "#works"}>
                            WORKS
                        </NavItem>
                    </AOSWrapper>
                    <AOSWrapper data-aos="fade-down" data-aos-delay="800" data-aos-once="true">
                        <NavItem
                            onClick={() => window.location.href = "#skills"}>
                            SKILLS
                        </NavItem>
                    </AOSWrapper>
                    <AOSWrapper data-aos="fade-down" data-aos-delay="900" data-aos-once="true">
                        <NavItem
                            onClick={() => window.location.href = "#about"}>
                            ABOUT
                        </NavItem>
                    </AOSWrapper>
                </NavBar>
                <HeroWrapper>
                    <MainImage
                        data-aos="fade-down" data-aos-delay="50" data-aos-once="true" data-aos-offset="-50">
                        <BGImage />
                    </MainImage>
                    <div>
                        <UpperText data-aos="fade-down" data-aos-delay="300" data-aos-once="true" data-aos-offset="-50">
                            Siddiq
                        </UpperText>
                        <LowerText data-aos="fade-down" data-aos-delay="400" data-aos-once="true" data-aos-offset="-50">
                            Afraaz
                        </LowerText>
                    </div>
                </HeroWrapper>
                <AOSWrapper data-aos="fade-down" data-aos-delay="800" data-aos-once="true" data-aos-offset="-50">
                    <SubText>WEB DESIGNER + DEVELOPER</SubText>
                </AOSWrapper>
            </BodyWrapper>
            <SocialWrapperDesktop data-aos="fade-down" data-aos-delay="1000" data-aos-once="true" data-aos-offset="-50">
                <SocialBar />
            </SocialWrapperDesktop>
        </Section>
    );
}

export default Hero;