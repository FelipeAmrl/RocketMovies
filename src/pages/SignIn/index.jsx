import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles';

import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

export function SignIn()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn()
    {
        signIn({email, password});
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>

                <p>Application to track everything you watch</p>

                <h2>Sign In</h2>

                <Input 
                    type="email" 
                    placeholder="E-mail" 
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input 
                    type="password" 
                    placeholder="Password" 
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}

                />

                <Button 
                    title="Login"
                    onClick={handleSignIn}
                />

                <Link to="/register">
                    Create account
                </Link>
            </Form>

            <Background />
        </Container>
    );
}