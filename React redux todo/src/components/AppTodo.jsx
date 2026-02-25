import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo
} from '../redux/features/todoSlice'

const AppTodo = () => {
  const [input, setInput] = useState('')
  console.log(input)

  const dispatch = useDispatch()
  const allTodos = useSelector(state => state.todos.items)

  function submitHandler (e) {
    e.preventDefault()
    if (input.trim() == '') {
      return
    }
    dispatch(addTodo(input))
    console.log(allTodos)
    setInput('')
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='enter todo'
          className='m-5 border rounded py-2 px-3 hover:bg-gray-300 '
          value={input}
          onChange={e => {
            setInput(e.target.value)
          }}
        />
        <button className='rounded bg-sky-500 font-semibold py-2 px-3 active:scale-95 active:bg-gray-600 active:text-white'>
          Add Todo
        </button>
      </form>

      <div>
        {allTodos.map(todo => {
          return (
            <ul className='flex gap-1.5 items-center'>
              <li
                key={todo.id}
                onClick={() => {
                  dispatch(toggleTodo(todo.id))
                }}
                className='text-black ml-5 bg-sky-400 w-fit mb-2 rounded px-3 py-1 cursor-pointer '
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none'
                }}
              >
                {todo.text}
              </li>
              <span
                className='cursor-pointer bg-emerald-300 rounded'
                onClick={() => {
                  dispatch(editTodo(todo.id))
                }}
              >
                Edit
              </span>
              <span
                className='cursor-pointer'
                onClick={() => {
                  dispatch(deleteTodo(todo.id))
                }}
              >
                ❌
              </span>
            </ul>
          )
        })}
      </div>
    </div>
  )
}

export default AppTodo
