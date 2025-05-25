import { h } from 'preact';
import { useState } from 'preact/hooks';

import './Login.css'

export default function Login() {
  
  const [state, setState] = useState({
    user:'',
    password:'',
    email:'',
    direct:''
  });
  
  const onSubmitLogin = e => {
    alert("Accion login");
    e.preventDefault();
    console.log('LOGIN');
    console.log('User:', state.user);
    console.log('Password:', state.password);
  }

  const onSubmitRegistrer = e => {
    alert("Accion registro");
    e.preventDefault();
    console.log('REGISTRER');
    console.log('User:', state.user);
    console.log('Password:', state.password);
    console.log('Email:', state.email);
    console.log('Direccion:', state.direct);
  }

  const onChange = e => {
    const {name,value} = e.target;
    setState(prev =>({...prev, [name]: value}));
  }
  
  return (
    <div className="all">
      <table className='table-results'>
        <thead>
          <td><h1 style={'color:rgba(255, 170, 0, 0.9)'} ><b>Iniciar Sesión</b></h1></td>
          <td><h1 style={'color:rgba(255, 170, 0, 0.9)'}><b>Ó</b></h1></td>
          <td><h1 style={'color:rgba(255, 170, 0, 0.9)'}><b>Registrate</b></h1></td>
        </thead>
        <tbody>
          <tr>
            <th>
              <form className="formulario" onSubmit={onSubmitLogin}>
                <input className='invisible' type="text" placeholder="Usuario" readOnly /><br /><br />
                <input type="text" placeholder="Usuario" name="user" value={state.user} onInput={onChange}/><br /><br />
                <input type="password" placeholder="Contraseña" name="password" value={state.password} onInput={onChange}/><br /><br />
                <textarea className='invisible' type="text" placeholder="Direccion" readOnly/><br /><br />
                <button type="submit" className='botton-entrar'>Entrar</button>
              </form>
            </th>
            <th>
            </th>
            <th>
              <form className="formulario" onSubmit={onSubmitRegistrer}>
                <input type="text" placeholder="Usuario" name="user" value={state.user} onInput={onChange}/><br /><br />
                <input type="password" placeholder="Contraseña" name="password" value={state.password} onInput={onChange}/><br /><br />
                <input type="text" placeholder="Email" name="email" value={state.email} onInput={onChange}/><br /><br />
                <textarea type="text" placeholder="Direccion" name="direct" value={state.direct} onInput={onChange}/><br /><br />
                <button type="submit" className='botton-entrar'>Registrar</button>
              </form>
            </th>
          </tr>
        </tbody>
      </table>
      <div style="margin-top: 20px;">
      <p>Estado actual:</p>
      <pre><p>{JSON.stringify(state, null, 2)}</p></pre>
    </div>
    </div>
  );
}