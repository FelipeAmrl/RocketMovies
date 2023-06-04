import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    width: 100%;
    height: 11.6rem;

    display: flex;
    align-items: center;
    gap: 6.4rem;

    padding: 2.4rem 12.3rem;

    border-bottom:
        1px solid ${({theme}) => theme.COLORS.GRAY_700};

    > #logo {
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 3.2rem;

        color: ${({theme}) => theme.COLORS.PINK};
    }
`
export const Profile = styled.div`
    
    display: flex;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;

        strong {
            font-size: 1.4rem;
            line-height: 1.8rem;
            white-space: nowrap;
            color: ${({theme}) => theme.COLORS.WHITE_100};
        }

        button {
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 1.8rem;
            
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
            color: ${({theme}) => theme.COLORS.GRAY_300};

            border: none;
            text-align: right;
        }
    }

    > a {
        img {
            width: 6.4rem;
            height: 6.4rem;
            margin-left: .9rem;

            border:
                1px solid ${({theme}) => theme.COLORS.GRAY_700};
            border-radius: 50%;
        }
    }
`