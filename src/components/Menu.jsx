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

/* ----- helper JWT → payload ------------------------------------ */
function readUsername(tok) {
  try {
    return jwt_decode(tok)?.username || null;
  } catch {
    return null;
  }
}

const Menu = () => {
  /* 1. estado con el nombre actual ------------------------------ */
  const [username, setUsername] = useState(() => readUsername(getAccess()));

  /* 2. escuchar cambios globales de auth ------------------------ */
  useEffect(() => {
    const unsub = onAuthChange((tok) => setUsername(readUsername(tok)));
    return unsub;                // cleanup al desmontar
  }, []);

  /* 3. logout ---------------------------------------------------- */
  const logout = () => {
    clearAccess();               // limpia token en RAM
    setUsername(null);           // oculta panel
    route('/login');             // redirige
  };

  /* 4. render ---------------------------------------------------- */
  return (
    <header className="menu-header">
      <nav className="menu">
        {/* --------- Lado izquierdo: logo --------- */}
        <div className="menu-left">
          <h2>
            <Link href="/" className="logo">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
          </h2>
        </div>

        {/* --------- Lado derecho: enlaces -------- */}
        <div className="menu-right">
          <h2><Link href="/pto">🖨️ Imprimir</Link></h2>
          <h2><Link href="/about">👁️ Conócenos</Link></h2>
          <h2><Link href="/login">👥 Login</Link></h2>

          {/* --------- Panel fijo si hay usuario --- */}
          {username && (
            <div className="user-panel">
              <p className="user-name">👋 {username}</p>
              <button type="button" className="logout-btn" onClick={logout}>
                Salir
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Menu;