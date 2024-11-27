import './style.css'
import ice12 from '../../assets/ices/ice12.png'
import ice10 from '../../assets/ices/ice10.png'
import ice9 from '../../assets/ices/ice9.png'
import ice5 from '../../assets/ices/ice5.png'
import ice4 from '../../assets/ices/ice4.png'
import ice3 from '../../assets/ices/ice3.png'
import ice11 from '../../assets/ices/ice11.png'
import { useNavigate } from 'react-router-dom'

function MenuIceCream() {

    const HandleHomeClick = () => {
        navigate('/');
    }

    const navigate = useNavigate()

    return (
        <>
            <section className='ice-cream-section'>
                <div className='title-menu'>
                    <h1>Cardápio de Sorvetes</h1>
                    <button onClick={HandleHomeClick}>Início</button>    
                </div>
                <div className='ice-cream-container'>
                    <div className='ice-cream-card'>
                        <img src={ice12} alt="sorvete de picolé"/>
                        <h2>Picolé</h2>
                        <p>Temos uma variedade de sabores de picolé. Cada um feito com ingredientes selecionados e receitas exclusivas!</p>
                        <h3>R$ 2,00</h3>
                    </div>
                    <div className='ice-cream-card'>
                        <img src={ice10} alt="sorvete de potinho"/>
                        <h2>Potinho 250g</h2>
                        <p>Temos uma variedade de sabores de potinho. Cada um feito com ingredientes selecionados e receitas exclusivas!</p>
                        <h3>R$ 5,00</h3>
                    </div>
                    <div className='ice-cream-card'>
                        <img src={ice9} alt="sorvete de pote"/>
                        <h2>Pote 2l</h2>
                        <p>Temos uma variedade de sabores de pote. Cada um feito com ingredientes selecionados e receitas exclusivas!</p>
                        <h3>R$ 24,90</h3>
                    </div>
                    <div className='ice-cream-card'>
                        <img src={ice5} alt="sorvete de skimo"/>
                        <h2>Skimo</h2>
                        <p>Temos uma variedade de sabores de skimo. Cada um feito com ingredientes selecionados e receitas exclusivas!</p>
                        <h3>R$ 4,00</h3>
                    </div>
                    <div className='ice-cream-card'>
                        <img src={ice4} alt="sorvete de paleta mexicana"/>
                        <h2>Paleta Mexicana</h2>
                        <p>Temos uma variedade de sabores de paleta mexicana. Cada um feito com ingredientes selecionados e receitas exclusivas!</p>
                        <h3>R$ 5,50</h3>
                    </div>
                    <div className='ice-cream-card'>
                        <img src={ice3} alt="sorvete de casquinha"/>
                        <h2>Casquinha</h2>
                        <p>Temos uma variedade de sabores de casquinha. Cada um feito com ingredientes selecionados e receitas exclusivas!</p>
                        <h3>R$ 3,00</h3>
                    </div>
                    <div className='ice-cream-card'>
                        <img src={ice11} alt="sorvete self-service"/>
                        <h2>Self-service</h2>
                        <p>Temos uma variedade de sabores para self-service. Cada um feito com ingredientes selecionados e receitas exclusivas!</p>
                        <h3>R$ 30,00(Kg)</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MenuIceCream