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
    }
    
    > input {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_300};
        border: none;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }
`