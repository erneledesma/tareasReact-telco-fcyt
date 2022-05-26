
const Formulario = () => {
    return ( 
        <div className="md:w-1/2 lg:w-2/5 mx-5">
          <h2 >Seguimiento de Task</h2>
            <p className="text-lg mt5 text-center text-3xl">
          Añade Tareas y
          <span className="text-indigo-600 font-bold"> Administralas</span></p>

          <form className="bg-white shadow-md round-lg py-10 px-5 mb-10">
              <div className="mb-5">
                  <label className="block text-gray-700 uppercase font-bold">Nombre del Usuario</label>
                  <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="text"
                    placeholder="Nombre del Usuario"
                   />
              </div>

              <div className="mb-5">
                  <label className="block text-gray-700 uppercase font-bold">Puesto</label>
                  <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="text"
                    placeholder="Puesto"
                   />
              </div>

              <div className="mb-5">
                  <label className="block text-gray-700 uppercase font-bold">Fecha de la Task</label>
                  <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="date"

                   />
              </div>

              <div className="mb-5">
                  <label className="block text-gray-700 uppercase font-bold">Hora de inicio de la Task</label>
                  <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="time"
                   />
              </div>

              <div className="mb-5">
                  <label className="block text-gray-700 uppercase font-bold">Descripcio</label>
                  <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="text"
                    placeholder="Descripcion de la Task"
                
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


