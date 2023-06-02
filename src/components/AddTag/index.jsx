/* eslint-disable react/prop-types */
import { Container } from "./styles";

import { FiX, FiPlus } from 'react-icons/fi';

export function AddTag({value, onClick, isNew, ...rest})
{
    return (
        <Container  isNew={isNew}>
            <input
                type="text"
                readOnly={!isNew}
                value={value}
                maxLength={17}
                {...rest}
            >
            </input>

            <button
                type="button"
                onClick={onClick}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    );
}