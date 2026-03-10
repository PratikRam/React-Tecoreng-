import { useDispatch } from 'react-redux'
import { addToWatchlist } from '../features/movies/moviesSlice'

function MovieCard ({ movie }) {
  const dispatch = useDispatch()

  return (
    <div className='shadow-md rounded-lg overflow-hidden hover:scale-105 transition ease-in-out duration-300'>
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : '/no-image.png'}
        alt={movie.Title}
        className='w-full h-64 object-cover p-2 rounded-2xl'
      />

      <div className='p-4'>
        <h3 className='font-semibold text-lg'>{movie.Title}</h3>

        <p className='text-gray-500'>{movie.Year}</p>

        <button
          onClick={() => 
            dispatch(addToWatchlist(movie),
            
          )}
          className='mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'
        >
          Add to Watchlist
        </button>
      </div>
    </div>
  )
}

export default MovieCard
