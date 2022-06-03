import {useState, useEffect} from 'react';
import Error from './Error';
const Formulario = ({tareas, setTareas }) => {

  // HOOKS - funciones
  const [ nombre, setNombre ] = useState('');
  const [ puesto, setPuesto ] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const [ error, setError ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // validar formulario
  if([nombre, puesto, fecha, hora, descripcion].includes('')) {
      console.log('Hay al menos un campo vacio');

      setError(true);
      return;
  }
      setError(false);

      // Objeto de Tareas
      const objetoTarea = {
        nombre,
        puesto,
        fecha,
        hora,
        descripcion
      }
      // con express operator no mutamos el arreglo original, toma una copia
      setTareas(...tareas, objetoTarea);

      // Limpiar el formulario
      setNombre('');
      setPuesto('');
      setFecha('');
      setHora('');
      setDescripcion('');
}

    return ( 
        <div className="md:w-1/2 lg:w-2/5 mx-5">
          <h2 >Seguimiento de Task</h2>
            <p className="text-lg mt5 text-center text-3xl mb-10">
          Añade Tareas y
          <span className="text-indigo-600 font-bold"> Administralas</span></p>

          <form  onSubmit={handleSubmit} className="bg-white shadow-md round-lg py-10 px-5 mb-10">
          { error && 
            <Error  mensaje='Todos los campos son obligatorios'/>
           }
              <div className="mb-5">
                  <label htmlFor="usuario" className="block text-gray-700 uppercase font-bold">Nombre del Usuario</label>
                  <input 
                    id="usuario" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="text"
                    placeholder="Nombre del Usuario"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                   />
              </div>

              <div className="mb-5">
                  <label htmlFor="puesto" className="block text-gray-700 uppercase font-bold">Puesto</label>
                  <input 
                    id="puesto"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="text"
                    placeholder="Puesto"
                    value={puesto}
                    onChange={(e) => setPuesto(e.target.value)}
                   />
              </div>

              <div className="mb-5">
                  <label
                  htmlFor="fecha"
                   className="block text-gray-700 uppercase font-bold">Fecha de la Task</label>
                  <input
                  id="fecha"
                   className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}

                   />
              </div>

              <div className="mb-5">
                  <label
                   htmlFor="hora"
                   className="block text-gray-700 uppercase font-bold">Hora de inicio de la Task</label>
                  <input
                    id="hora" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="time"
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                   />
              </div>

              <div className="mb-5">
                  <label
                  htmlFor="descripcion"
                   className="block text-gray-700 uppercase font-bold">Descripcion</label>
                  <input 
                   id="descripcion"
                   className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="text"
                    placeholder="Descripcion de la Task"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                
                   />
              </div>

              <input
                type="submit"
                value={'Añadir Task'}
                className="
                            bg-indigo-600 
                            w-full p-3 
                            text-white uppercase 
                            font-bold 
                            hover:bg-indigo-700 
                            rounded-md
                            cursor-pointer trasition-colors"
               />
          </form>
        </div>
     );


}
 
export default Formulario;


