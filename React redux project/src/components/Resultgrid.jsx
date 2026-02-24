import { useDispatch, useSelector } from 'react-redux'
import { fetchVideos, fetchPhotos } from '../api/mediaApi'
import {
  setQuery,
  setLoading,
  setError,
  setResults
} from '../redux/features/searchSlice'
import { useEffect } from 'react'

const Resultgrid = () => {
  const { query, activeTab, loading, error, results } = useSelector(
    store => store.search
  )

  const dispatch = useDispatch()
  useEffect(() => {
    const getdata = async () => {
      try {
        let data
        if (activeTab == 'photos') {
          let response = await fetchPhotos(query)
          data = response.results.map(item => ({
            id: item.id,
            type: 'photo',
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full
          }))
        }
        if (activeTab == 'videos') {
          let response = await fetchVideos(query)
          data = response.videos.map(item => ({
            id: item.id,
            type: 'video',
            title: item.user.name || 'video',
            thumbnail: item.image,
            src: item.video_files[0].link
          }))
        }
        console.log(data)
        dispatch(setResults(data))
      } catch (error) {
        dispatch(setError(error))
      }
    }

    getdata()
  }, [(query, activeTab)])

  if (error) {
    return <h1>Error</h1>
  }
  if (loading) {
    return <h1>Loading...</h1>
  }

  return <div></div>
}

export default Resultgrid
