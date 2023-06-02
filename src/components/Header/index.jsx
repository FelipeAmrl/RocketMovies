import { Container, Profile } from './styles';

import { FiSearch } from 'react-icons/fi'

import { Input } from '../Input';

export function Header()
{
    return (
        <Container>
            <h2>
                RocketMovies
            </h2>
            
            <Input type="text" placeholder="Search by title" icon={FiSearch}/>
            
            <Profile>
                <div>
                    <strong>Felipe Amaral</strong>
                    <button type='button'>logout</button>
                </div>
                <img src="https://github.com/FelipeAmrl.png" alt="User's photo" />
            </Profile>
        </Container>
    );
}