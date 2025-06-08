# Client-Front-Zero3D

## ✨ Descripción

SPA ligera que permite registrarse, subir archivos STL y ver el presupuesto 3D en tiempo real.
Construida con **Preact 10** y empaquetada por **Vite 5**.

---

## 🚀 Puesta en marcha rápida

Revisar README del contenedor padre: https://github.com/JulianCabanillas/Suite-Zero3D.git

## ⚙️ Variables de entorno

| Variable        | Valor por defecto           | Descripción                    |
| --------------- | --------------------------- | ------------------------------ |
| `VITE_API_URL`  | `http://localhost:8000/api` | Root del backend a consumir    |
| `VITE_APP_NAME` | `Suite‑Zero3D`              | Texto que aparece en el título |

---

## 📂 Estructura básica

```
src/
├─ components/      # Aquí tenemos el menú, podriamos incorporar mas elementos reutilizable
├─ pages/           # Aquí tenemos las paginas que iremos mostrando
├─ util/            # script personalizados
├─ assets/          # imágenes, iconos, ...
└─ main.jsx         # punto de entrada
```

---

## 🏗️ Builds y despliegue

```
# Genera nuevas compilaciones con lo añadido:
npm install
npm run build

```
En desarrollo no utilizamos Nginx para poder servir en caliente, facilita el desarrollo.
En stage y producción, Nginx sirve los archivos de `dist/` y lo envia a `/api/` al backend.

---

## 🧪 Tests rápidos

```
npm run test        # jest + @testing-library/preact
```

---

## 🙌 Contribuir

1. Crea branch (`git checkout -b develop/nueva‑vista`).
2. Asegúrate de que los tests pasan.
3. Envía *pull request*.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **GNU General Public License**. Consulta el archivo `LICENSE` para más información.

