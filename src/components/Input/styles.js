import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 5.6rem;

    display: flex;
    align-items: center;
    gap: 1.2rem;

    padding: 1.9rem 1.6rem;
    border-radius: 10px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_300};

    > svg {
        background: none;
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
    
    > input {
        width: 100%;

        background-color: ${({theme}) => theme.COLORS.BACKGROUND_300};
        border: none;

        font-size:  1.6rem;
        font-weight: 400;
        line-height: 1.8rem;

        color: ${({theme}) => theme.COLORS.WHITE_100};

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }
`