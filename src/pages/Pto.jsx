import { useState } from 'preact/hooks';
import flechaIzq from '../assets/flechaIzq.png'
import flechaDer from '../assets/flechaDer.png'

import './Pto.css'

export default function Pto() {
    
    const [archiveStl, setArchiveStl] = useState(null);
    const [velocity, setVelocity] = useState(null);
    const [material, setMaterial] = useState(null);
    const [materialRequired, setMaterialRequired] = useState (null);
    const [time, setTime] = useState(null);
    const [pto, setPto] = useState(null);
    
    return (
        <div className="all">
            <h1>Calcula presupuesto al momento!!</h1>
            <div className="options-container">
                <img src={flechaDer} className="flecha" alt="flechaDerecha" />
                <button class="boton-up">
                <h2>Subir archivo... 📤</h2>
                </button>
                <img src={flechaIzq} className="flecha" alt="flechaIzquierda" />
            </div>
            <div className="options-container">
                <table className="table-options">
                <caption>
                    <h1><b>Elige tus opciones:</b></h1>
                </caption>
                <tbody>
                    <tr>
                    <th>
                        <p className="p-option">
                        <h2>🌳 Material: </h2>
                        </p>
                    </th>
                    <th>
                        <select className= "select-options" name="materialChoose" id="materialIdChoose">
                        <option value="pla"><h2>PLA</h2></option>
                        <option value="abs"><h2>ABS</h2></option>
                        <option value="ptge"><h2>PTEG</h2></option>
                        </select>
                    </th>
                    </tr>
                    <tr>
                    <th>
                        <p className="p-option">
                        <h2>🏎️ Velocidad: </h2>
                        </p>
                    </th>
                    <th>
                        <select className= "select-options" name="velocityChoose" id="materialIdChoose">
                        <option value="30">300m/ms</option>
                        <option value="60">600m/ms</option>
                        <option value="90">900m/ms</option>
                        </select>
                    </th>
                    </tr>
                    <tr>
                    <th>
                        <p className="p-option">
                        <h2>🔰 Color:</h2>
                        </p>
                    </th>
                    <th>
                        <select className= "select-options" name="colorChoose" id="materialIdChoose">
                        <option value="blanco">⚪ Blanco </option>   
                        <option value="negro">⚫ Negro </option>       
                        <option value="verde">🟢 Verde </option>
                        <option value="rojo">🔴 Rojo </option>
                        <option value="amarillo">🟡 Amarillo </option>
                        <option value="naranja">🟠 Naranja </option>
                        </select>
                    </th>
                    </tr>
                </tbody>
                </table>
                <div className="options-container">
                    <table class="table-results">
                    <caption>
                        <h1><b>Resultados:</b></h1>
                    </caption>
                    <tr><h1>----------------------------------------------</h1></tr>
                    <tr>
                        <th>
                        <p className="p-result">
                            <h2>⏰ Tiempo:</h2>
                        </p>
                        </th>
                        <th>
                        <p className="p-result">
                            <h2>- h.{time}</h2>
                        </p>
                        </th>
                    </tr>
                    <tr>
                        <th>
                        <p className="p-result">
                            <h2>⚱️ Cantidad material:</h2>
                        </p>
                        </th>
                        <th>
                        <p className="p-result">
                            <h2>- m.{materialRequired}</h2>
                        </p>
                        </th>
                    </tr>
                    <tr>
                        <th>
                        <p className="p-result">
                            <h2>💶 Presupuesto:</h2>
                        </p>
                        </th>
                        <th>
                        <p className="p-result">
                            <h2> {pto}- €</h2>
                        </p>
                        </th>
                    </tr>
                    <tr><h1>----------------------------------------------</h1></tr>
                    </table> 
                </div>
            </div>
            <button className="boton-pto" >
                <h1>CALCULAR Presupuesto! ▶️</h1>
                
            </button>
            <progress className="bar-progress" value="10" max="100"></progress>
        </div>
    );
}