import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.GRAY_800};
    
    padding: .8rem 1.6rem ;
    margin-right: .8rem;
    
    border-radius: 8px;
    
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.4rem;
    text-align: center;

    color: ${({theme}) => theme.COLORS.WHITE_200};
`