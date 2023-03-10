import axios from 'axios'

const moviesApi = axios.create({
    baseURL: 'https://www.omdbapi.com/',
    params: {
        apikey:  import.meta.env.VITE_API_KEY_OMDb,
      }
})

export default moviesApi

