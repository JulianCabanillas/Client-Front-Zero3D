// Guarda el access JWT solo mientras la pestaña esté abierta
let accessToken = null;
const listeners = new Set(); 

export function setAccess(token) {
    accessToken = token;
    listeners.forEach(cb => cb(accessToken));
}

export function getAccess() {
    return accessToken;    
}

export function clearAccess() {
    accessToken = null;
    listeners.forEach(cb => cb(accessToken));
}

export function onAuthChange(cb) {            
  listeners.add(cb);
  return () => listeners.delete(cb);
}