import './style.css'
import Header from '../../components/header/Header'
import iceCream1 from '../../assets/ices/ice6.png'
import Product from '../../components/products/Product'
import About  from '../../components/about/About'
import Footer from '../../components/footer/Footer'

function Home() {
    return (
        <>
            <Header />

            <section className='home-section'>
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

            <Product />

            <About />
            
            <Footer />

        </>
    )
}

export default Home