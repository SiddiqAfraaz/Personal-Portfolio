import React from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SocialDiv, SocialIcon } from './SocialBarStyles';

import { socialHandles } from '../../constants/constants';

const SocialBar = () => (
    <SocialDiv>
        <SocialIcon
            onClick={() => window.open(socialHandles.instagram, "Instagram")}>
            <FaInstagram />
        </SocialIcon>
        <SocialIcon
            onClick={() => window.open(socialHandles.linkedin, "Twitter")}>
            <FaLinkedinIn />
        </SocialIcon>
        <SocialIcon
            onClick={() => window.open(socialHandles.github, "Github")}>
            <FaGithub />
        </SocialIcon>
    </SocialDiv>
);

export default SocialBar;