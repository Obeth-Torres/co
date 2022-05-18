import React, { ChangeEvent, useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { sesionAdded } from './sesionesSlice'

export const AddSesionForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useAppDispatch()

    const onTitleChanged = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const onContentChanged = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
    }
    const onSaveSesionClicked = () => {
        if (title && content) {
            dispatch(
                sesionAdded(title, content)
            )
            setTitle('')
            setContent('')
        }
    }
        
  return (
    <section>
        <h2>Nueva Sesion</h2>
        <form action="">
            <label htmlFor="sesionTitle">Titulo de la sisión: </label>
            <input type="text"
            id='sesionTitle'
            name='sesionTitle'
            value={title}
            onChange={onTitleChanged} />

            <label htmlFor="">Content: </label>
            <textarea name="sesionContent" id="sesionContent" value={content} 
                onChange={onContentChanged}/>
            <button type='button' onClick={onSaveSesionClicked}>
                Guardar sesión
            </button>

        </form>
    </section>
  )
}
