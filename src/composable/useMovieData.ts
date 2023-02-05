import { storeToRefs } from "pinia"
import { useMoviesStore } from "../store/moviesStore"
import getMoviesOptions from '../helpers/getMoviesOptions'

export const useMoviesData = () => {
  
  const moviesStore = useMoviesStore()
  const {  type, search } = storeToRefs(moviesStore)

  const changeType = (data: "movie" | "series" | "episode") => {
    moviesStore.changeType(data)
  }

  const updateSearch = (value:string):void => {
    moviesStore.updateSearch(value)
    getMoviesOptions(value)
  }

  return{
    type, search,
    changeType, updateSearch
  }
}