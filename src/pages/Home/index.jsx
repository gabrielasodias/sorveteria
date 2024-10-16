import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  return (
   
    <div className='container'>
        <form action>
          <h1>Controle de Estoque</h1>
          <input name='tipoSorvete' type='text'/>
          <input name='sabor' type='text'/>
          <input name='quantidade' type='number'/> 
          <button type='button'>Adicionar</button>        
        </form>

        <div>
          <div>
            <p>Tipo de Sorvete: </p>
            <p>Sabor: </p>
            <p>Quantidade: </p>
          </div>
          <button>
            <img src={Trash} alt='Excluir'/>
          </button>
        </div>
    </div>

  )
}

export default Home
