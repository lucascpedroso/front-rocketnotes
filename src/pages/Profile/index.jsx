import { useState } from 'react'
import { Container, Form, Avatar } from './styles'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`  :  avatarPlaceHolder

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }

        await updateProfile({ user, avatarFile })
    }

    function handleAvatarChange(event) {
        const file = event.target.files[0]

        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt="User profile picture" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id='avatar' type='file' onChange={handleAvatarChange} />
                    </label>
                </Avatar>

                <Input 
                    placeholder="Enter your name"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    placeholder="Current password"
                    type="password"
                    icon={FiLock}
                    onChange={e => setOldPassword(e.target.value)}
                />

                <Input 
                    placeholder="New password"
                    type="password"
                    icon={FiLock}
                    onChange={e => setNewPassword(e.target.value)}
                />

                <Button title="Save" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}