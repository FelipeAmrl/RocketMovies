import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-height: 22.2rem;
    padding: 3.2rem;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_100};

    border-radius: 16px;

    h2 {
        font-size:2.4rem;
        font-weight: 700;
        line-height: 3.2rem;

        margin-bottom: .8rem;
    }

    > p {
        max-height: 5.2rem;
        margin: 1.5rem 0;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        overflow: hidden;
        text-overflow: ellipsis;

        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        line-height: 1.9rem;
        font-weight: 400;
        text-align: justify;
        color: ${({theme}) => theme.COLORS.GRAY_500};
    }

    > footer {
        display: flex;
    }
`