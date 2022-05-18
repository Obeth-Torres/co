import React from 'react'
import { Filosofica } from '../components/orientacion/Filosofica'
import { Psicoanalitica } from '../components/orientacion/Psicoanalitica'
import { Psicologica } from '../components/orientacion/Psicologica'
import './OrientacionStyle.css'

export const Orientacion = () => {
  return ( 
    <div className='orientacion'>
      <div className="consultas">
        <div className="psicoanalitica">
          <h2>Orientación psicoanalítica:</h2>
          <textarea name="psicoanalitica" id="psicoanalitica" ></textarea>
        </div>
        <div className="filosofica">
          <h2>Orientación filosófica:</h2>
          <textarea name="filosofica" id="filosofica" ></textarea>
        </div>
        <div className="psicologica">
          <h2>Orientación psicológica:</h2>
          <textarea name="psicologica" id="psicologica" ></textarea>
        </div> 
      </div>
      <div className="consultasSecundarias">
        <h3>Consultas secundarias</h3>
      </div>
            

    </div>
  )
}
