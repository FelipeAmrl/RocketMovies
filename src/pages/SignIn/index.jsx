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
    const [loading, setLoading] = useState(false);

    const { signIn } = useAuth();

    function handleSignIn()
    {
        setLoading(true);
        signIn({email, password})
            .then(() => {
                setLoading(false);
            })
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
                    disabled={loading}
                />
                <Input 
                    type="password" 
                    placeholder="Password" 
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                    disabled={loading}
                />

                <Button 
                    title="Login"
                    onClick={handleSignIn}
                    isLoading={loading}
                />

                { !loading &&
                    <Link to="/register">
                        Create account
                    </Link>
                }
            </Form>

            <Background />
        </Container>
    );
}