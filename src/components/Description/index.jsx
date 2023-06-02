/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Description({content})
{
    return (
        <Container>
            <p>{content}</p>
        </Container>    
    );
}