import React from 'react'
import { Link } from 'react-router-dom'
import { Btn } from '../../../../styles/styles'

export const Filosofica = () => {
  return (
    <div className='cura'>
      <div className="abstract">
        <h3>Orientación Folosófica</h3>
        <p>En este apartado se describen las complejidades filosoficas implicadas en el caso y se proponen las autores destacados que se han ocupado de analisar filosoficamente esos conceptos.</p>
      </div>
      <Link to='../orientacion' style={{textDecoration: 'none'}}> 
        <Btn> Leer propuesta completa </Btn>
      </Link>
    </div>
  )
}
