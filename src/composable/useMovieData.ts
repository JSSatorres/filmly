import { storeToRefs } from "pinia"
import { useMoviesStore } from "../store/moviesStore"
import getMoviesOptions from '../helpers/getMoviesOptions'

export const useMoviesData = () => {
  
  const moviesStore = useMoviesStore()
  const {  type, search, currentPage, totalFound  } = storeToRefs(moviesStore)

  const changeType = (data: "movie" | "series" | "episode") => {
    moviesStore.changeType(data)
  }

  const updateSearch = (value:string):void => {
    moviesStore.updateSearch(value)
    getMoviesOptions(value)
  }

  const updatecurrentPage = (value:number):void => {
    moviesStore.updatecurrentPage(value)
    getMoviesOptions(search.value)
  }

  const updatetotalFound = (value:number):void => {
    moviesStore.updatetotalFound(value)
    getMoviesOptions(search.value)
  }

  return{
    type, search, currentPage, totalFound,
    changeType, updateSearch, updatecurrentPage, updatetotalFound,
  }
}