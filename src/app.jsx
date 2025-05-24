import Router from 'preact-router';
import Home from './pages/Home';
import About from './pages/About';
import Presu from './pages/Presu';
import Login from './pages/Login';
import Menu from './components/Menu';
import './app.css'

export default function App() {
  return (
    <div>
      <Menu />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Login path="/login" />
        <Presu path="/presu" />
      </Router>
    </div>
  );
}
