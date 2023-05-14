import { Container, Profile, Logout } from './styles'
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/lucascpedroso.png" alt="User picture" />
                <div>
                    <span>Welcome,</span>
                    <strong>Lucas Pedroso</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}