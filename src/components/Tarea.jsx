
const Tarea = () => {
    return ( 

        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre del Dev:</p>
            <span className="font-normal normal-case"></span>

            <p className="font-bold mb-3 text-gray-700 uppercase">Puesto:</p>
            <span className="font-normal normal-case"></span>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de la task:</p>
            <span className="font-normal normal-case" ></span>

            <p className="font-bold mb-3 text-gray-700 uppercase">Hora</p>
            <span className="font-normal normal-case"></span>

            <p className="font-bold mb-3 text-gray-700 uppercase">Descripcion</p>
            <span className="font-normal normal-case"></span>

            <div className="flex justify-between mt-10">
                <button
                type="button"
                className="py-2 px-10
                 bg-indigo-600 
                 hover:bg-indigo-700 
                 text-white 
                 font-bold 
                 uppercase 
                 rounded-lg" >
                 Editar</button>
                <button
                 type="button"
                 className="py-2 px-10
                 bg-red-600 
                 hover:bg-red-700 
                 text-white 
                 font-bold 
                 uppercase 
                 rounded-lg" 
                >Eliminar</button>
            </div>
        </div>
     );
}
 
export default Tarea;