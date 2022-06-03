import Tarea from "./Tarea";

const ListadoTareas = () => {
    return ( 
      <>
         <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
          <h2 className="font-black text-3xl text-center">Desde las tareas</h2>
            <p className="text-xl mt-5 mb-10 text-center">Administra tus {''}
            <span className="text-indigo-600 font-bold">Task</span></p>

          <Tarea />
        
        </div>

      </>
       
     );
}
 
export default ListadoTareas;