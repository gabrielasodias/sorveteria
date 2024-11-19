import './About.css'
import iceCream0 from '../../assets/ices/ice7.png'

export default function About() {
    return (
        <>
            <section className='about-section' id='sobre'>
                <div className='about-text'>
                    <h1>Sobre nós</h1>
                    <h2>Conheça a nossa sorveteria</h2>
                    <p>Somos uma sorveteria com foco em qualidade e sabor. Elevamos seus momentos de prazer! Na Sunny Ice Cream, você encontra sorvetes de alta qualidade, feitos com ingredientes selecionados e receitas exclusivas. Sabores sofisticados e combinações surpreendentes para os paladares mais exigentes. Venha experimentar a verdadeira arte do sorvete!</p>
                </div>

                <div className='about-image'>
                    <img src={iceCream0} alt="sorvetes" />
                </div>
            </section>
        </>
    )
}