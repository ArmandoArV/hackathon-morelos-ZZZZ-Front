import React from 'react'
import './registro.css'

const Registro = () => {
  return (
    <main className='registro-container'>
      <div className='title-registro'>
        <h1> Crear cuenta</h1>
      </div>
      <div className='form-container'>
        <form>
            <input type="text" name="name" placeholder="Nombre" id="input-name" required/>
            <input type="apellido1" name="apellido1" placeholder="Primer Apellido" id="input-apellido1" required/>
            <input type="apellido2" name="apellido2" placeholder="Segundo Apellido" id="input-apellido2" required/>
            <input type="email" name="email" placeholder="Email" required/>
            <input type="password" name="password" placeholder="Contraseña" required/>
            <input type="password" name="password-confirmation" placeholder="Confirmar Contraseña" required/>
            <div>
                <button type="submit" className="btn-submitt">Crear Cuenta</button>
            </div>
            </form>
      </div>
        <span></span>
     
    </main>
  )
}

export default Registro
