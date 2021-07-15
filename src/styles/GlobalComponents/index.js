import styled from 'styled-components';

export const Container = styled.div`
    overflow: hidden;
    padding: 2.5rem;
    @media only screen and (min-width: 1280px) {
        padding: 3vw;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (max-width: 539px) {
        height: ${(props) => (props.hero && "87vh")};
    }
    @media only screen and (min-width: 1280px) {
        height: ${(props) => (props.hero && "90vh")};
    }
`;

export const SectionDivider = styled.div`
    width: 32px;
    height: 5px;
    background-color: ${(props) => props.theme.colors.accent1};;
    flex-shrink: 0;
    margin-bottom: 1vh;
    margin-top: ${(props) => (props.nomargin ? 0 : "70px")};
    @media only screen and (min-width: 1280px) {
        width: 2.4vw;
        height: 0.4vw;
    }
`;

export const SectionTitle = styled.h4`
    font-size: ${(props) => (props.small ? "min(6vw, 2rem)" : "min(10vw, 3.5rem)")};
    font-weight: 700;
    margin: 0;
    @media only screen and (min-width: 1280px) {
        font-size: ${(props) => (props.small ? "min(1.5vw, 5rem)" : "min(2.5vw, 6.5rem)")};
    }
`;

export const SectionBreak = styled.div`
    width: 100%;
    height: 2.5vw;
    @media only screen and (min-width: 1920px) {
        height: 4vw;
    }
`;

export const SectionText = styled.p`
    margin: 0;
    margin-top: 10px;
    font-size: 2rem;
    @media only screen and (min-width: 1280px) {
        font-size: 1.5vw;
    }
`;