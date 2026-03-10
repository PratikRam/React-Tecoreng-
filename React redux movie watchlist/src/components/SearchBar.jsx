import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm, fetchMovies } from '../features/movies/moviesSlice'

function SearchBar () {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()

    if (!query.trim()) return

    dispatch(setSearchTerm(query))
    dispatch(fetchMovies({ searchTerm: query, page: 1 }))
  }

  return (
    <form onSubmit={handleSubmit} className='flex justify-center gap-2 my-6'>
      <input
        type='text'
        placeholder='Search movies...'
        className='border p-2 rounded w-72'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <button className='bg-blue-500 text-white px-4 rounded hover:bg-blue-600'>
        Search
      </button>
    </form>
  )
}

export default SearchBar
