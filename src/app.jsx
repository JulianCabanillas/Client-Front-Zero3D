import { useState } from 'preact/hooks'
import titulo from './assets/titulo.png'
import flecha from './assets/flecha.png'
import './app.css'

export function App() {
  const [archiveStl, setArchiveStl] = useState(null);
  const [velocity, setVelocity] = useState(30);
  const [material, setMaterial] = useState("pla");
  const [time, setTime] = useState(null)
  const [pto, setPto] = useState(null);

  return (
    <div class="all">
      <div>
        <img src={titulo} class="title" alt="Titulo App" />
      </div>
      <h1>Sube tu archivo <strong>.stl</strong> para calcular presupuesto!</h1>
      <hr></hr>
      <h2><b>📦 Enviamos a toda españa! </b></h2>
      <h2><blink><mark><code>ENVIO GRATIS</code></mark></blink> a partir de 20€ 🔥🔥🔥</h2>
      <hr></hr>
      <div>
        <img src={flecha} class="flecha" alt="flechaIzquierda" />
        
        <button class="selectOptions">
          Subir archivo...
        </button>
      </div>
      <div class="options-container">
        <table class="tableOptions">
          <caption>
            <h2><b><u>Elige tus opciones:</u></b></h2>
          </caption>
          <tbody>
            <tr>
              <th>
                <p class="pOption">Material: </p>
              </th>
              <th>
                <select class= "selectOptions" name="materialChoose" id="materialIdChoose">
                  <option value="pla">PLA</option>
                  <option value="abs">ABS</option>
                  <option value="ptge">PTEG</option>
                </select>
              </th>
            </tr>
            <tr>
              <th>
                <p class="pOption">Velocidad: </p>
              </th>
              <th>
                <select class= "selectOptions" name="velocityChoose" id="materialIdChoose">
                  <option value="30">300m/ms</option>
                  <option value="60">600m/ms</option>
                  <option value="90">900m/ms</option>
                </select>
              </th>
            </tr>
            <tr>
              <th>
                <p class="pOption">Color:</p>
              </th>
              <th>
                <select class= "selectOptions" name="colorChoose" id="materialIdChoose">
                  <option value="negro">Negro ⚫</option> 
                  <option value="blanco">Blanco ⚪</option>         
                  <option value="verde">Verde 🟢</option>
                  <option value="rojo">Rojo 🔴</option>
                  <option value="amarillo">Amarillo 🟡</option>
                  <option value="naranja">Naranja 🟠</option>
                </select>
              </th>
            </tr>
          </tbody>
        </table>
        <div> 
          <button class="botonPto" >
            CALCULAR Presupuesto!
            <progress value="0" max="100"></progress>
          </button>
          <p> Presupuesto ------------------
            <output name='pto'>0.0</output>€
          </p>
        </div>
      </div>
      
      <div class="nothing"/>  
      <div>
        <p>Realizada por Julian Cabanillas Blanco.</p>
      </div>
      <div class="nothing"/>
    </div>
  )
}
