import { useDispatch, useSelector } from 'react-redux'
import {
  toggleWatched,
  removeFromWatchlist
} from '../features/movies/moviesSlice'

function WatchList () {
  const dispatch = useDispatch()
  const { watchlist } = useSelector(state => state.movies)

  if (watchlist.length === 0) {
    return (
      <p className='text-center text-gray-500 mt-6'>Your watchlist is empty</p>
    )
  }

  return (
    <div className='space-y-4'>
      {watchlist.map(movie => (
        <div
          key={movie.imdbID}
          className='flex items-center justify-between bg-white shadow p-4 rounded'
        >
          <div className='flex items-center gap-4'>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className='w-16 h-20 object-cover rounded'
            />

            <div>
              <h3 className='font-semibold'>{movie.Title}</h3>
              <p className='text-gray-500'>{movie.Year}</p>
            </div>
          </div>

          <div className='flex gap-2'>
            <button
              onClick={() => dispatch(toggleWatched(movie.imdbID))}
              className='px-3 py-1 bg-green-500 text-white rounded'
            >
              {movie.watched ? 'Watched' : 'Mark Watched'}
            </button>

            <button
              onClick={() => dispatch(removeFromWatchlist(movie.imdbID))}
              className='px-3 py-1 bg-red-500 text-white rounded'
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WatchList
