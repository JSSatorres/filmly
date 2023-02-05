import { ref } from 'vue'
import { defineStore } from 'pinia'

interface MoviesState {
  type  :  boolean
  search :  string
  moviesCheck: ()=>{}
  filmCheck: ()=>{}
}

type selectionType = "movie" | "series" | "episode"

export const useMoviesStore = defineStore('movieDta', () => {
  const type   = ref <selectionType> ("movie")
  const search = ref <string> ('robot')

  const changeType = (newType:selectionType):void => {
      type.value = newType
  }

  const updateSearch = (value:string):void => {
    search.value = value
  }
  return { type, search, changeType, updateSearch }
})