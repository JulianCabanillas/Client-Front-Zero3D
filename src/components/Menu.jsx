// src/components/Menu.jsx
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Link, route } from 'preact-router';

import logo from '../assets/home.png';
import {
  getAccess,
  setAccess,          //  por si necesitas usarlo aquí
  clearAccess,
  onAuthChange,
  readUsername,
} from '../auth';
import './Menu.css';

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
              <a><Link href="/profile" className="user-name">👋 {username}</Link></a>
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