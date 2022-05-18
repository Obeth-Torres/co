import React from 'react'
import { useParams } from 'react-router-dom'

export const OtraConsulta = () => {
  let params = useParams()
  return (
    <div>
      <h2>Consulta: {params.consultaId} </h2>
    </div>
  )
}
