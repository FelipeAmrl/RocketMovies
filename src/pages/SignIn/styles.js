import styled from "styled-components";

import background from '../../assets/Background.png';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: stretch;
`
export const Form = styled.form`
    margin: auto 0;
    padding: 0 14.85rem;

    display: flex;
    flex-direction: column;

    > h1 {
        font-size: 4.8rem;
        font-weight: 700;
        line-height: 6.3rem;
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > p {
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.8rem;
        color:  ${({theme}) => theme.COLORS.GRAY_200};
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3.2rem;

        margin: 4.8rem 0;
    }

    > div {
        margin-bottom: .8rem;
    }

    > button {
        margin: 2.4rem 0 4.2rem;
    }

    > a {
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.PINK};
        
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.1rem;
        
        align-self: center;
    }
    
`
export const Background = styled.div`
    background: url(${background}) no-repeat center center;
    background-size: cover;
    flex: 1;
`