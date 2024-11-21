import { useState } from 'react'
import Logo from '/sunny.png'
import { Link } from 'react-router-dom'


function HeaderStock() {
    
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
                    <li><Link to="/" href="#inicio" className='contact-link'>Início</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderStock