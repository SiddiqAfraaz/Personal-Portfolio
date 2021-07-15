import React, { useEffect } from 'react';
import { Section, SectionDivider, SectionTitle, SectionText, SectionBreak } from '../../styles/GlobalComponents';
import { SpotifyWrapper, SpotifyCode, SongName, SongWrapper, OverlineText, EmojiWrapper, ContentWrapper } from './AboutStyles';

import BGEmoji from './SVG/BGEmoji';
import { spotifySong } from '../../constants/constants';

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <Section>
            <SectionDivider
                id="about"
                data-aos="fade-down" data-aos-offset="100" data-aos-delay="100" data-aos-once="true" />
            <ContentWrapper>
                <div>
                    <SectionTitle
                        data-aos="fade-down" data-aos-offset="100" data-aos-delay="100" data-aos-once="true" >
                        About Me
                    </SectionTitle>
                    <SectionText
                        data-aos="fade-down" data-aos-offset="100" data-aos-delay="200" data-aos-once="true" >
                        I am from Chennai which is in the coast on the glorious Tamil land of India. I taught myself to design and develop websites in my free time. I am currently doing my bachelors in Electronics Engineering in SVCE.
                    </SectionText>
                    <br />
                    <SectionText
                        data-aos="fade-down" data-aos-offset="100" data-aos-delay="300" data-aos-once="true" >
                        Designing and Building Websites became my passion in my college so I kept at it. Personally, I like to listen to songs and explore new stuffs. I am not a spy and do not track any users. So, if you want to get in touch and geek about stuff, say Hi.
                    </SectionText>
                    <SectionBreak />
                    <SpotifyWrapper>
                        <SpotifyCode
                            src={spotifySong.imageCode}
                            alt={spotifySong.name + "-Code"}
                            data-aos="fade-right" data-aos-offset="100" data-aos-delay="400" data-aos-once="true" />
                        <SongWrapper
                            data-aos="fade-right" data-aos-offset="100" data-aos-delay="600" data-aos-once="true" >
                            <OverlineText>Currently Listening to</OverlineText>
                            <SongName
                                onClick={() => window.open(spotifySong.link, "Spotify")}>
                                {spotifySong.name}
                            </SongName>
                        </SongWrapper>
                    </SpotifyWrapper>
                </div>
                <EmojiWrapper
                    data-aos="fade-left" data-aos-offset="100" data-aos-delay="250" data-aos-once="true" >
                    <BGEmoji />
                </EmojiWrapper>
            </ContentWrapper>
            <SectionBreak />
        </Section>
    );
}

export default About;