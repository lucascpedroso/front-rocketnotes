import { useState } from 'react'
import { Container, Form, Background } from './styles'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({ email, password })
    }

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
                    onChange={e => setEmail(e.target.value)}
                />
                <Input 
                    placeholder="password"
                    type="password"
                    ico={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />
                
                <Button title="Sign In" onClick={handleSignIn}/>

                <Link to="/register">
                    Create Account
                </Link>
            </Form>

            <Background />
        </Container>
    )
}