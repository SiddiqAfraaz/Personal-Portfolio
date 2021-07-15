import React from 'react';
import SocialBar from '../SocialBar/SocialBar';
import { BottomLine, FooterSection, Overline, SocialContainer, Text } from './FooterStyles';

const Footer = () => (
    <FooterSection>
        <Overline>PING ME!</Overline>
        <Text
            onClick={() => window.open("mailto:siddiqafraaz@gmail.com", "SiddiqAfraaz")}>
            siddiqafraaz@gmail.com
        </Text>
        <br />
        <Overline>I LIVE IN</Overline>
        <Text
            onClick={() => window.open("https://goo.gl/maps/4A2yL8ezPyQ5YHFh7", "Chennai-India")}>
            Chennai, India
        </Text>
        <SocialContainer>
            <SocialBar />
        </SocialContainer>
        <BottomLine>Outcome is All that Matters!</BottomLine>
    </FooterSection>
);

export default Footer;