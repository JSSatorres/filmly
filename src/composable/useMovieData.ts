import { storeToRefs } from "pinia"
import { useMoviesStore } from "../store/moviesStore"

export const useMoviesData = () => {
  
  const moviesStore = useMoviesStore()
  const {  type, search, currentPage, totalFound } = storeToRefs(moviesStore)

  const changeType = (data: "movie" | "series" | "episode") => {
    moviesStore.changeType(data)
  }

  const updateSearch = (value:string):void => {
    moviesStore.updateSearch(value)
  }

  const updatecurrentPage = (value:number):void => {
    moviesStore.updatecurrentPage(value)
  }

  const updatetotalFound = (value:number):void => {
    moviesStore.updatetotalFound(value)
  }
  const resetCurrentPage = ():void => {
    moviesStore.resetCurrentPage()
  }
  return{
    type, search, currentPage, totalFound,
    changeType, updateSearch, updatecurrentPage, updatetotalFound, resetCurrentPage
  }
}