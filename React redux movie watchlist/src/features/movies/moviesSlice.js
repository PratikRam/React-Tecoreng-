import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { searchMovies } from '../../api/omdbApi'

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ({ searchTerm, page }) => {
    const data = await searchMovies(searchTerm, page)
    return data
  }
)

const initialState = {
  movies: [],
  watchlist: [],
  searchTerm: '',
  page: 1,
  loading: false,
  error: null,
  hasMore: true
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,

  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
      state.movies = []
      state.page = 1
      state.hasMore = true
    },

    addToWatchlist: (state, action) => {
      const exists = state.watchlist.find(
        movie => movie.imdbID === action.payload.imdbID
      )

      if (!exists) {
        state.watchlist.push({ ...action.payload, watched: false })
      }
    },

    removeFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(
        movie => movie.imdbID !== action.payload
      )
    },

    toggleWatched: (state, action) => {
      const movie = state.watchlist.find(m => m.imdbID === action.payload)

      if (movie) {
        movie.watched = !movie.watched
      }
    }
  },

  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.loading = true
      })

      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false

        if (action.payload.Search) {
          state.movies = [...state.movies, ...action.payload.Search]
          state.page += 1
        } else {
          state.hasMore = false
        }
      })

      .addCase(fetchMovies.rejected, state => {
        state.loading = false
        state.error = 'Failed to fetch movies'
      })
  }
})

export const {
  setSearchTerm,
  addToWatchlist,
  removeFromWatchlist,
  toggleWatched
} = moviesSlice.actions

export default moviesSlice.reducer
