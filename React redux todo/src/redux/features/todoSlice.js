import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: []
  },

  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload)
      },
      prepare: text => {
        return {
          payload: {
            id: nanoid(),
            text,
            compleded: false
          }
        }
      }
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload)
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    // deleteTodo: (state, action) => {
    //   state.items = state.items.filter((todo) =>
    //   todo.id !== action.payload
    //   );
    // },
    editTodo: (state, action) => {
      todo = state.items.find(todo => todo.id === action.payload)
      console.log(todo)
    }
  }
})
export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer
