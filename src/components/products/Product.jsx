import './Product.css'
import iceCream from '../../assets/ices/ice2.png'
import iceCream2 from '../../assets/ices/ice3.png'
import iceCream3 from '../../assets/ices/ice4.png'
import iceCream4 from '../../assets/ices/ice5.png'
import iceCream5 from '../../assets/ices/ice7.png'
import iceCream6 from '../../assets/ices/ice8.png'

export default function Products() {
    return (
        <>
            <section className='product-section'>
                <div className='product-text'>
                    <h1>Produtos</h1>
                    <p>Conheça a nossa variedade de sorvetes</p>
                </div>

                <div className='product-container'>
                    <div className='product-image'>

                        <img src={iceCream} alt="" className='iceimg' />
                    </div>

                    <div className='product-image'>
                        <img src={iceCream2} alt="" className='iceimg' />
                    </div>

                    <div className='product-image'>
                        <img src={iceCream3} alt="" className='iceimg' />
                    </div>

                    <div className='product-image'>
                        <img src={iceCream4} alt="" className='iceimg' />
                    </div>

                    <div className='product-image'>
                        <img src={iceCream5} alt="" className='iceimg' />
                    </div>

                    <div className='product-image'>
                        <img src={iceCream6} alt="" className='iceimg' />
                    </div>
                </div>

                <div className='product-button'>
                    <button>Acesse o catálogo</button>
                </div>

    
            </section>
        </>
    )
}