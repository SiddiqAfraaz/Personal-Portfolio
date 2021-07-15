import styled from 'styled-components';

export const AOSWrapper = styled.div`
    display: flex;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    @media (min-width: 1280px) {
        flex-direction: row-reverse;
    }
`;

export const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    @media (min-width: 768px) {
        justify-content: space-around;
    }
     @media (min-width: 1280px) {
    flex-direction: column;
    }
`;

export const NavItem = styled.p`
    font-size: 1.8rem;
    opacity: 0.5;
    text-decoration: underline rgba(255, 255, 255, 0);
    transition: text-decoration-color 0.2s, opacity 0.2s;
    &:hover{
        text-decoration-color: rgba(255, 255, 255, 1);
        opacity: 1;
    }
    @media (min-width: 1280px) {
        writing-mode: vertical-lr;
        margin: 0;
        font-size: 1.2vw;
    }
`;

export const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    height: 100%;
    margin-top: auto;
    @media (min-width: 768px) {
        position: relative;
        align-items: center;
    }
`;

export const MainImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5vh 8vh;
    margin: auto 0;
    @media (min-width: 640px) {
        padding: 5vh 28vw;
        width: 30vw;
    }
    @media (min-width: 1280px) {
        padding: 5vh 5vw;
    }
`;

export const UpperText = styled.h1`
    font-size: 6rem;
    font-weight: 700;
    margin: 0;
    @media (min-width: 768px) {
        position: absolute;
        top: 27%;
        left: 14.8%;
        mix-blend-mode: difference;
        font-size: min(7vw, 25rem);
    }
`;
export const LowerText = styled.h1`
    font-size: 6rem;
    font-weight: 700;
    margin: 0;
    @media (min-width: 768px) {
        position: absolute;
        bottom: 37%;
        right: 15.3%;
        mix-blend-mode: difference;
        font-size: min(7vw, 25rem);
    }
`;

export const SubText = styled.p`
    font-size: min(5vw, 2rem);
    font-weight: 400;
    margin: 0;
    opacity: 0.5;
    width: 100%;
    @media (min-width: 768px) {
        text-align: center;
    }
    @media (min-width: 1280px) {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-size: 1.2vw;
    letter-spacing: 0.5vw;
    }
`;

export const SocialWrapper = styled.div`
    display: block;
    @media (min-width: 1280px) {
        display: none;
    }
`;

export const SocialWrapperDesktop = styled.div`
    margin-left: auto;
    display: none;
    @media (min-width: 1280px) {
        display: block;
    }
`;