import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ReturnButton } from '../../components/ReturnButton';

import { Container, Form, Avatar } from "./styles";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import { useAuth } from '../../hooks/useAuth';

import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Profile()
{
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [avatar, setAvatar] = useState(avatarURL);
    const [avatarFile, setAvatarFile] = useState(null);

    const navigate = useNavigate();
    
    async function handleUpdate()
    {
        setLoading(true);

        const updated = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }

        const userUpdated = Object.assign(user, updated);

        updateProfile({ user:userUpdated , avatarFile })
            .then(() => {
                setLoading(false);
            })
    }

    function handleAvatarChange(event)
    {
        const file = event.target.files[0];

        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);

        setAvatar(imagePreview);
    }

    function handleReturn()
    {
        navigate(-1);
    }

    return (
        <Container>
            <header>
                <ReturnButton 
                    title="Return" 
                    onClick={handleReturn}
                    isLoading={loading}
                />
            </header>
            <main>
                <Form>
                    <Avatar>
                        <img 
                            src={avatar} 
                            alt={`${user.name} user's photo`}
                        />
                        <label htmlFor="avatar">
                            <FiCamera size={20}/>
                            <input 
                                id="avatar" 
                                type="file" 
                                onChange={handleAvatarChange}
                                disabled={loading}
                            />
                        </label>
                    </Avatar>
                        <Input 
                            type="text" 
                            placeholder="Name" 
                            icon={FiUser}
                            value={name}
                            onChange={e => setName(e.target.value)}
                            disabled={loading}
                        />
                        <Input 
                            type="email" 
                            placeholder="E-mail" 
                            icon={FiMail}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            disabled={loading}
                        />
                        <Input 
                            type="password"
                            placeholder="Current password" 
                            icon={FiLock}
                            onChange={e => setOldPassword(e.target.value)}
                            disabled={loading}
                        />
                        <Input 
                            type="password" 
                            placeholder="New password" 
                            icon={FiLock}
                            onChange={e => setNewPassword(e.target.value)}
                            disabled={loading}
                        />

                    <Button 
                        title="Save" 
                        onClick={handleUpdate}
                        isLoading={loading}
                    />
                </Form>
            </main>
        </Container>
    );
}