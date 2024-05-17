import React from 'react'

const Registro = () => {
  return (
    <main>
      <h1> Crear cuenta</h1>
      <div className='form-container'>
        <form>
            <input type="text" name="name" placeholder="Nombre" id="input-name" required/>
            <input type="text" name="apellido1" placeholder="Primer Apellido" id="input-apellido1" required/>
            <input type="text" name="apellido2" placeholder="Segundo Apellido" id="input-apellido2" required/>
            <input type="text" name="email" placeholder="Enter your email address" required/>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
            <button type="submit" className="btn-submitt">Crear Cuenta</button>

            </form>
      </div>
      
        <span></span>
     
    </main>
  )
}

export default Registro
