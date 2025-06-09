// Modulo que utilizaremos como almacen y sistema de notificaciones.
// Guardamos el access JWT solo mientras la pestaña estan abierta:
let accessToken = null;
// Utilizamos listeners para notificar:
const listeners = new Set(); 

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