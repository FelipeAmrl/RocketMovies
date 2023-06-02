import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 22.7rem;

    resize: none;

    background-color:${({theme}) => theme.COLORS.BACKGROUND_300 };
    border: none;
    border-radius: 10px;

    padding: 1.9rem 1.6rem;

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.9rem;

    color: ${({theme}) => theme.COLORS.WHITE_100};

    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
`