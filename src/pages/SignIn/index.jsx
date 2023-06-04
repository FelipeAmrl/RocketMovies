import { Container, Form, Background } from './styles';

import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

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

                <a href="/register">
                    Create account
                </a>
            </Form>

            <Background />
        </Container>
    );
}