import styled from "styled-components";

export const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Project = styled.div`
    position: relative;
    border: ${(props) => (`2px solid ${props.theme.colors.accent1}`)};
    border-radius: 30px;
    padding-bottom: 50px;
    overflow: hidden;
    margin-bottom: 20px;
    width: calc(100% - 3vw);
    @media (min-width: 1280px) {
        padding: 1vw;
    }
    
`;


export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    @media (min-width: 1280px) {
        flex-direction: row; 
        padding: 0;
        align-items: center;
    }
`;

export const ProjectImage = styled.img`
    width: 70px;
    @media (min-width: 1280px) {
        width: 5.76vw;
        height: 4.12vw;
        margin: auto 2vw;
    }
`;

export const ContentText = styled.div`
    @media (min-width: 1280px) {
        height: 100%;
        margin: auto 0;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0;
    background-color: ${props => props.theme.colors.accent1};
    transition: height 0.2s ease-out;
    
    ${Project}:hover & {
        height: 54px;
    }
    
    @media (min-width: 1280px) {
        right: 0; 
        width: 0;
        height: 100%;
        transition: width 0.2s ease-out;
        ${Project}:hover & {
            width: 20%;
            height: 100%;
        }
    }
`;

export const Button = styled.button`
    flex:1;
    height: 100%;
    display: none;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: ${props => props.theme.colors.accent1};
    color: ${props => props.theme.colors.background};
    text-align: center;
    
    opacity: 1;
    &:hover{
        background-color: ${props => props.theme.colors.accent2};
    }
    ${Project}:hover & {
        display: flex;
    }
`;

export const ButtonIcon = styled.div`
    font-size: 3rem;
    margin: 7px 5px 0 5px;
    @media (min-width: 1280px) {
        font-size: 3vw;
    }
`;

export const ButtonText = styled.p`
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    @media (min-width: 1280px) {
        display: none;
    }
`;

export const ButtonDivider = styled.div`
    background-color: ${props => props.theme.colors.background};
    opacity: 0.2;
    height: 30%;
    width: 2px
`;