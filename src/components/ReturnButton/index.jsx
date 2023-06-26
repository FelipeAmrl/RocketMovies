/* eslint-disable react/prop-types */
import { Container } from './styles';

import { FiArrowLeft } from 'react-icons/fi';

export function ReturnButton({title, isLoading = false, ...rest})
{
    return (
        <Container 
            {...rest}
            disabled={isLoading}
        >
            <FiArrowLeft/>
            {title}
        </Container>
    );
}