import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: ${({isAtHome}) => isAtHome ? "4.8rem" : "5.6rem"};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;

    border: none;
    border-radius: 10px;

    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND_500};

    > svg {
        color: ${({theme}) => theme.COLORS.BACKGROUND_500};
        background: none;
    }
`