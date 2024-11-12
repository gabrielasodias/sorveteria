import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <div>
                <h1>Sunny Ice Cream</h1>
            </div>

            <nav>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}