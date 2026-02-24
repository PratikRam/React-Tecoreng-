import React, { useState } from 'react'
import { setQuery } from '../redux/features/searchSlice'
import { useDispatch } from 'react-redux'

const Searchbar = () => {
  const [text, setText] = useState('')

  console.log(text)

  const dispatch = useDispatch()

  function submitHandler (e) {
    e.preventDefault()
    dispatch(setQuery(text))
    setText('')
  }

  return (
    <div>
      <form className='' onSubmit={submitHandler}>
        <input
          type='text'
          required
          placeholder='Search enything...'
          className='mx-4 my-6 border rounded w-70 px-3 py-2 outline-none '
          value={text}
          onChange={e => {
            setText(e.target.value)
          }}
        />
        <button className='active:scale-95 border rounded bg-sky-500 px-3 py-2 font-semibold'>
          Search
        </button>
      </form>
    </div>
  )
}

export default Searchbar
