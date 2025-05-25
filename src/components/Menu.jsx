// Menu.jsx
import { h } from 'preact';
import logo from '/icono.png'
import './Menu.css'

const Menu = () => {
  return (
    <header className="menu-header">
      <nav className="menu">
        <div className="menu-left">
          <a href="/" className="logo">
            
            <h2>
              <a href="/" >🏠 Home</a>
            </h2>
          </a>
        </div>
        <div className="menu-right">
          <h2><a href="/pto">🖨️ Imprimir</a></h2>
          <h2><a href="/about">👁️ Conócenos</a></h2>
          <h2><a href="/login">👥 Login</a></h2>
        </div>
      </nav>
    </header>
  );
};

export default Menu;