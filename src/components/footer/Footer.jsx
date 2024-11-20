import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
   
    return (
        <>           
            <footer className='footer'>
                <div className='footer-container' id='contato'>
                    <div className='line'>
                        <div className='contact-text'>
                            <h1>Contato</h1>
                            <p>Entre em contato conosco</p>
                        </div>
                        <div className='contact-container'>
                            <div className='contact-div'>
                                <p>WhatsApp</p>
                                <a href="+5519987470035"><img src="https://img.icons8.com/?size=100&id=ZeQPTbzIF4jw&format=png&color=ed8f05" alt="Whatsapp icon" /></a>
                            </div>
                            <div className='contact-div'>
                                <p>Telefone</p>
                                <a href="+5519987470035"><img src="https://img.icons8.com/?size=100&id=9730&format=png&color=ed8f05" alt="Telefone icon" /></a>
                            </div>
                            <div className='contact-div'>
                                <p>Instagram</p>
                                <a href="https://www.instagram.com/sunnyicecream_sorveteria/"><img src="https://img.icons8.com/?size=100&id=RhYNENh5cxlS&format=png&color=ed8f05" alt="Instagram icon" /></a>
                            </div>
                        </div>
                    </div>
                    <div className='menu-footer'>
                        <nav>
                            <ul>
                                <li><a href="#inicio">Início</a></li>
                                <li><a href="#produtos">Produtos</a></li>
                                <li><a href="#sobre">Sobre</a></li>
                                <li><Link to="/stock">Área do colaborador</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='copyright'>
                    <p>© 2024 Sunny Ice Cream. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>    
    )
}