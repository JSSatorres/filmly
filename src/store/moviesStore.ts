import { ref } from 'vue'
import { defineStore } from 'pinia'

interface MoviesState {
  type  :  boolean
  search :  string
  moviesCheck: ()=>{}
  filmCheck: ()=>{}
}

type selectionType = "movie" | "series" | "episode"

export const useMoviesStore = defineStore('movieData', () => {
  const type   = ref <selectionType> ("movie")
  const search = ref <string> ('robot')
  const currentPage = ref <number> (1)
  const totalFound = ref <number> (0)

  const changeType = (newType:selectionType):void => {
      type.value = newType
  }

  const updateSearch = (value:string):void => {
    search.value = value
  }
  const updatecurrentPage = (value:number):void => {
    currentPage.value += value
  }
  const updatetotalFound = (value:number):void => {
    totalFound.value = value
  }
  return { 
    type, search, currentPage, totalFound,
    changeType, updateSearch, updatecurrentPage, updatetotalFound,
  }
})