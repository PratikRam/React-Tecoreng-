import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './redux/features/userSlice'

const App = () => {
  const dispatch = useDispatch()
  const { users, loading, error } = useSelector(state => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div style={{ padding: '20px' }}>
      <h2>User List</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {users.map(user => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default App
