import styled from "styled-components";

export const SocialDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50vw;
    max-width: 200px;
    @media only screen and (min-width: 1280px) {
        width: 15vw;
        max-width: none;
    }
`;

export const SocialIcon = styled.div`
    font-size: 3.2rem;
    padding: 7px 7px 0 7px;
    transition: all 0.2s;
    border-radius: 50%;
    &:hover{
        background-color: ${props => props.theme.colors.accent1};
        color: ${props => props.theme.colors.background};
    }
    @media only screen and (min-width: 1280px) {
        font-size: 2.5vw;
    }
    @media only screen and (min-width: 1920px) {
        padding: 17px 17px 0 17px;
    }
`;