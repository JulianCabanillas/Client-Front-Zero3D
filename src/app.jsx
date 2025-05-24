import { useState } from 'preact/hooks'
import titulo from './assets/titulo.png'
import flechaIzq from './assets/flechaIzq.png'
import flechaDer from './assets/flechaDer.png'
import stl from './assets/stl.png'
import video from './assets/video-presentacion.mp4'
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
      <h1>Sube tu archivo <img src={stl} alt="" /> para calcular presupuesto al momento!</h1>
      <h2><b>📦 Enviamos a toda españa! 🇪🇦 </b><blink><mark><code>ENVIO GRATIS</code></mark></blink> a partir de 20€ 🔥🔥🔥</h2>
      <hr class="hr-margin"></hr>
      <div class="options-container">
        <img src={flechaDer} class="flecha" alt="flechaDerecha" />
        <button class="boton-up">
          Subir archivo... 📤
        </button>
        <img src={flechaIzq} class="flecha" alt="flechaIzquierda" />
      </div>
      <div class="options-container">
        <table class="table-options">
          <caption>
            <h1><b>Elige tus opciones:</b></h1>
          </caption>
          <tbody>
            <tr>
              <th>
                <p class="p-option">
                  <h2>🌳 Material: </h2>
                </p>
              </th>
              <th>
                <select class= "select-options" name="materialChoose" id="materialIdChoose">
                  <option value="pla"><h2>PLA</h2></option>
                  <option value="abs"><h2>ABS</h2></option>
                  <option value="ptge"><h2>PTEG</h2></option>
                </select>
              </th>
            </tr>
            <tr>
              <th>
                <p class="p-option">
                  <h2>🏎️ Velocidad: </h2>
                </p>
              </th>
              <th>
                <select class= "select-options" name="velocityChoose" id="materialIdChoose">
                  <option value="30">300m/ms</option>
                  <option value="60">600m/ms</option>
                  <option value="90">900m/ms</option>
                </select>
              </th>
            </tr>
            <tr>
              <th>
                <p class="p-option">
                  <h2>🔰 Color:</h2>
                </p>
              </th>
              <th>
                <select class= "select-options" name="colorChoose" id="materialIdChoose">
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
            <table class="table-results">
              <caption>
                <h1><b>Resultados:</b></h1>
              </caption>
              <tr><h1>----------------------------------------------</h1></tr>
              <tr>
                <th>
                  <p class="p-result">
                    <h2>⏰ Tiempo:</h2>
                  </p>
                </th>
                <th>
                  <p class="p-result">
                    <h2>- h.{time}</h2>
                  </p>
                </th>
              </tr>
              <tr>
                <th>
                  <p class="p-result">
                    <h2>⚱️ Cantidad material:</h2>
                  </p>
                </th>
                <th>
                  <p class="p-result">
                    <h2>- m.{materialRequired}</h2>
                  </p>
                </th>
              </tr>
              <tr>
                <th>
                  <p class="p-result">
                    <h2>💶 Presupuesto:</h2>
                  </p>
                </th>
                <th>
                  <p class="p-result">
                    <h2> {pto}- €</h2>
                  </p>
                </th>
              </tr>
              <tr><h1>----------------------------------------------</h1></tr>
            </table> 
        </div>
      </div>
      <button class="boton-pto" >
        <h2>▶️ CALCULAR Presupuesto!</h2>
        <progress value="10" max="100"></progress>
      </button>
      <hr class="hr-margin"></hr>
      <h1>¿ Qué es Zero3D ?</h1>
      <h1>⬇️</h1>
      <h1>⬇️</h1>
      <h1>↘️⬇️⬇️↙️</h1>
      <h1>↘️↙️</h1>
      <h1>⬇️</h1>
      <video controls class="video-main" ><source src={video} type="video/mp4"/></video>
      <div class="nothing"/> 
      <p>Realizado por Julián Cabanillas Blanco</p>
      <p>Proyecto final grado DAM</p>
      <p>OpenSource</p>
    </div>
  )
}
