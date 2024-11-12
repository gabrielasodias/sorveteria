import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api  from '../../services/api'

function Stock() {

  const [sabores, setSabores] = useState([])

  const inputTipoSorvete = useRef()
  const inputSabor = useRef()
  const inputQuantidade = useRef()

  async function getSabores() {
    const saboresFromApi = await api.get('/sabores')

    setSabores(saboresFromApi.data)
  }

  async function createSabores() {
    await api.post('/sabores', {
      tipoSorvete: inputTipoSorvete.current.value,
      sabor: inputSabor.current.value,
      quantidade: parseInt(inputQuantidade.current.value, 10)
    }) 

    getSabores()

  }

  async function deleteSabor(id) {
    await api.delete(`/sabores/${id}`)

    getSabores()
  }

  useEffect(() => {
    getSabores()
  }, [])

  return (

    <div className='container'>
      <form action>
        <h1>Controle de Estoque</h1>
        <select name="tipoSorvete" ref={inputTipoSorvete}>
          <option value="">Selecione o sorvete</option>
          <option value="Potinho">Potinho</option>
          <option value="Picolé">Picolé</option>
          <option value="Skimo">Skimo</option>
          <option value="Moreninha">Moreninha</option>
          <option value="Paleta Mexicana">Paleta Mexicana</option>
        </select>
        <input placeholder='Sabor' name='sabor' type='text' ref={inputSabor}/>
        <input placeholder='Quantidade' name='quantidade' type='number' ref={inputQuantidade}/>
        <button type='button' onClick={createSabores}>Adicionar</button>
      </form>

      {sabores.map(sabor => (
        <div key={sabor.id} className='card'>
          <div>
            <p>Tipo de Sorvete: <span>{sabor.tipoSorvete}</span> </p>
            <p>Sabor: <span>{sabor.sabor}</span></p>
            <p>Quantidade: <span>{sabor.quantidade}</span> </p>
          </div>
          <button onClick={() => deleteSabor(sabor.id)}>
            <img src={Trash} alt='Excluir' />
          </button>
        </div>
      ))}

    </div>

  )
}

export default Stock
