
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"

export interface FichaState {
    name: string
    analisante: string
    consulta: string
    edad: number
    conceptos: string
    sintomas: string
    signos: string
    descripcion: string
}

const initialState: FichaState = {
    name: 'El hombre de los lobos',
    analisante: '',
    consulta: 'motivo de consulta',
    edad: 35,
    conceptos: 'conceptos fundamentales',
    sintomas: 'angustia, miedo',
    signos: 'insomnio',
    descripcion: 'A la hora de tratar al Hombre de los Lobos Freud se centra en su pesadilla en la cual está tumbado en una cama y ve a unos cuantos lobos sentados en un árbol frente a una ventana abierta. Freud dedujo que ese sueño simboliza un trauma: que el Hombre de los Lobos, cuando era un niño, observó a sus padres realizar el acto sexual. La interpretación de Freud sobre el supuesto trauma, sin embargo, es contradicho por el mismísimo Hombre de los Lobos, Sergej Pankejeff, en una entrevista realizada por Karin Obholzer, una periodista que le siguió de cerca en Viena en 1970.'
}

export const fichaSlice = createSlice({
    name: 'ficha',
    initialState,
    reducers: {
        updateCase: (state, action: PayloadAction<FichaState>) => {
            state.name = action.payload.name;
            state.analisante = action.payload.analisante;
            state.consulta = action.payload.consulta;
            state.edad = action.payload.edad;
            state.conceptos = action.payload.conceptos;
            state.sintomas = action.payload.sintomas
            state.signos = action.payload.signos;
            state.descripcion = action.payload.descripcion;
        }
            
    }
})

export const { updateCase } = fichaSlice.actions
export default fichaSlice.reducer;
