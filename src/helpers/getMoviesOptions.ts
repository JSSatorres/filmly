import moviesApi from '../api/moviesApi'
import { Movies } from '../interfaces/movies'
import { useMoviesData } from '../composable/useMovieData';

const getMoviesOptions = async(movieName = 'robot') : Promise<Movies[]> => {
  const {type,currentPage,totalFound} = useMoviesData()

  const movies : Movies[] = await moviesApi.get('', {
    params: {
      s: movieName,
      type: type.value,
      r: 'json',
      page:currentPage.value,
    },
  })
  console.log(movies);
  
  totalFound.value = parseInt( movies.data.totalResults) as number

  return movies
}

export default getMoviesOptions



