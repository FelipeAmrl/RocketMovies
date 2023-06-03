import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem 6.1rem auto;
    grid-template-areas:
    "header"
    "wrapper"
    "content";

    .wrapper {
        width: 113.7rem;
        margin: 4rem 0 0 12.3rem;
    }

    .return-wrapper {
        grid-area: wrapper;
        width: 10rem;
    }

    > main {
        max-width: 133.7rem;
        margin: 2.4rem 12.3rem 10rem;
        padding-right: .5rem;
        overflow-y: auto;

        grid-area: content;
        margin-top: 2.4rem;

        h1 {
            font-size: 3.6rem;
            font-weight: 500;
            line-height: 4.7rem;
        }

        .input-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4rem;
            margin: 4rem 0;
        }

        > footer {
            margin-top: 4rem;

            h2 {
                font-size: 2rem;
                font-weight: 400;
                line-height: 2.6rem;

                color: ${({theme}) => theme.COLORS.GRAY_500};
            }

            .tag-wrapper {
                width: 100%;
                padding: 1.6rem;
                border-radius: 8px;
                
                display: flex;
                gap: 2.4rem;

                margin: 2.4rem 0 4rem;

                background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
            }

            .button-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 4rem;
            }
        }

        .roboto {
            font-family: 'Roboto', sans-serif;
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