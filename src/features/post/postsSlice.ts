import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface PostState {
    id: string
    title: string
    content: string
}

const initialState: PostState[] = [
    { 
        id: '1', 
        title: 'La interpretación de los sueños', 
        content: 'En las páginas que siguen demostraré que existe una técnica psicológica que permite interpretar sueños, y que, si se aplica este procedimiento, todo sueño aparece como un producto psíquico provisto de sentido al que cabe asignar un puesto determinado dentro del ajetreo anímico de la vigilia. Intentaré, además, aclarar los procesos que dan al sueño el carácter de algo ajeno e irreconocible, y desde ellos me remontaré a la naturaleza de las fuerzas psíquicas de cuya acción conjugada o contraria nace el sueño.3​!', 
       
    },
    { 
        id: '2', 
        title: 'El sujeto', 
        content: 'Si bien el sujeto está implícito en toda la obra freudiana, hay que extraerlo en una relectura ya que no se lo nomina tan explícitamente. Esto es lo que encontramos en Lacan con su retorno a Freud, que al modo de los trabajos de refinería química entre otros productos refina este concepto de sujeto para poder apreciarlo.' , 
    }
]

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {        
        postAdded: {
            reducer(state, action: PayloadAction<PostState>) {
                state.unshift(action.payload)
            },
            prepare(title, content, userId) {
                return{
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        user: userId
                    }
                }
               
            }
        },
        postUpdated(state, action) {
            const {id, title, content} = action.payload
            const existingPost = state.find(post => post.id === id)

            if(existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        },
    }
})

export const { postAdded, postUpdated } = postsSlice.actions
export default postsSlice.reducer