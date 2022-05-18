import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { Familioficha } from './Familioficha'
import "./familiogramaPageStyle.css"

export const FamiliogramaPage = () => {
    const caso = useAppSelector((state) => state.ficha)
  return (
    <div className='familiogramaPage'>
        <div className="familiogramaMain">
           <h2>Familiograma del caso: </h2>
           <p> {caso.name} </p>
            <Familioficha/> 
        </div>
        
    </div>
  )
}
