import { Container, Profile, Logout } from './styles'
import { useAuth } from '../../hooks/auth'
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
    const { signOut } = useAuth()

    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/lucascpedroso.png" alt="User picture" />
                <div>
                    <span>Welcome,</span>
                    <strong>Lucas Pedroso</strong>
                </div>
            </Profile>
            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}