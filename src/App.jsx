import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoTareas from "./components/ListadoTareas"

function App() {

    const [ tareas, setTareas ] = useState([])

  return (
    <>
      <div className="container mx-auto mt-40">
        <Header />

        <div className="mt-12 md:flex">
          <Formulario 
            tareas={tareas}
            setTareas={ setTareas}
          />
          <ListadoTareas />
        </div>

      </div>
    </>
  )
}

export default App
