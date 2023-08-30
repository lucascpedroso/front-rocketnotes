import { Container, Profile, Logout } from './styles'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { RiShutDownLine } from 'react-icons/ri'
import { api } from '../../services/api'
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

export function Header() {
    const { signOut, user } = useAuth()
    const navigate = useNavigate()

    function handleSignOut() {
        navigate("/")
        signOut()
    }

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
            <Logout onClick={handleSignOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}