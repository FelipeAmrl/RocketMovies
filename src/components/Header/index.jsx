/* eslint-disable react/prop-types */
import { Input } from '../Input';

import { Container, Profile } from './styles';

import { FiSearch } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { api } from '../../services/api';

export function Header({ onChange })
{
    const { signOut, user } = useAuth();

    const navigate = useNavigate();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

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
            
            <Input 
                type="text" 
                placeholder="Search by title" 
                icon={FiSearch}
                onChange={onChange}
            />
            
            <Profile>
                <div>
                    <Link to="/profile">
                        <strong>{user.name}</strong>
                    </Link>
                    <button 
                        type='button'
                        onClick={handleLogout}
                    >
                        logout
                    </button>
                </div>
                <Link to="/profile">
                    <img 
                        src={avatarURL} 
                        alt={`${user.name} user's photo`} 
                    />
                </Link>
            </Profile>
        </Container>
    );
}