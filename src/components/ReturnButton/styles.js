import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
    display: flex;
    align-items: center;
    gap: .8rem;

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.1rem;

    color: ${({theme}) => theme.COLORS.PINK};

    > svg {
        font-size: 2rem;
    }
`