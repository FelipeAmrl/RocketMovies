import { Input } from '../Input';

import { Container, Profile } from './styles';

import { FiSearch } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

export function Header()
{
    const { signOut } = useAuth();

    const navigate = useNavigate();

    function handleLogout()
    {
        signOut();
        navigate("/");
    }

    return (
        <Container>
            <Link id="logo" to="/">
                RocketMovies
            </Link>
            
            <Input type="text" placeholder="Search by title" icon={FiSearch}/>
            
            <Profile>
                <div>
                    <Link to="/profile">
                        <strong>Felipe Amaral</strong>
                    </Link>
                    <button 
                        type='button'
                        onClick={handleLogout}
                    >
                        logout
                    </button>
                </div>
                <Link to="/profile">
                    <img src="https://github.com/FelipeAmrl.png" alt="User's photo" />
                </Link>
            </Profile>
        </Container>
    );
}