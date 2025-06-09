import { h } from 'preact';
import { useState } from 'preact/hooks';
import { route } from 'preact-router';
import api from '../utils/api';      // ⬅️ nuestro Axios centralizado
import { setAccess, getAccess } from '../auth'; // ⬅️ guarda el access en memoria
import './Login.css'

export default function Login() {


  
    const [message, setMessage] = useState('Esperando...');
    const logged = Boolean(getAccess());
    const [state, setState] = useState({
      user:'',
      password:'',
      email:'',
      direct:''
    });
    
    if(logged){
      setMessage('Sal de tu sesión para logear o registrar...')
    }

    const onSubmitLogin = async e => {
      e.preventDefault();
      setMessage("Login...");
      try {
        const response = await api.post('/login_client/', {
          username: state.user,
          password: state.password
        });
        setAccess(response.data.access); // 💾 guarda sólo en memoria
        setMessage("Login exitoso");
        route('/');                      // 👉 redirige a la página principal
      } catch (error){
        setMessage("Usuario o password no es correcto.");
        alert("Usuario o password no es correcto.");
        console.error('Error en la peticion:', error.response?.data || error.message);
      }
    }

  const onSubmitRegistrer = async e => {
    e.preventDefault();
    setMessage("Registrando...");
    try {
      const response = await api.post('/register_client/', {
        username: state.user,
        password: state.password,
        email: state.email,
        direction: state.direct,
        date_register: new Date().toISOString().split('T')[0]  // Fecha actual
      });
      setMessage("Registro exitoso");
      console.log('Respuesta:', response.data);
      onSubmitLogin(e)
    } catch (error) {
      setMessage("Error al registrar");
      alert("Error al registrar");
      console.error('Error:', error.response?.data || error.message);
    }
  };

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
                <button type="submit" className='botton-entrar' disabled={logged}>Entrar</button>
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
                <button type="submit" className='botton-entrar' disabled={logged}>Registrar</button>
              </form>
            </th>
          </tr>
        </tbody>
      </table>
      <div style="margin-top: 20px;">
      <p></p>
      <div style="margin-top: 20px;">
        <p style={{fontSize: '25px'}}>{message}</p>
      </div>
    </div>
    </div>
  );
}