import { h } from 'preact';
import { route } from 'preact-router';
import { useEffect, useState } from 'preact/hooks';
import api from '../utils/api';        
import { readUsername } from '../auth'; 
import './Profile.css';

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(() => readUsername());
  const [estado, setEstado] = useState('Pendiente de envío...')
  useEffect(() => {
    api.get('/my-orders/')
       .then(res => setOrders(res.data))
       .catch(err => console.error(err))
       .finally(() => setLoading(false));
  }, []);

  // Formateamos la hora para separar hora y mionutos:
  const formatTime = hrs => {
    if (hrs == null) return '';
    const h = Math.floor(hrs);
    const m = Math.round((hrs - h) * 60);
    return `${h}h ${m}m`;
  };
    // Formateamos la cantidad de material para redonder a dos decimales:
  const formatMaterial = m => m != null ? m.toFixed(2) + ' m' : '';
    // Damos tambien formato a la moneda (Utilizamos la clase Intl para dar formato de currency):
  const formatCurrency = c => c != null ? new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(c): '';
  
  if(!username) route('/login');

  if (loading) return <p>Cargando tus pedidos…</p>;

  return (
    <div className="profile-page">
      <h1>👋 Hola, {username}!</h1>
      {orders.length === 0 ? <p>No tienes pedidos todavía.</p>: 
        (
          <ul>
            {orders.map(o => (
              <li key={o.order_id} >
                <strong>Pedido #{o.order_id} --- Total: {formatCurrency(o.total_euros)}</strong><br/>
                <p style={{color:"#000000"}}>
                <b>Fecha</b> - {new Date(o.date_register).toLocaleString()} <br/>
                <b>STL:</b> {o.stl_file.slice(25)}<br/>
                <b>Material:</b> {o.material} --
                <b>Velocidad:</b> {o.velocity}mm/s --
                <b>Color:</b> {o.color}
                <br/>              
                <b>Estado:</b> {estado}
                </p>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
};

export default Profile;