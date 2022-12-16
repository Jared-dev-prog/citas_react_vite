import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [ nombre, setNombre ] = useState('')
  const [ propietario, setPropietario ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ fecha, setFecha ] = useState('')
  const [ sintomas, setSintomas ] = useState('')
  const [ error, setError ] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length !== 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)

    return random + date
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const campos = [ nombre, propietario, email, fecha, sintomas ]
    if(campos.includes('')) {
      setError(true)
      return
    } 

    setError(false)

    const objetoPacientes = {
      nombre, 
      propietario, 
      email, 
      fecha,
      sintomas
    }

    if(paciente.id) {
      objetoPacientes.id = paciente.id

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPacientes : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      objetoPacientes.id = generarId()
      setPacientes([...pacientes, objetoPacientes])
    }
    
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className='lg:w-2/5 md:w-1/2 mx-7'>
      <h2 className='font-black text-center text-2xl'>Seguimiento pacientes</h2>

      <p className='font-bold mt-5 text-center mb-10'>Añade pacientes y <span className='text-indigo-600'>administralos</span></p>

      <form 
        onSubmit={handleSubmit}
        className='bg-white rounded-md shadow-lg py-10 px-5'>

        {error && <Error><p>Todos los campos son obligatorios</p></Error>}

        <div className='mb-5'>
          <label htmlFor='nombre' className='block mb-2 uppercase font-bold text-gray-700'>Nombre mascota</label>

          <input 
            type='text'
            placeholder='Nombre de la mascota'
            id='nombre'
            className='w-full border-2 rounded-md py-1 px-1 placeholder-gray-500 border-gray-200'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='propietario' className='block mb-2 uppercase font-bold text-gray-700'>Nombre propietario</label>

          <input 
            type='text'
            placeholder='Nombre del propietario'
            id='propietario'
            className='w-full border-2 rounded-md py-1 px-1 placeholder-gray-500 border-gray-200'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block mb-2 uppercase font-bold text-gray-700'>Email</label>

          <input 
            type='email'
            placeholder='Email de contacto'
            id='email'
            className='w-full border-2 rounded-md py-1 px-1 placeholder-gray-500 border-gray-200'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='alta' className='block mb-2 uppercase font-bold text-gray-700'>Alta</label>

          <input 
            type='date'
            id='alta'
            className='w-full border-2 rounded-md py-1 px-1 placeholder-gray-500 border-gray-200'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='sintomas' className='block mb-2 uppercase font-bold text-gray-700'>Síntomas</label>

          <textarea
            className='w-full border-2 rounded-md py-1 px-1 placeholder-gray-500 border-gray-200'
            placeholder='Describe los síntomas'
            id='sintomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          >
          </textarea>
        </div>

        <input 
          type='submit' 
          value={paciente?.id ? 'Guardar cambios' : 'Agregar paciente'}
          className='bg-indigo-600 w-full py-2 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-md'
        />

      </form>
    </div>
  )
}

export default Formulario
