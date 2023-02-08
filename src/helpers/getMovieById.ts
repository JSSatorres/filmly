import moviesApi from '../api/moviesApi'
import { InfoMovie, ApiResponse } from '../interfaces/movies'
import { useMoviesData,  } from '../composable/useMovieData';

// const getMovieById = async(imdbID :string) : Promise<InfoMovie> => {
const getMovieById = async(imdbID :string) : Promise<any> => {

  const { type, currentPage, updatetotalFound, totalFound } = useMoviesData()
  try {
    const movies : ApiResponse = await moviesApi.get('', {
      params: {
        i: imdbID,
        r: 'json',
        plot:'full',
      },
    })
    return movies.data
      
  } catch (error : any) {
    throw new Error(error);
    
  }
}
export default getMovieById