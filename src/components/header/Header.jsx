import { useState } from 'react'
import './Header.css'
import Logo from '/public/sunny.png'

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen (!menuOpen);
    }

    return (

        <header className="header">
            <div className='logo'>
                <img src={Logo} alt="logo Sunny Ice Cream" />
                <h1>Sunny Ice Cream</h1>
            </div>

            <button className='menu-button' onClick={toggleMenu}>
                ☰
            </button>

            <nav className={`menu ${menuOpen ? "open" : "closed"}`}>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <li><a href="#login" className='login'>Login</a></li>
                </ul>
            </nav>
        </header>
    )
}