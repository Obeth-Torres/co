import React from 'react'
import './sesionesListStyle.css'
import { useAppSelector } from '../../app/hooks'
import { Link } from 'react-router-dom'

export const SesionesList = () => {
  const sesiones = useAppSelector(state => state.sesiones)
  const renderedSesiones = sesiones.map(sesion => (
      <article>
          <h3> {sesion.title} </h3>
          <p> {sesion.content.substring(0, 100)} </p>
          <Link to={`${sesion.id}`} >
            view session
          </Link>
      </article>
  ))
  return (
    <section className='sesionesList'>
        <h2>Sesiones del caso</h2>
        {renderedSesiones}
    </section>
  )
}
