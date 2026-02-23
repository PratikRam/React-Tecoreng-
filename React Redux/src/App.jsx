import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrement,
  increment,
  incwithAmount
} from './redux/features/counterSlice'

const App = () => {
  const dispatch = useDispatch() // btn k click pe changes karega
  const count = useSelector(state => state.counter.value) // value show karne k liye

  const [jumpwithAmount, setjumpWithAmount] = useState('')

  if (jumpwithAmount.trim() === '') {
    console.log('plz enter a number')
  }

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment())
        }}
      >
        increse
      </button>
      <button
        onClick={() => {
          dispatch(decrement())
        }}
      >
        decrese
      </button>
      <input
        type='number'
        placeholder='enter a number'
        value={jumpwithAmount}
        onChange={e => {
          setjumpWithAmount(e.target.value)
        }}
      />
      <button
        onClick={() => {
          dispatch(incwithAmount(Number(jumpwithAmount)))
          setjumpWithAmount("")
        }}
      >
        jumpwithAmount
      </button>
    </div>
  )
}

export default App
