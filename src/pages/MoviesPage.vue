<template >
    <Header />
    <SimplePagination 
      :totalPage='totalFound'
      :currentPage='currentPage'
      @pagechanged='changeCurrentPage'
    />
    <h1 v-if="moviesArr.length < 1">
      <Spinner />
    </h1>
    <div v-else class="courses">
        <Title> Movies </Title>
        <section class="courses__grid">
          <Card 
            v-for ='movie in moviesArr.data.Search'
            :movies="movie"
            :key="movie.imdbID"
          /> 
        </section>
    </div>    
</template>

<script setup lang='ts'>

import { ref, onMounted, watch  } from 'vue';
import { Movies } from '../interfaces/movies';
import { useMoviesData } from '../composable/useMovieData';
import getMoviesOptions from '../helpers/getMoviesOptions'

import Header from '../components/Header.vue'
import Card from '../components/Card.vue'
import Title from '../components/ui/Title.vue'
import Spinner from '../components/ui/Spinner.vue'
import SimplePagination from '../components/ui/SimplePagination.vue'

const moviesArr = ref<Movies[]>([])
const {search,type,currentPage, totalFound, updatecurrentPage} = useMoviesData()
onMounted(() => getMoviesArray())

const getMoviesArray = async () => { 
  moviesArr.value = await getMoviesOptions(search.value)
}
const changeCurrentPage= (value:number)=> {
  updatecurrentPage(value)
  console.log(value);
  
}
watch(search, (newValue, oldValue) => {
  getMoviesArray()
});

watch(type, (newValue, oldValue) => {
  getMoviesArray()
});

watch(currentPage, (newValue, oldValue) => {
  getMoviesArray()
});

</script>

<style lang="scss" scoped>
@use "../assets/styles/settings/_variables.scss";

.courses {
  background: variables.$background-light-color;
  border-bottom: 1px solid variables.$border-inverted-color;

  &__filters {
    margin-bottom: 3rem;
  }

  &__grid {
    padding: 2rem 2rem;
    gap: 1.87rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr)) ;
    min-height: 100vh;
  }

  &__item {
    margin-bottom: 1.87rem;
    break-inside: avoid;
  }
}
</style>
