import styled from "styled-components";

export const Container = styled.a`
    display: flex;
    align-items: center;
    gap: .8rem;

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.1rem;

    color: ${({theme}) => theme.COLORS.PINK};

    > svg {
        font-size: 2rem;
    }
`