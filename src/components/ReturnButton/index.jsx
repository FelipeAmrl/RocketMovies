/* eslint-disable react/prop-types */
import { Container } from './styles';

import { FiArrowLeft } from 'react-icons/fi';

export function ReturnButton({title, ...rest})
{
    return (
        <Container {...rest}>
            <FiArrowLeft/>
            {title}
        </Container>
    );
}