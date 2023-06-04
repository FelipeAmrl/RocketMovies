import { Container, Form, Background } from './styles';

import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom';

export function SignIn()
{
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>

                <p>Application to track everything you watch</p>

                <h2>Sign In</h2>

                <Input type="email" placeholder="E-mail" icon={FiMail}/>
                <Input type="password" placeholder="Password" icon={FiLock}/>

                <Button title="Login"/>

                <Link to="/register">
                    Create account
                </Link>
            </Form>

            <Background />
        </Container>
    );
}