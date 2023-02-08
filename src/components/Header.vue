<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-menu">
        <li v-for="link in links" :key="link.title" >
          <p @click="selectNewType(link.data)" :class="{ active:type=== link.data}" >{{ link.title }}</p>
        </li>
      </ul>
    </nav>
    <Filters 
      title="title movie or serie"
      @filtered="filterData"
    />
  </header>
</template>

<script setup lang='ts'>
import Filters from './ui/Filters.vue'
import { useMoviesData } from '../composable/useMovieData'

  const links = [
    { title:'Movies', data:'movie' },
    { title:'Series', data:'series'},
]
  const {updateSearch, changeType,type, resetCurrentPage } = useMoviesData()

  const filterData = (data:string):void => {
    updateSearch(data) 
  }
  const selectNewType = (data: "movie" | "series"):void => {
    resetCurrentPage()
    changeType(data)
  }
 
</script>

<style lang="scss" scoped>
@use "../assets/styles/settings/_variables.scss";


.header {
  position: sticky;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 5.5rem;
  width: 100%;
  background:  variables.$background-darker-color;
  box-shadow: 0 0 1rem variables.$background-dark-color;
  z-index: 2;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
}

.nav > p:focus  {
  outline: 2px solid variables.$background-darker-color;
}

.nav-menu {
  display: flex;
  flex-wrap: wrap;
  margin: 0 1rem;
  margin-right: auto;
  padding: 0;
  column-gap: 2rem;
  list-style: none;
}
.nav-menu p {
  color: variables.$background-lighter-color;
  white-space: nowrap;
  cursor: pointer;
}
.nav-menu p:hover,
.nav-menu p:focus {
  border-bottom: 2px solid variables.$text-highlighted-color;
  color: variables.$text-highlighted-color;
  outline: none;
}
.active{
  color: variables.$text-active-color !important;
}
.active:hover {
  border-bottom: 2px solid variables.$text-active-color !important;
}

@media (max-width: 470px) {
  .header {
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .nav{
    padding: 0;
  }
  .nav-menu{
    width: 100vw;
    display: flex ;
    justify-content:center;
    margin:3px 0 3px 0,
  }
}
</style>