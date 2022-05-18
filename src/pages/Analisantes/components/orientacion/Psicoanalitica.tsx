import React from 'react'
import { Link } from 'react-router-dom'
import { Btn } from '../../../../styles/styles'

export const Psicoanalitica = () => {
  return (
    <div className='cura'>
      <div className="abstract">
        <h3>Orientación Psicoanalítica</h3>
        <p>En este apartado se expone una lectura desde el campo del psicoanálisis de orientacion Lacaniaca</p>
      </div>
      <Link to='../orientacion' style={{textDecoration: 'none'}}> 
        <Btn> Leer propuesta completa </Btn>
      </Link>
    </div>
  )
}
