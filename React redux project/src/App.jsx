import React from 'react'
// import { fetchPhotos, fetchVideos } from './api/mediaApi'
import Searchbar from './components/Searchbar'
import Tabs from './components/Tabs'
import Resultgrid from './components/Resultgrid'

const App = () => {
  return (
    <div className='bg-gray-500 h-screen'>
      <Searchbar />
      <Tabs />
      <Resultgrid />
    </div>
  )
}

export default App
