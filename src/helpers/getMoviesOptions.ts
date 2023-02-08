import moviesApi from '../api/moviesApi'
import { Movies, ApiResponse } from '../interfaces/movies'
import { useMoviesData,  } from '../composable/useMovieData';

const getMoviesOptions = async(movieName = 'robot') : Promise<Movies[]> => {
  const { type, currentPage, updatetotalFound, totalFound } = useMoviesData()

  const movies : ApiResponse = await moviesApi.get('', {
    params: {
      s: movieName,
      type: type.value,
      r: 'json',
      page:currentPage.value,
    },
  })
  updatetotalFound( parseInt( movies.data.totalResults))

  return movies.data.Search ?? movies.data
}
export default getMoviesOptions



