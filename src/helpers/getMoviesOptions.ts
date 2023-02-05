import moviesApi from '../api/moviesApi'
import { Movies } from '../interfaces/movies'
import { useMoviesData } from '../composable/useMovieData';

const getMoviesOptions = async(movieName = 'robot') : Promise<Movies[]> => {
  const {type} = useMoviesData()

  const movies : Movies[] = await moviesApi.get('', {
    params: {
      s: movieName,
      type: type.value,
      r: 'json',
      page:1,
    },
  })

  return movies
}

export default getMoviesOptions



