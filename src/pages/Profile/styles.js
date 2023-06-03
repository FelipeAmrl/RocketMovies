import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > header {
        height: 14.4rem;
        padding: 0 14.4rem;

        display: flex;
        align-items: center;

        background: ${({theme}) => theme.COLORS.BACKGROUND_100};
    }

    > main {
        max-width: 34rem;
        margin: 0 auto;
    }
`
export const Form = styled.form`
    margin: -9.3rem 0 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;

    div:nth-child(3) {
        margin-bottom: 1.6rem;
    }
`
export const Avatar = styled.div`
    width: 18.6rem;
    height: 18.6rem;

    margin-bottom: 5.6rem;

    position: relative;

    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;
        
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${({theme}) => theme.COLORS.PINK};
        color: ${({theme}) => theme.COLORS.BACKGROUND_800};

        position: absolute;
        bottom: 7px;
        right: 7px;
        
        cursor: pointer;

        input {
            display: none;
        }
    }
`