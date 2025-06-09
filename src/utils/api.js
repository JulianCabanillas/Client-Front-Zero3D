import axios from "axios";
import { getAccess, setAccess, clearAccess } from "../auth";
import { route } from "preact-router";

const api = axios.create({
  baseURL: "/api",      // prefijo común
  withCredentials: true // ⇒ la cookie refresh_token viaja sola
});

// 1️⃣  Añade Authorization si hay access en memoria
api.interceptors.request.use(cfg => {
  const token = getAccess();
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

// 2️⃣  Si el servidor responde 401, intenta /token/refresh/ UNA sola vez
api.interceptors.response.use(
  res => res,
  async err => {
    const orig = err.config;
    if (err.response?.status === 401 && !orig._retry) {
      orig._retry = true;             // señal de “ya lo intenté”
      try {
        const r = await api.post("/token/refresh/");
        setAccess(r.data.access);
        orig.headers.Authorization = `Bearer ${r.data.access}`;
        return api(orig);              // repite la petición original
      } catch {
        // refresh falló → sesión caducada
        clearAccess();
        route("/login");
      }
    }
    return Promise.reject(err);
  }
);

export default api;