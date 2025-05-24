import { useState } from 'preact/hooks'
import titulo from './assets/titulo.png'
import flechaIzq from './assets/flechaIzq.png'
import flechaDer from './assets/flechaDer.png'
import stl from './assets/stl.png'
import './app.css'

export function App() {
  const [archiveStl, setArchiveStl] = useState(null);
  const [velocity, setVelocity] = useState(null);
  const [material, setMaterial] = useState(null);
  const [materialRequired, setMaterialRequired] = useState (null);
  const [time, setTime] = useState(null);
  const [pto, setPto] = useState(null);

  return (
    <div class="all">
      <div>
        <img src={titulo} class="title" alt="Titulo App" />
      </div>
      <h1>Sube tu archivo <img src={stl} alt="" /> para calcular presupuesto!</h1>
      <hr></hr>
      <h2><b>📦 Enviamos a toda españa! </b></h2>
      <h2><blink><mark><code>ENVIO GRATIS</code></mark></blink> a partir de 20€ 🔥🔥🔥</h2>
      <hr></hr>
      <div class="options-container">
        <img src={flechaDer} class="flecha" alt="flechaDerecha" />
        <button class="botonUp">
          Subir archivo...
        </button>
        <img src={flechaIzq} class="flecha" alt="flechaIzquierda" />
      </div>
      <div class="options-container">
        <table class="tableOptions">
          <caption>
            <h2><b>Elige tus opciones:</b></h2>
          </caption>
          <tbody>
            <tr>
              <th>
                <p class="pOption"><h2>🌳 Material: </h2></p>
              </th>
              <th>
                <select class= "selectOptions" name="materialChoose" id="materialIdChoose">
                  <option value="pla"><h2>PLA</h2></option>
                  <option value="abs"><h2>ABS</h2></option>
                  <option value="ptge"><h2>PTEG</h2></option>
                </select>
              </th>
            </tr>
            <tr>
              <th>
                <p class="pOption"><h2>🏎️ Velocidad: </h2></p>
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
                <p class="pOption"><h2>🔰 Color:</h2></p>
              </th>
              <th>
                <select class= "selectOptions" name="colorChoose" id="materialIdChoose">
                  <option value="negro">⚫ Negro </option> 
                  <option value="blanco">⚪ Blanco </option>         
                  <option value="verde">🟢 Verde </option>
                  <option value="rojo">🔴 Rojo </option>
                  <option value="amarillo">🟡 Amarillo </option>
                  <option value="naranja">🟠 Naranja </option>
                </select>
              </th>
            </tr>
          </tbody>
        </table>
        <div class="options-container">
            <table class="tableResults">
              <caption>
                <h2><b>Resultados:</b></h2>
              </caption>
              <tr>--------------------------------------------------------------------------</tr>
              <tr>
                <th>
                  <p class="pResult"><h2>Tiempo:</h2></p>
                </th>
                <th>
                  <p class="pResult"><h2>- h.{time}</h2></p>
                </th>
              </tr>
              <tr>
                <th>
                  <p class="pResult"><h2>Cantidad material:</h2></p>
                </th>
                <th>
                  <p class="pResult"><h2>- m.{materialRequired}</h2></p>
                </th>
              </tr>
              <tr>
                <th>
                  <p class="pResult"><h2>Presupuesto:</h2></p>
                </th>
                <th>
                  <h2 class="pResult"> {pto}- €</h2>
                </th>
              </tr>
              <tr>--------------------------------------------------------------------------</tr>
            </table> 
        </div>
      </div>
      <button class="botonPto" >
              <h3>▶️ CALCULAR Presupuesto!</h3>
              <progress value="10" max="100"></progress>
            
          </button>
      <div class="nothing"/>  
      <div>
        <p>Realizada por Julian Cabanillas Blanco.</p>
      </div>
      <div class="nothing"/>
    </div>
  )
}
