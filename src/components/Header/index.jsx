import { Container, Profile } from './styles';

import { FiSearch } from 'react-icons/fi'

import { Input } from '../Input';

import { Link } from 'react-router-dom';

export function Header()
{
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
                    <button type='button'>logout</button>
                </div>
                <Link to="/profile">
                    <img src="https://github.com/FelipeAmrl.png" alt="User's photo" />
                </Link>
            </Profile>
        </Container>
    );
}