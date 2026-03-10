import SearchBar from '../components/SearchBar'
import MovieGrid from '../components/Moviegrid'
import Header from '../components/Header'

function Discover () {
  return (
    <div className='bg-gray-200'>
      <div className='max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold text-center pt-6 mb-5'>
          Movie Explorer
        </h1>
        <Header />
        <SearchBar />

        <MovieGrid />
      </div>
    </div>
  )
}

export default Discover
