import { useState } from 'preact/hooks'
import titulo from './assets/titulo.png'
import flecha from './assets/flecha.png'
import './app.css'

export function App() {



  return (
    <div class="all">
      <div>
        <img src={titulo} class="title" alt="Titulo App" />
      </div>
      <h1>Sube tu archivo <code>.stl</code> para saber presupuesto!</h1>
      <h2><b>Enviamos a toda españa</b>, <code>envio gratis</code> a partir de 40€.</h2>
      <div class="card">
        <img src={flecha} class="flecha" alt="flechaIzquierda" />
        <button >
          Subir archivo...
        </button>
      </div>
      <div> 
        <button class="botonPto" >
          Pedir Presupuesto!
        </button>
      </div>
      <div class="nothing">  
      </div>
      <div>
        <p>Realizada por Julian Cabanillas Blanco.</p>
      </div>
      <div class="nothing">  
      </div>
    </div>
  )
}
