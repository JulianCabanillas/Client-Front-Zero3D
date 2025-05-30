import { useState } from 'preact/hooks';
import axios from 'axios';
import flechaIzq from '../assets/flechaIzq.png'
import flechaDer from '../assets/flechaDer.png'

import './Pto.css'

export default function Pto() {

// Constantes y variables de estado:
    const API_URL = 'http://localhost:8000';
    const [archiveStl, setArchiveStl] = useState(null);
    const [velocity, setVelocity] = useState('30');
    const [material, setMaterial] = useState('pla');
    const [color, setColor] = useState('blanco');
    const [materialRequired, setMaterialRequired] = useState (null);
    const [time, setTime] = useState(null);
    const [pto, setPto] = useState(null);
    const [activeOrder, setActiveOrder] = useState(false);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    
    

// Patterns para dar formato a la salida del procersamiento =>
    // Formateamos la hora para separar hora y mionutos:
    const formatTime = hrs => {
      if (hrs == null) return '';
      const h = Math.floor(hrs);
      const m = Math.round((hrs - h) * 60);
      return `${h}h ${m}m`;
    };
    // Formateamos la cantidad de material para redonder a dos decimales:
    const formatMaterial = m => m != null ? m.toFixed(2) + ' m' : '';
    // Damos tambien formato a la moneda (Utilizamos la clase Intl para dar formato de currency):
    const formatCurrency = c => c != null ? new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(c): '';

    

// Utilizamos un handle para actualizar el cambio con la seleccion del archivo:
    const handleFile = e => {
        // Utilizamos target.files[] para recoger el archivo seleccionado:
        const file = e.target.files[0];
        // Comprobamos que el archivo solo sea .stl, sino mostramos alerta de navegador:
        if(file && file.name.endsWith('.stl')){
            setArchiveStl(file);
        } else {
            alert('Solo se permiten archivos .stl');
        }
    };

    
// Metodos para llamadas a la API:
    // Metodo para el boton de presupuesto:
    const onCalculate = async e => {
        e.preventDefault();
        
        // Generamos una alerta si falta algun atributo:
        if (!archiveStl || !material || !velocity || !color) {
            return alert('Faltan datos: asegúrate de subir un archivo y seleccionar material y velocidad.');
        }

        // Creamos el formData que vamos a pasar a la API para que procese la solicitud:
        const formData = new FormData();
        formData.append('file', archiveStl); 
        formData.append('material', material);
        formData.append('velocity', velocity);

        // Lanzamos dentro de un try para la captura de exceptions:
        try {
            
            // En este caso no utilizamos Axios, probamos fetch para el envio del archivo:
            setLoading(true);
            setProgress(0);
            setActiveOrder(false);

            // Realizamos la peticion y añadimos el parametro onUploadProgress con una lambda 
            // para el progreso de la barra:
            const res = await axios.post(`${API_URL}/api/calculate/`, formData, {
                onUploadProgress: e => {
                    const pct = Math.round((e.loaded * 100) / e.total);
                    setProgress(pct);
                }
            });

            // Cuando termina la carga seteamos estos valores:
            setProgress(100);
            setLoading(false);
            setActiveOrder(true);

            // Utilizamos el metodo json para recuperar los datos del Response:
            const data = await res.data;

            // Actualizamos los valores para mostralos al usuario:
            setTime(data.time ?? null);
            setMaterialRequired(data.material_required ?? null);
            setPto(data.total_price ?? null);
        } catch (err) {
            console.error('Error en el calculo:', err);
            alert("Error al calcular el presupuesto.");
        }finally {
            
        };
    }


    // Retornamos la pagina ya compuesta en httml y con ayuda de lo definido anteriormente:
    return (
        <div className="all">
            <h1 style={{ color: 'rgba(255, 170, 0, 0.9)' }}>CALCULADORA</h1>
            <h2>Elige tu archivo .stl, elige las opciones que desees y calcula precio del pedido!</h2>
            <div className="options-container">
                <img src={flechaDer} className="flecha" alt="flechaDerecha" />
                <input
                    type ='file'
                    accept='.stl'
                    onChange={handleFile}
                    style={{display:'none'}}
                    id='fileInput'
                />
                <label htmlFor="fileInput" className="boton-up"><h2>Subir archivo... 📤</h2></label>
                <img src={flechaIzq} className="flecha" alt="flechaIzquierda" />
            </div>
            <p>Solo archivos .stl!</p>
            <div className="options-container">
                <table className="table-options">
                <caption>
                    <h1 style={'color:rgba(255, 170, 0, 0.9)'}><b>Elige tus opciones:</b></h1>
                </caption>
                <tbody>
                    <tr>
                    <th>
                        <p className="p-option">
                        <h2>🌳 Material: </h2>
                        </p>
                    </th>
                    <th>
                        <select className="select-options" name="materialChoose" id="materialIdChoose"
                            onChange={e => setMaterial(e.target.value)}>
                        <option value="pla">PLA</option>
                        <option value="abs">ABS</option>
                        <option value="petg">PETG</option>
                        </select>
                    </th>
                    </tr>
                    <tr>
                    <th>
                        <p className="p-option">
                        <h2>🚴 Velocidad: </h2>
                        </p>
                    </th>
                    <th>
                        <select className="select-options" name="velocityChoose" id="velocityIdChoose"
                            onChange={e => setVelocity(e.target.value)}>
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
                        <select className="select-options" name="colorChoose" id="colorIdChoose"
                            onChange={e => setColor(e.target.value)}>
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
                    <table className="table-results">
                    <caption>
                        <h1 style={{color:'rgba(255, 170, 0, 0.9)'}}><b>Resultados:</b></h1>
                    </caption>
                    <tr>
                        <th>
                            <h1 style={{color:'rgba(255, 170, 0, 0.8)'}}>-----------------------</h1>
                        </th>
                        <th>
                            <h1 style={{color:'rgba(255, 170, 0, 0.8)'}}>-----------------------</h1>
                        </th>
                    </tr>    
                    <tr>
                        <th>
                        <p className="p-result">
                            <h2>⏰ Tiempo:</h2>
                        </p>
                        </th>
                        <th>
                        <p className="p-result">
                            <h2>{time != null ? formatTime(time) : ''}</h2>
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
                            <h2>{materialRequired != null ? formatMaterial(materialRequired) : ''}</h2>
                        </p>
                        </th>
                    </tr>
                    <tr>
                        <th>
                        <p className="p-result">
                            <h2>💶 Precio:</h2>
                        </p>
                        </th>
                        <th>
                        <p className="p-result">
                            <h2>{pto != null ? formatCurrency(pto) : ''}</h2>
                        </p>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <h1 style={{color:'rgba(255, 170, 0, 0.8)'}}>-----------------------</h1>
                        </th>
                        <th>
                            <h1 style={{color:'rgba(255, 170, 0, 0.8)'}}>-----------------------</h1>
                        </th>
                    </tr>    
                    </table> 
                </div>
            </div>
            <progress className="bar-progress" value={progress} max="100"></progress>
            <form onSubmit={onCalculate}>
                <button type="submit" className="boton-pto" disabled={loading}>
                    <h2>CALCULAR Presupuesto! ▶️</h2>
                </button>
            </form>
            
            <form>
                <button type="submit" className="boton-pto" disabled={!activeOrder} style={{ visibility: activeOrder ? 'visible' : 'hidden' }}>
                    <h2>REALIZAR Pedido!! ▶️</h2>
                </button>
            </form>
                                
            
            
        </div>
    );
    
}