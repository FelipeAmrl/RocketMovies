import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem 6.1rem auto;
    grid-template-areas:
    "header"
    "wrapper"
    "content";

    .button-wrapper {
        grid-area: wrapper;
        display: flex;
        justify-content: space-between;
        margin: 4rem 12.3rem 0;

        > button:nth-child(2)
        {
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 2.1rem;

            color: ${({theme}) => theme.COLORS.PINK};

            background: none;
            border: none;
        }
    }

    > main {
        margin: 2.4rem 12.3rem 10rem;
        overflow-y: auto;

        grid-area: content;
        margin-top: 2.4rem;
        
        .title {
            display: flex;
            gap: 1.9rem;
            margin-bottom: 2.4rem;

            h1 {
                font-size: 3.6rem;
                font-weight: 500;
                line-height: 4.7rem;
            }
        }

        .date {
            display: flex;
            align-items: center;
            gap: .8rem;

            span {
                font-family: 'Roboto' sans-serif;
                font-size: 1.6rem;
                line-height: 1.9rem;
            }

            svg {
                color: ${({theme}) => theme.COLORS.PINK};
            }
        }

        .tag-wrapper {
            display: flex;
            align-items: center;

            margin: 4rem 0;
        }

        &::-webkit-scrollbar {
            width: 1.2rem;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({theme}) => theme.COLORS.PINK};
            border-radius: 999px;
            border: 2px solid ${({theme}) => theme.COLORS.BACKGROUND_500};
        }
    }
`