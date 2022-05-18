import React, { ChangeEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import './FichaStyle.css'
import { updateCase } from '../../../features/ficha/fichaSlice'
import { Link } from 'react-router-dom'
import { Btn } from '../../../styles/styles'


export const FichaDelCaso = () => {
    const caso= useAppSelector((state) => state.ficha)
    const dispatch = useAppDispatch()

    const [name, setName] = useState('Nombre del caso: ')
    const [consulta, setConsulta] = useState('Motivo de consulta: ')
    const [analisante, setAnalisante] = useState('analisante')
    const [edad, setEdad] = useState(0)
    const [conceptos, setConceptos] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [signos, setSignos] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const updateName = (event:ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const updateConsulta = (event:ChangeEvent<HTMLInputElement>) => {
        setConsulta(event.target.value)
    }
    const updateAnalisante = (event:ChangeEvent<HTMLInputElement>) => {
        setAnalisante(event.target.value)
    }
    const updateEdad = (event:ChangeEvent<HTMLInputElement>) => {
        setEdad(Number(event.target.value))
    }
    const updateConceptos = (event:ChangeEvent<HTMLInputElement>) => {
        setConceptos(event.target.value)
    }
    const updateSintomas = (event:ChangeEvent<HTMLInputElement>) => {
        setSintomas(event.target.value)
    }
    const updateSignos = (event: ChangeEvent<HTMLInputElement>) => {
        setSignos(event.target.value)
    }
    const updateDescripcion = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDescripcion(event.target.value)
    }

    const builCase = () => {
        dispatch(updateCase({name, analisante, consulta, edad, conceptos, sintomas, signos, descripcion}))
    }

  return (
    <div className='fichaStyle'>
        <div className='boxFicha'>
            <div className='datosDelCaso'>
                <h2>Ficha del caso</h2>
            
                <div className='itemDelCaso'>
                    <label htmlFor="caso">Nombre del caso: </label>
                    <input onChange={updateName} type="text" name='name' placeholder={caso.name} /> 
                </div>
                <div className='itemDelCaso'>
                    <label htmlFor="analisante">Nombre del Analisante: </label>
                    <input onChange={updateAnalisante} type="text" name='paciente' placeholder='nombre del analisante' />
                </div>
                <div className='itemDelCaso'>
                    <label htmlFor="consulta">Motivo de consulta: </label>
                    <input onChange={updateConsulta} type="text" name='consulta' placeholder={caso.consulta} />
                </div>
                <div className='itemDelCaso'>
                    <label htmlFor="edad">Edad: </label>
                    <input onChange={updateEdad} type="number" name='edad' />
                </div>                     
                <div className='itemDelCaso'>
                    <label htmlFor="conceptos">Conceptos Fundamentales: </label>
                    <input onChange={updateConceptos} type="text" name='conceptos' placeholder='Conceptos fundamentales' />
                </div>
                <div className='itemDelCaso'>
                    <label htmlFor="sintomas">Síntomas: </label>
                    <input onChange={updateSintomas} type="text" name='sintomas' placeholder='síntomas' />
                </div>
                <div className='itemDelCaso'>
                    <label htmlFor="signos">Signos: </label>
                    <input onChange={updateSignos} type="text" name='sigmos' placeholder='Signosgnos' />
                </div>

                
                
            </div>

            <div className="descripcionDelCaso">
                <h2>Descripción del caso</h2>
                <textarea onChange={updateDescripcion} name="description" id="descripcion"></textarea>
            </div>
            <Btn onClick={builCase}><Link  to='../ficha'
                    style={{textDecoration: 'none', color: '#eaced7'}} >construir caso</Link> </Btn>
        </div>        
       
    </div>
  )
}
