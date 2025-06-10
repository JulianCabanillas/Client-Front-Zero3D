// Modulo que utilizaremos como almacen y sistema de notificaciones.
// Guardamos el access JWT solo mientras la pestaña estan abierta:
let accessToken = null;
// Utilizamos listeners para notificar:
const listeners = new Set(); 

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

// Con esta funcion actualizamos el valor del token:
export function setAccess(token) {
    accessToken = token;
    // Avisamos de la renovacion:
    listeners.forEach(cb => cb(accessToken));
}

// COn esta funcion conseguimos el token
export function getAccess() {
    return accessToken;    
}

// Con esta funcion lo ponemos a null e informamos de nuevo:
export function clearAccess() {
    accessToken = null;
    listeners.forEach(cb => cb(accessToken));
}

// Funcion para reiniciar los listener de token huerfanos:
export function onAuthChange(cb) {            
  listeners.add(cb);
  return () => listeners.delete(cb);
}

/**
 * Lee del token guardado el campo 'username'.
 * Devuelve null si no hay token o está corrupto.
 */
export function readUsername() {
  const token = getAccess();
  return parseJwt(token)?.username || null;
}