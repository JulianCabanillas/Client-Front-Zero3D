import { h } from 'preact';

import './Login.css'

export default function Login() {
  return (
    <div className="all">
      <h1>Iniciar Sesión</h1>
      <form>
        <input type="text" placeholder="Usuario" /><br /><br />
        <input type="password" placeholder="Contraseña" /><br /><br />
        <button type="submit">Entrar</button>
      </form>
      <hr className="hr-margin"></hr>
      <p>Realizado por Julián Cabanillas Blanco</p>
      <p>Proyecto final grado DAM</p>
      <p>OpenSource</p>
    </div>
  );
}