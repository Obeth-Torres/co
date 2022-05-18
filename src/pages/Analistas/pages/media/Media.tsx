import React from 'react'
import { AiFillAudio, AiFillFilePdf, AiFillYoutube } from 'react-icons/ai'
import freud from '../../../../assets/images/Freud.jpg'
import lacan from '../../../../assets/images/lacan.jpg'
import heiddeger from '../../../../assets/images/heidegger.jpg'
import husserl from '../../../../assets/images/husserl.jpg'
import hegel from '../../../../assets/images/hegel.jpg'
import './media.css'

export const Media = () => {
  return (
    <div className='mediaPage'>
      <div className="capitulo">
        <div className="imagen">
          <img src={freud} alt="Sigmund Freud" />
          <h2>La noción de Sujeto en Freud</h2>
        </div>
        <div className="archivos">
          <div className='mediaButtons'>
            <h3>video</h3>
            <AiFillYoutube className='icons'/>
          </div>
          <div className='mediaButtons'>
           <h3>audio</h3> 
           <AiFillAudio className='icons'/>
          </div>
          <div className='mediaButtons'>
            <h3>texto</h3>
            <AiFillFilePdf className='icons'/>
          </div>         
          
        </div>
      </div>

      <div className="capitulo">
        <div className="imagen">
          <img src={lacan} alt="Sigmund Freud" />
          <h2>La noción de Sujeto en Lacan</h2>
        </div>
        <div className="archivos">
          <div className='mediaButtons'>
            <h3>video</h3>
            <AiFillYoutube className='icons'/>
          </div>
          <div className='mediaButtons'>
           <h3>audio</h3> 
           <AiFillAudio className='icons'/>
          </div>
          <div className='mediaButtons'>
            <h3>texto</h3>
            <AiFillFilePdf className='icons'/>
          </div>         
          
        </div>
      </div>
      <div className="capitulo">
        <div className="imagen">
          <img src={heiddeger} alt="Heiddegger" />
          <h2>La noción de Sujeto en Heiddegger</h2>
        </div>
        <div className="archivos">
          <div className='mediaButtons'>
            <h3>video</h3>
            <AiFillYoutube className='icons'/>
          </div>
          <div className='mediaButtons'>
           <h3>audio</h3> 
           <AiFillAudio className='icons'/>
          </div>
          <div className='mediaButtons'>
            <h3>texto</h3>
            <AiFillFilePdf className='icons'/>
          </div>         
          
        </div>
      </div>

      <div className="capitulo">
        <div className="imagen">
          <img src={husserl} alt="Husserl" />
          <h2>La noción de Sujeto en Husserl</h2>
        </div>
        <div className="archivos">
          <div className='mediaButtons'>
            <h3>video</h3>
            <AiFillYoutube className='icons'/>
          </div>
          <div className='mediaButtons'>
           <h3>audio</h3> 
           <AiFillAudio className='icons'/>
          </div>
          <div className='mediaButtons'>
            <h3>texto</h3>
            <AiFillFilePdf className='icons'/>
          </div>         
          
        </div>
      </div>

      <div className="capitulo">
        <div className="imagen">
          <img src={hegel} alt="Heiddegger" />
          <h2>La noción de Sujeto en Hegel</h2>
        </div>
        <div className="archivos">
          <div className='mediaButtons'>
            <h3>video</h3>
            <AiFillYoutube className='icons'/>
          </div>
          <div className='mediaButtons'>
           <h3>audio</h3> 
           <AiFillAudio className='icons'/>
          </div>
          <div className='mediaButtons'>
            <h3>texto</h3>
            <AiFillFilePdf className='icons'/>
          </div>         
          
        </div>
      </div>
    </div>
  )
}
