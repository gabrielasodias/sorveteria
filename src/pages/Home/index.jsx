import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const sabores = [{
    id: 1,
    tipoSorvete: 'Picolé',
    sabor: 'Chocolate',
    quantidade: 10
  }, {
    id: 2,
    tipoSorvete: 'Pote',
    sabor: 'Morango',
    quantidade: 15
  }, {
    id: 3,
    tipoSorvete: 'Picolé',
    sabor: 'Abacaxi',
    quantidade: 20
  }
  ]
  return (

    <div className='container'>
      <form action>
        <h1>Controle de Estoque</h1>
        <input placeholder='Sorvete' name='tipoSorvete' type='text' />
        <input placeholder='Sabor' name='sabor' type='text' />
        <input placeholder='Quantidade' name='quantidade' type='number' />
        <button type='button'>Adicionar</button>
      </form>

      {sabores.map(sabor => (
        <div key={sabor.id} className='card'>
          <div>
            <p>Tipo de Sorvete: <span>{sabor.tipoSorvete}</span> </p>
            <p>Sabor: <span>{sabor.sabor}</span></p>
            <p>Quantidade: <span>{sabor.quantidade}</span> </p>
          </div>
          <button>
            <img src={Trash} alt='Excluir' />
          </button>
        </div>
      ))}

    </div>

  )
}

export default Home
