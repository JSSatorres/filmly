import axios from 'axios'


const moviesApi = axios.create({
    baseURL: 'http://www.omdbapi.com/',
    params: {
        apikey:  import.meta.env.VITE_API_KEY_OMDb,
      }
})
//TODO: env
export default moviesApi

