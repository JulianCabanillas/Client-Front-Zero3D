import axios from "axios";
import { getAccess, setAccess, clearAccess } from "../auth";
import { route } from "preact-router";

// Generamos una instancia de Axios para redigirir el trafico a api y ademas
// añadir la cookie de refresh_token, solo con withCredential: 
const api = axios.create({
  baseURL: "/api",      
  withCredentials: true 
});

// Antes de realizar alguna accion de llamada, haremos una comprobacion de autorizacion del 
// token recogido
api.interceptors.request.use(cfg => {
  const token = getAccess();
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

// Si el servidor por algun motivo responde un error (401 en este caso) intentara una unica 
// vez hacer un refresco del mismo:
api.interceptors.response.use(
  res => res,
  // Utilizamos logica predefinida para la captura de errores:
  async err => {
    const orig = err.config;
    if (err.response?.status === 401 && !orig._retry && !orig.url.endsWith('/token/refresh/')) {
      // Señal para indicar un solo intento:
      orig._retry = true;             
      try {
        // Mandamos la peticion de refresco:
        const r = await api.post("/token/refresh/");
        // Guardamos el nuevo acceso que nos proporciona la api:
        setAccess(r.data.access);
        // Añadimos a la cabecera el token nuevo:
        orig.headers.Authorization = `Bearer ${r.data.access}`;
        // Repetemos la llamada al metodo que nos devolvio error:
        return api(orig);              
      } catch {
        // Si despues del intento falla, es por que la sesion a caducado, 
        // devolvemos a la pantalla de logeo y limpiamos el token:
        clearAccess();
        route("/login");
      }
    }
    return Promise.reject(err);
  }
);

// De esta manera exportamos la instacia de esta clase para que el resto 
// la use mediante  --> import api from "../services/api":
export default api;