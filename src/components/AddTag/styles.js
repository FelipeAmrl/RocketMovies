import styled from "styled-components";

export const Container = styled.div`
    height:5.6rem;
    
    display: flex;
    align-items: center;
    padding: 1.6rem;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_300};

    border: ${({theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : 'none'};
    border-radius: 10px;

    > input {
        max-width: 16rem;

        background: transparent;
        border: none;
        
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.9rem;
        color: ${({theme}) => theme.COLORS.WHITE_100};

        &::placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }

    > button {
        background: none;
        border: none;
        
        padding-top: .4rem;

        color: ${({theme}) => theme.COLORS.PINK};

        transition: transform 200ms;

        svg {
            font-size: 1.9rem;
        }

        &:hover{
            transform: scale(1.2)
        }
    }
`