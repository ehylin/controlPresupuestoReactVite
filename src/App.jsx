import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import { generarId } from './helpers'
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg'


function App() {


  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})

  const handleNuevoGasto = () => {
    setModal(true)


    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  const guardarGasto = gasto => {
    if (gasto.id) {
      // Actualizar
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados);
      setGastoEditar({})
    } else {
      // Nuevo Gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
    }
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  return (

    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img src={IconoNuevoGasto}
            alt='Icono nuevo gasgo'
            onClick={handleNuevoGasto}
          />
        </div>
      )}
      {modal && <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto} />}
    </div>
  )
}

export default App
