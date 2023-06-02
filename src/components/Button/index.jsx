/* eslint-disable react/prop-types */
import { Container } from './styles';

export function Button({title, icon: Icon, isAtHome = false, onClick, loading = false, ...rest})
{
    return(
        <Container
            type="button"
            disabled={loading}
            isAtHome={isAtHome}
            onClick={onClick}
            {...rest}
        >
            {Icon && <Icon size={20} />}
            {loading ? "Loading..." : title}
        </Container>
    );
}