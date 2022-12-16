
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente

  const handleEliminar = () => {
    const respuesta = confirm('¿Deseas eliminar este paciente?')

    if(respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className='bg-white m-7   py-8 px-5 rounded-md shadow-md'>
    <p className='uppercase font-bold text-gray-700 mb-3'>Nombre: <span className='font-normal normal-case'>{nombre}</span></p>

    <p className='uppercase font-bold text-gray-700 mb-3'>Propietario: <span className='font-normal normal-case'>{propietario}</span></p>

    <p className='uppercase font-bold text-gray-700 mb-3'>Email: <span className='font-normal normal-case'>{email}</span></p>

    <p className='uppercase font-bold text-gray-700 mb-3'>Fecha alta: <span className='font-normal normal-case'>{fecha}</span></p>

    <p className='uppercase font-bold text-gray-700 mb-3'>Síntomas: <span className='font-normal normal-case'>{sintomas}</span></p>

    <div className='flex justify-between mt-6'>
      <button
        type='button'
        className='py-1 px-5 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold transition-colors rounded-md'
        onClick={() => setPaciente(paciente)}
      >Editar</button>

      <button
        type='button'
        className='py-1 px-5 bg-red-600 hover:bg-red-700 text-white uppercase font-bold transition-colors rounded-md'
        onClick={handleEliminar}
      >Eliminar</button>
    </div>
  </div>
  )
}

export default Paciente
