import React from 'react';
import { } from 'react-icons/fa';
import { Section, SectionDivider, SectionTitle, SectionText, SectionBreak } from '../../styles/GlobalComponents';
import { SpotifyWrapper, SpotifyCode, SongName, SongWrapper, OverlineText, EmojiWrapper, ContentWrapper } from './AboutStyles';

import BGEmoji from './SVG/BGEmoji';
import { spotifySong } from '../../constants/constants';

const About = () => (
    <Section>
        <SectionDivider id="about" />
        <ContentWrapper>
            <div>
                <SectionTitle>About Me</SectionTitle>
                <SectionText>I am from Chennai which is in the coast on the glorious Tamil land of India. I taught myself to design and develop websites in my free time. I am currently doing my bachelors in Electronics Engineering in SVCE. <br />
                    <br />Designing and Building Websites became my passion in my college so I kept at it. Personally, I like to listen to songs and explore new stuffs. I am not a spy and do not track any users. So, if you want to get in touch and geek about stuff, say Hi.</SectionText>
                <SectionBreak />
                <SpotifyWrapper>
                    <SpotifyCode src={spotifySong.imageCode} />
                    <SongWrapper>
                        <OverlineText>Currently Listening to</OverlineText>
                        <SongName
                            onClick={() => window.open(spotifySong.link, "Spotify")}>
                            {spotifySong.name}
                        </SongName>
                    </SongWrapper>
                </SpotifyWrapper>
            </div>
            <EmojiWrapper>
                <BGEmoji />
            </EmojiWrapper>
        </ContentWrapper>
        <SectionBreak />
    </Section>
);

export default About;