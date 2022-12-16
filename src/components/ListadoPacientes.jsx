import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className='lg:3/5 md:w-1/2 md:h-screen overflow-y-scroll mt-10  md:mt-0'>

      {pacientes.length !== 0 ? (
        <>
          <h2 className='font-black text-center text-2xl'>Listado pacientes</h2>

          <p className='font-bold mt-5 text-center mb-10'>Administra tus <span className='text-indigo-600'>pacientes y citas</span></p>

          {pacientes.map( paciente => 
            <Paciente 
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          )}        
        </>
      ) : (
        <>
          <h2 className='font-black text-center text-2xl'>No existen pacientes</h2>

          <p className='font-bold mt-5 text-center mb-10'>Comienze agregando pacientes y{" "}<span className='text-indigo-600'>aparecerán  aquí</span></p>
        </>
      )}


    </div>
  )
}

export default ListadoPacientes
