// Menu.jsx
import { h } from 'preact';
import logo from '../assets/icono.png'
import { Link } from 'preact-router'; 
import './Menu.css'

const Menu = () => {
  return (
    <header className="menu-header">
      <nav className="menu">
        <div className="menu-left">
          <a href="/" className="logo">
            
            <h2>
              <Link href="/" >🏠 Home</Link>
            </h2>
          </a>
        </div>
        <div className="menu-right">
          <h2><Link href="/pto">🖨️ Imprimir</Link></h2>
          <h2><Link href="/about">👁️ Conócenos</Link></h2>
          <h2><Link href="/login">👥 Login</Link></h2>
        </div>
      </nav>
    </header>
  );
};

export default Menu;