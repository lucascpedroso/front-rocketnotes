import { Container, Form, Background } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

export function SignUp() {
    return (
        <Container>
            <Background />

            <Form>
                <h1>Rocket Notes</h1>
                <p>An app for you to save and manage your useful links.</p>

                <h2>Create your account</h2>

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
                    placeholder="password"
                    type="password"
                    icon={FiLock}
                />
                
                <Button title="Sign Up"/>

                <a href="#">
                    Log In
                </a>
            </Form>
        </Container>
    )
}