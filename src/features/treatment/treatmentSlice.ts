import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import  uuidv4  from 'uuid'

interface Task {
    id: string
    text: string
}
interface List {
    id: string
    text: string
    tasks: Task[]
}
export interface TreatmentState {
    lists: List[]
}

const initialState: TreatmentState = {
    lists: [
        {
            id: '0',
            text: 'To do',
            tasks: [{id: 'c0', text: 'Learn typescript'}]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{ id: "c2", text: "Learn Typescript" }]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{ id: "c3", text: "Begin to use static typing" }]
        }
    ]
}

export const treatmentSlice = createSlice({
    name: 'treatment',
    initialState,
    reducers: {
        add_list: (state, action: PayloadAction<TreatmentState>) => {
            state.lists = state.lists, {id: uuidv4, text: action.payload, tasks: []}
        }
    }
})

export const { add_list } = treatmentSlice.actions
export default treatmentSlice.reducer;