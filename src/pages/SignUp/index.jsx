import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ReturnButton } from '../../components/ReturnButton'

import { Container, Form, Background } from './styles';

import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import { api } from '../../services/api';

export function SignUp()
{
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function handleSignUp()
    {
        if(!name || !email || !password)
        {
            alert('Fill all the fields to create an account!');
            return;
        }

        setLoading(true);

        api.post("/users", { name, email, password })
            .then(() => {
                alert('Account successfully created!');
                setLoading(false);
                navigate("/");
            })
            .catch(error => {
                if(error.response)
                {   
                    alert(error.response.data.message);
                    setLoading(false);
                }
                else
                {   
                    alert('Unable to register!');  
                    setLoading(false);
                }
            })
    }

    function handleReturn()
    {
        navigate(-1);
    }

    return (
        <Container>
            <Background />

            <Form>
                <h1>RocketMovies</h1>

                <p>Application to track everything you watch</p>

                <h2>Create your account</h2>

                <Input 
                    type="text" 
                    placeholder="Name" 
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                    disabled={loading}
                />
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
                    id="register" 
                    title="Register" 
                    onClick={handleSignUp}
                    isLoading={loading}
                />

                <ReturnButton 
                    id="return" 
                    type="button"
                    title="Back to login" 
                    onClick={handleReturn}
                    isLoading={loading}
                />
            </Form>
        </Container>
    );
}