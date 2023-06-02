import styled from "styled-components";

export const Container = styled.div`
    
    display: flex;
    align-items: center;
    gap: ${({isAtHome}) => isAtHome ? ".6rem" : "1rem"};

    > svg {
        height: ${({isAtHome}) => isAtHome ? "1.2rem" : "2rem"};
        color: ${({theme}) => theme.COLORS.PINK};
    }  
`