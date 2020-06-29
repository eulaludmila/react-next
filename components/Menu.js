import Link from 'next/link'
import '../css/styled.css';

const Menu = () => {
    return (
        <div id="container">
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/sobre">
                        <a>Sobre Empresa</a>
                    </Link>

                </li>
                <li>
                    <Link href="/contato">
                        <a>Contato</a>
                    </Link>
                </li>

            </ul>
        </div>
    )
}

export default Menu;