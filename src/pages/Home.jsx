
import titulo from '../assets/titulo.png'
import stl from '../assets/stl.png'
import moment from '../assets/almomento.png'

import "./Home.css"

export default function Home() {
  return (
    <div className="all">
      <div className="home">
        <img src={titulo} className="title" alt="Titulo App" />
        <h1>Sube tu archivo <img src={stl} alt="" /> para un presupuesto <img src={moment} alt="" /> </h1>
        <h2><b>📦 Enviamos a toda españa! 🇪🇦 </b><blink><mark><code>ENVIO GRATIS</code></mark></blink> a partir de 20€ 🔥🔥🔥</h2>
        <p className='nothing' style={'font-size: 25px;'}>
          Para empezar haz login o registrate,<code> es gratis! 🥳 </code>
          <br></br>
          Después accede a 🖨️ Imprimir, elige tus opciones y calcula tu presupuesto.
          <br></br>
          Si está todo a tu gusto, confirma el pedido y nosotros haremos realidad tu idea! 😍
        </p>
      </div>
    </div>
  )
}