/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Tag({title, isAtHome})
{
    return (
        <Container isAtHome={isAtHome}>
            {title}
        </Container>
    );
}