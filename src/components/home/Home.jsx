import './Home.css'
import Header from '../header/Header'
import iceCream1 from '../../assets/ices/ice6.png'
import Product from '../products/Product'
import About from '../about/About'
import Footer from '../footer/Footer'

function Home() {
    return (
        <>
            <Header />
            <section className='home-section' id='inicio'>
                <div className='home-container'>
                    <div className='home-text'>
                        <h1>Sunny Ice Cream</h1>
                        <h2 className='typing'>Esse é o sabor do verão!</h2>
                    </div>
                    
                    <div className='home-image'>
                        <img src={iceCream1} alt="sorvete" />
                    </div>
                </div>
            </section>

            <Product id='produtos'/>

            <About id='sobre'/>

            <Footer id='contato'/>

        </>
    )
}

export default Home