import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface usersState {
    id: string
    name: string
}

export const initialState: usersState[] = [
    { id: '0', name: 'Sigmund Freud' },
    { id: '1', name: 'Jaques Lacan' },
    { id: '2', name: 'Obeth Torres' }
]

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})
    
export const selectAllUsers = (state:RootState) => state.users;
export default usersSlice.reducer
