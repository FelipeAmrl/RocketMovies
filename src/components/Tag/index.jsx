/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Tag({name, isAtHome, ...rest})
{
    return (
        <Container 
            isAtHome={isAtHome}
            {...rest}    
        >
            {name}
        </Container>
    );
}