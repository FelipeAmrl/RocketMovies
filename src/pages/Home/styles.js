import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem 13.2rem auto;
    grid-template-areas:
    "header"
    "wrapper"
    "content";

    .wrapper {
        grid-area: wrapper;

        display: flex;
        justify-content: space-between;

        padding: 5.038rem 0 4.045rem;
        margin: 0 12.3rem;

        button {
            width: 20.7rem;
        }
    }

    > main {
        grid-area: content;
        
        margin: 0 12.3rem 5.8rem;
        padding-right:  .4rem;
        
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 1.6rem;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({theme}) => theme.COLORS.PINK};
            border-radius: 999px;
            border: 4px solid ${({theme}) => theme.COLORS.BACKGROUND_500};
        }
    } 
`