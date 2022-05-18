import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'


export const SingleSesionPage = () => {
    const { sesionId } = useParams()

    const sesion = useAppSelector((state) => 
    state.sesiones.find((sesion) => sesion.id === sesionId))

    if (!sesion) {
        return(
            <section>
                <h2>session not found!</h2>
            </section>
        )
    }
    
  return (
      <section>
          <article>
              <h2> {sesion.id} </h2>
              <div>
                  <p> {sesion.content} </p>
                  <Link to={`sesion/${sesion.id}`} />
              </div>
          </article>
      </section>
  )
}
