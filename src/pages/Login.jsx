import { h } from 'preact';

import './Login.css'

export default function Login() {
  return (
    <div className="all">
      <table className='table-results'>
        <thead>
          <td>
            <h1><b>Iniciar Sesión</b></h1>
          </td>
          <td>
          <h1><b>Ó</b></h1>
          </td>
          <td>
            <h1><b>Registrate</b></h1>
          </td>
        </thead>
        <tbody>
          <tr>
            <th>
              <form className="formulario">
                <input className='invisible' type="text" placeholder="Usuario" /><br /><br />
                <input type="text" placeholder="Usuario" /><br /><br />
                <input type="password" placeholder="Contraseña" /><br /><br />
                <textarea className='invisible' type="text" placeholder="Direccion" /><br /><br />
                <button type="submit" className='botton-entrar'>Entrar</button>
              </form>
            </th>
            <th>

            </th>
            <th>
              <form className="formulario">
                <input type="text" placeholder="Usuario" /><br /><br />
                <input type="password" placeholder="Contraseña" /><br /><br />
                <input type="text" placeholder="Email" /><br /><br />
                <textarea type="text" placeholder="Direccion" /><br /><br />
                <button type="submit" className='botton-entrar'>Registrar</button>
              </form>
            </th>
          </tr>
        </tbody>
      </table>

    </div>
  );
}