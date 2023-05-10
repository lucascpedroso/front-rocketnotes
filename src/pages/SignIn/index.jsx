import { Container, Form, Background } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>An app for you to save and manage your useful links.</p>

                <h2>Log in</h2>

                <Input 
                    placeholder="E-mail"
                    type="text"
                    ico={FiMail}
                />
                <Input 
                    placeholder="password"
                    type="password"
                    ico={FiLock}
                />
                
                <Button title="Sign In"/>

                <a href="#">
                    Create Account
                </a>
            </Form>

            <Background />
        </Container>
    )
}