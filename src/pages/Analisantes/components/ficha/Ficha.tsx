import React from 'react'
import './styleFicha.css'
import lobo from '../../../../assets/images/lobo.svg'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../../app/hooks'
import { Btn } from '../../../../styles/styles'

export const Ficha = () => {
  const caso = useAppSelector((state) => state.ficha)
  return (
    <div className='fichaDatos'>       
      <div >
        <div className="fotoDelCaso">
          <img src={lobo} alt="el hombre de los lobos" />
        </div>
        <div className="datosDeContacto">
          <div className='datoDelCaso'>
            <h5>Caso:</h5>
            <p> {caso.name}</p>
          </div>
          <div className='datoDelCaso'>
            <h5>Edad:</h5>
            <p> {caso.edad} </p>
          </div >
          <div className='datoDelCaso'>
            <h5>Motivo de consulta:</h5>
            <p> {caso.consulta} </p>
          </div>
          <div className='datoDelCaso'>
            <h5>conceptos fundamentales:</h5>
            <p>{caso.conceptos} </p>
          </div>
          <div className='datoDelCaso'>
            <h5> Síntomas</h5>
            <p> {caso.sintomas} </p>           
          </div>
          <div className='datoDelCaso'>
            <h5> Signos</h5>
            <p> {caso.signos} </p>            
          </div>
        </div>
      </div>
      

      <div className="descripcion">
        <h3>Descripción de caso</h3>
        <p> {caso.descripcion} </p>
        <Btn> <Link to='../fichaDelCaso' style={{textDecoration: 'none', color: '#eaced7'}}> 
          
            Editar caso
          
        </Link></Btn>
      </div>
        
      
    </div>
  )
}
