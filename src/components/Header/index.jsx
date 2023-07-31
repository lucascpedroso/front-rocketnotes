import { Container, Profile, Logout } from './styles'
import { useAuth } from '../../hooks/auth'
import { RiShutDownLine } from 'react-icons/ri'
import { api } from '../../services/api'

export function Header() {
    const { signOut, user } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`  :  avatarPlaceHolder

    return (
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} alt={user.name} />
                <div>
                    <span>Welcome,</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}