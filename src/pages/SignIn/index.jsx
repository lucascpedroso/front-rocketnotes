import { Container, Form, Background } from './styles'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {
    
    const data = useAuth()
    console.log(data)

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

                <Link to="/register">
                    Create Account
                </Link>
            </Form>

            <Background />
        </Container>
    )
}