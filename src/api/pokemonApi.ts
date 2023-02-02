import axios from 'axios'


const moviesApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export default moviesApi