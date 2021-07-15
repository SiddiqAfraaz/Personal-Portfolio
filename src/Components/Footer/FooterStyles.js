import styled from "styled-components";

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`;

export const FooterDivider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.accent1};;
    flex-shrink: 0;
    margin-bottom: 1vh;
    opacity: 0.2;
`;

export const Overline = styled.p`
    font-size: 1rem;
    @media (min-width: 1280px) {
        font-size: 0.8vw;
    }
`;

export const Text = styled.p`
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    text-decoration: underline rgba(255, 255, 255, 0);
    transition: text-decoration-color 0.2s;
    &:hover{
        text-decoration-color: rgba(255, 255, 255, 1);
    }
    @media (min-width: 1280px) {
        font-size: 1.5vw;
    }
`;

export const SocialContainer = styled.div`
    margin-left: auto;
    padding: 20px 0;
`;

export const BottomLine = styled.p`
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
    opacity: 0.6;
    @media (min-width: 1280px) {
        font-size: 1.2vw;
        text-align: left;
    }
`;