import styled from "styled-components";

export const SpotifyWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const SpotifyCode = styled.img`
    width: 45vw;
    max-width: 250px;
    @media only screen and (min-width: 1280px) {
        width: 17vw;
        max-width: none;
    }
`;

export const SongWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const OverlineText = styled.p`
    font-size: min(3vw, 2rem);
    padding: 10px;
    padding-bottom: 0;
    margin: 0;
    @media only screen and (min-width: 1280px) {
        font-size: 1.1vw;
    }
`;

export const SongName = styled.h4`
    font-size: min(6vw, 3rem);
    padding: 10px;
    padding-top: 0;
    margin: 0;
    text-decoration: underline rgba(255, 255, 255, 0);
    transition: text-decoration-color 0.2s;
    &:hover{
        text-decoration-color: rgba(255, 255, 255, 1);
    }
    @media only screen and (min-width: 1280px) {
        font-size: 1.8vw;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const EmojiWrapper = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    width: 65%;
    margin: 0.5vw 0 0 4vw;
    @media only screen and (min-width: 1280px) {
        display: flex;
    }
`;