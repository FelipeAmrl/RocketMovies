import { Container, Form, Avatar } from "./styles";

import { FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ReturnButton } from '../../components/ReturnButton';

export function Profile()
{
    return (
        <Container>
            <header>
                <ReturnButton title="Return" to="/"/>
            </header>
            <main>
                <Form>
                    <Avatar>
                        <img src="https://github.com/FelipeAmrl.png" alt="User's photo" />
                        <label htmlFor="avatar">
                            <FiCamera size={20}/>
                            <input id="avatar" type="file" />
                        </label>
                    </Avatar>
                        <Input type="text" placeholder="Name" icon={FiUser}/>
                        <Input type="email" placeholder="E-mail" icon={FiMail}/>
                        <Input type="password" placeholder="Current password" icon={FiLock}/>
                        <Input type="password" placeholder="New password" icon={FiLock}/>
                    <Button title="Save" />
                </Form>
            </main>
        </Container>
    );
}