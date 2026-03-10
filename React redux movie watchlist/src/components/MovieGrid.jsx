import { useDispatch, useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { fetchMovies } from '../features/movies/moviesSlice'
import MovieCard from './MovieCard'

function MovieGrid () {
  const dispatch = useDispatch()

  const { movies, searchTerm, page, hasMore, loading } = useSelector(
    state => state.movies
  )

  const loadMore = () => {
    dispatch(fetchMovies({ searchTerm, page }))
  }

  return (
    <div className='p-6'>
      <InfiniteScroll
        dataLength={movies.length}
        next={loadMore}  
        hasMore={hasMore}
        loader={<h4 className='text-center mt-4'>Loading...</h4>}
        endMessage={
          <p className='text-center mt-4 text-gray-500'>No more movies</p>
        }
      >
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </InfiniteScroll>

      {loading && (
        <p className='text-center mt-4 text-blue-500'>Fetching movies...</p>
      )}
    </div>
  )
}

export default MovieGrid
