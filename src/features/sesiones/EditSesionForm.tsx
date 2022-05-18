import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { sesionUpdated } from './sesionesSlice'

export const EditSesionForm = () => {
    const { sesionId } = useParams()
    const sesion = useAppSelector(state => 
        state.sesiones.find(sesion => sesion.id === sesionId))

    const [title, setTitle] = useState(sesion?.title)
    const [content, setContent] = useState(sesion?.content)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const onContentChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value)
    }
    
  return (
    <div>EditSesionForm</div>
  )
}
