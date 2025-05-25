import { h } from 'preact';
import video from '../assets/video-presentacion.mp4'
import './About.css'

export default function About() {
  return (
    <div className="all">
      <h1 style={'color:rgba(255, 170, 0, 0.9)'}>¿ Qué es Zero3D ?</h1>
      <h1>↘️⬇️⬇️⬇️⬇️↙️</h1>
      <video controls class="video-main" ><source src={video} type="video/mp4"/></video>
      <p>Realizado por Julián Cabanillas Blanco</p>
      <p>Proyecto final grado DAM</p>
      <p>OpenSource</p>
    </div>
  );
}