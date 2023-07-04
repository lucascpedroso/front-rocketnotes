import { useState } from "react"
import { Container, Form, Background } from './styles'
import { Link, useNavigate } from 'react-router-dom'

import { api } from "../../services/api"

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Please enter all required fields")
        }

        api.post("/users", { name, email, password})
        .then(() => {
            alert("User successfully created")
            navigate("/")
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Unfortunately, the user could not be created.")
            }
        })
    }


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
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input 
                    placeholder="password"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />
                
                <Button title="Sign Up" onClick={handleSignUp}/>

                <Link to="/">
                    Log In
                </Link>
            </Form>
        </Container>
    )
}