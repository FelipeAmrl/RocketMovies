import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height:100vh;

    display: grid;
    grid-template-rows: 11.6rem 6.1rem auto;
    grid-template-areas:
    "header"
    "wrapper"
    "content";

    .wrapper {
        width: 113.7rem;
        margin: 4rem auto 0;
    }

    .button-wrapper {
        grid-area: wrapper;
        width: 10rem;
    }

    > main {
        max-width: 113.7rem;
        margin: 2.4rem auto 10rem;
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