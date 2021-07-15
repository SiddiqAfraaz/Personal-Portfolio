import styled from "styled-components";

export const SkillWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

export const SkillGroup = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 200px;
    min-width: 200px;
    justify-content: space-between;
    align-items: center;
    border: ${props => "1px solid " + props.theme.colors.accent1};
    border-radius: 50%;
    margin: 60px;
    @media (min-width: 1280px) {
        height: 15vw;
        width: 15vw;
    }
`;

export const CenterSkill = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const SkillTitle = styled.h3`
    font-size: 1.5rem;
    @media (min-width: 1280px) {
        font-size: 1.5vw;
    }
`;

export const Icon = styled.div`
    padding: 10px;
    background-color: ${props => props.theme.colors.accent1};
    color: ${props => props.theme.colors.background};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    @media (min-width: 1280px) {
        font-size: 3vw;
        padding: 1vw;
    }
`;