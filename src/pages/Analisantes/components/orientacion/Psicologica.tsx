import React from 'react'
import { Link } from 'react-router-dom'
import { Btn } from '../../../../styles/styles'
import './styleOrientaciones.css'


export const Psicologica = () => {
  return (
    <div className='cura'>
      <div className="abstract">
        <h3>Orientación Psicológica</h3>
        <p>Analisis del caso desde el campo de la psi. Se describen los sintomas, signos y se propone un diagnostico.</p>
      </div>
      <Link to='../orientacion' style={{textDecoration: 'none'}}> 
        <Btn> Leer propuesta completa </Btn>
      </Link>
        
        
    </div>
  )
}
