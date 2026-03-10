import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import LoginForm from './components/LoginForm'
import Discover from './pages/Discover'
import WatchlistPage from './pages/Watchlistpage'

function App () {
  const { isAuthenticated } = useSelector(state => state.auth)

  return (
    <Routes>
      {!isAuthenticated ? (
        <>
          <Route path='/' element={<LoginForm />} />
          <Route path='*' element={<Navigate to='/' />} />
        </>
      ) : (
        <>
          <Route path='/' element={<Discover />} />
          <Route path='/watchlist' element={<WatchlistPage />} />
        </>
      )}
    </Routes>
  )
}

export default App