import axios from 'axios'

const API_KEY = import.meta.env.VITE_OMDB_API_KEY

export const searchMovies = async (searchTerm, page = 1) => {
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&page=${page}`
  )

  return response.data
}
