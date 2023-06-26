/* eslint-disable react/prop-types */
import { Container } from "./styles";

import { FiX, FiPlus } from 'react-icons/fi';

export function AddTag({value, onClick, isLoading = false, isNew, ...rest})
{
    return (
        <Container  isNew={isNew}>
            <input
                type="text"
                readOnly={!isNew}
                value={value}
                maxLength={17}
                disabled={isLoading}
                {...rest}
            >
            </input>

            <button
                type="button"
                onClick={onClick}
                disabled={isLoading}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    );
}