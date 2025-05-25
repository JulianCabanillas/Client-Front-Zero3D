
import titulo from '../assets/titulo.png'
import stl from '../assets/stl.png'

import "./Home.css"

export default function Home() {
  return (
    <div className="all">
      <div className="home">
        <img src={titulo} className="title" alt="Titulo App" />
        <h1>Sube tu archivo <img src={stl} alt="" /> para calcular presupuesto al momento!</h1>
        <h2><b>📦 Enviamos a toda españa! 🇪🇦 </b><blink><mark><code>ENVIO GRATIS</code></mark></blink> a partir de 20€ 🔥🔥🔥</h2>
        <p className='nothing'>Julian</p>
      </div>
    </div>
  )
}