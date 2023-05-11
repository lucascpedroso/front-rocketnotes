import { Container, Form, Avatar } from './styles'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
    return (
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft />
                </a>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/lucascpedroso.png" alt="User profile picture" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id='avatar' type='file' />
                    </label>
                </Avatar>

                <Input 
                    placeholder="Enter your name"
                    type="text"
                    icon={FiUser}
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Current password"
                    type="password"
                    icon={FiLock}
                />

                <Input 
                    placeholder="New password"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Save"/>
            </Form>
        </Container>
    )
}