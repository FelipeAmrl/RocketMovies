/* eslint-disable react/prop-types */
import { Container } from './styles';

export function Button({title, icon: Icon, isAtHome = false, onClick, isDelete, isLoading = false, ...rest})
{
    return(
        <Container
            type="button"
            disabled={isLoading}
            isAtHome={isAtHome}
            isDelete={isDelete}
            onClick={onClick}
            {...rest}
        >
            {isLoading ? "" : Icon && <Icon size={20} />}
            {isLoading ? "Loading..." : title}
        </Container>
    );
}