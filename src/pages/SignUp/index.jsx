import { Container, Form, Background } from './styles';

import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ReturnButton } from '../../components/ReturnButton'

export function SignUp()
{
    return (
        <Container>
            <Background />

            <Form>
                <h1>RocketMovies</h1>

                <p>Application to track everything you watch</p>

                <h2>Create your account</h2>

                <Input type="text" placeholder="Name" icon={FiUser}/>
                <Input type="email" placeholder="E-mail" icon={FiMail}/>
                <Input type="password" placeholder="Password" icon={FiLock}/>

                <Button title="Register"/>

                <ReturnButton title="Back to login" to="/" />
            </Form>
        </Container>
    );
}