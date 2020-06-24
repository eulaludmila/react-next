import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import { List } from './styles'

// const linkStyle = {
//     marginRight: 15
// }

const Menu = () => {
    return (
        <>
            <List>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/sobre">
                    <a>Sobre Empresa</a>
                </Link>
                <Link href="/contato">
                    <a>Contato</a>
                </Link>

            </List>
        </>
    )
}

export default Menu;