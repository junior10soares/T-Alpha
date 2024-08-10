import logo from '../../assets/logo.png'
import { Container } from './styles'

export function Header() {
    return (
        <Container>
            <img src={logo} alt="Logo" />
        </Container>
    )
}