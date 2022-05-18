import { RootState } from './../../app/store';
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface ISesiones {
    id: string
    title: string
    content: string    
}
const initialState: ISesiones[] = [
    {id: '0', title: 'entrevista 1', content: 'anotaciones de la primera entrevista'},
    { id: '1', title: 'entrevista 2', content: 'anotaciones de la primera entrevista'},
    { id: '2', title: 'entrevista 3', content: 'anotaciones de la primera entrevista'},
]

 export const sesionesSlice = createSlice({
    name: 'sesiones',
    initialState,
    reducers: {
        sesionAdded: {
            reducer(state, action: PayloadAction<ISesiones>) {
                state.unshift(action.payload)
            },
            prepare(title, content ) {
                return{
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        },
        sesionUpdated(state, action: PayloadAction<ISesiones>) {
            const {id, title, content} = action.payload
            const existingSesion = state.find(sesion => sesion.id === id)
            if(existingSesion) {
                existingSesion.title = title
                existingSesion.content = content
            }
        }
    }
})

export const selectAllSesiones = (state: RootState) => state.sesiones
export const { sesionAdded, sesionUpdated } = sesionesSlice.actions

export default sesionesSlice.reducer;