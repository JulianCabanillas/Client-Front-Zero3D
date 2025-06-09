// src/components/Menu.jsx
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Link, route } from 'preact-router';

import logo from '../assets/home.png';
import {
  getAccess,
  setAccess,          //  por si necesitas usarlo aquí
  clearAccess,
  onAuthChange
} from '../auth';
import './Menu.css';

// Con esta funcion recogeremos el token y dividmos en tres 
// parte, nosquedamos con payload y lo decodificamos a JSON:
function parseJwt(tok) {
  try {
    // Dividimos y nos quedamos con el payload, parseamos
    // de URL-safe Base64 a Base64:
    const base64 = tok.split('.')[1]               
                     .replace(/-/g, '+')            
                     .replace(/_/g, '/');
    // Decodificamos:                 
    const json = atob(base64);                      
    return JSON.parse(json);                        
  } catch {
    // Si el token esta mal formado:
    return null;    
  }
}

// Utiliza parseJWT para extraer la propiedad que necesitamos 
// del payload
function readUsername(tok) {
  try {
    return parseJwt(tok)?.username || null;
  } catch {
    return null;
  }
}

// Este es el componente principal que conforma y renderiza el menu:
const Menu = () => {
  // Variable paraa mostrar el usuario logeado:
  const [username, setUsername] = useState(() => readUsername(getAccess()));

  // Necesitamos escuchar los cambios respecto a los usuarios y los tokens:
  useEffect(() => {
    const unsub = onAuthChange((tok) => setUsername(readUsername(tok)));
    return unsub;                
  }, []);

  // Nos ayudamos de esa funcion para el logout del usuario y el 
  // respectivo reinicio del token:
  const logout = () => {
    clearAccess();               
    setUsername(null);           
    route('/login');             
  };

  
  return (
    <header className="menu-header">
      <nav className="menu">
        <div className="menu-left">
          <h2>
            <Link href="/" className="logo">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
          </h2>
        </div>

        <div className="menu-right">
          <h2><Link href="/pto">🖨️ Imprimir</Link></h2>
          <h2><Link href="/about">👁️ Conócenos</Link></h2>
          <h2><Link href="/login">👥 Login</Link></h2>
          {username && (
            <div className="user-panel">
              <p className="user-name">👋 {username}</p>
              <button type="button" className="logout-btn" onClick={logout}>
                 🔑 Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Menu;