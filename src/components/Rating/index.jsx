/* eslint-disable react/prop-types */
import { Container } from "./styles";

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export function Rating({rating, isAtHome})
{
    if(!rating)
        return

    let stars = [];

    for(let i = 0; i < 5; i++)
    {
        const star = i < rating ? <AiFillStar key={i}/> : <AiOutlineStar key={i}/>;
        stars.push(star);
    }

    return (
        <Container isAtHome={isAtHome}>
            {stars.map(star => star)}      
        </Container>
    );
}