import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../features/auth/authSlice'

function Header () {
  const dispatch = useDispatch()

  return (
    <div className='bg-gray-900 text-white p-4 flex justify-between rounded'>
      <h1 className='font-bold text-lg'>Movie Explorer</h1>

      <div className='flex gap-4'>
        <Link to='/'>Discover</Link>

        <Link to='/watchlist'>Watchlist</Link>

        <button
          onClick={() => dispatch(logout())}
          className='bg-red-500 px-3 rounded'
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Header
