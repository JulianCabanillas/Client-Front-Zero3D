import Router from 'preact-router';
import Home from './pages/Home';
import About from './pages/About';
import Pto from './pages/Pto';
import Login from './pages/Login';
import Profile from './pages/Profile';
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
        <Pto path="/pto" />
        <Profile path="/profile" />
      </Router>
    </div>
  );
}
