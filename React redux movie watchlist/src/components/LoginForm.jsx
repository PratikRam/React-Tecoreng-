import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'

function LoginForm () {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()

    if (!username.trim()) return

    dispatch(login(username))
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-80'>
        <h2 className='text-2xl font-bold text-center mb-6'>Movie Explorer</h2>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Enter username'
            className='border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <button
            type='submit'
            className='bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
