import React, { useEffect } from 'react';
import BGImage from './SVG/BGImage';
import SocialBar from '../SocialBar/SocialBar';
import { HeaderWrapper, NavBar, NavItem, MainImage, UpperText, LowerText, SubText, HeroWrapper, BodyWrapper, SocialWrapper, SocialWrapperDesktop } from './HeroStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <Section id="home" hero>
            <SectionDivider nomargin />
            <HeaderWrapper>
                <SectionTitle small>
                    PERSONAL<br />
                    PORTFOLIO
                </SectionTitle>
                <SocialWrapper>
                    <SocialBar />
                </SocialWrapper>
            </HeaderWrapper>
            <BodyWrapper>
                <NavBar>
                    <NavItem
                        onClick={() => window.location.href = "#works"}>
                        WORKS
                    </NavItem>
                    <NavItem
                        onClick={() => window.location.href = "#skills"}>
                        SKILLS
                    </NavItem>
                    <NavItem
                        onClick={() => window.location.href = "#about"}>
                        ABOUT
                    </NavItem>
                </NavBar>
                <HeroWrapper>
                    <MainImage>
                        <BGImage />
                    </MainImage>
                    <div>
                        <UpperText>Siddiq</UpperText>
                        <LowerText>Afraaz</LowerText>
                    </div>
                </HeroWrapper>
                <SubText>WEB DESIGNER + DEVELOPER</SubText>
            </BodyWrapper>
            <SocialWrapperDesktop>
                <SocialBar />
            </SocialWrapperDesktop>
        </Section>
    );
}

export default Hero;