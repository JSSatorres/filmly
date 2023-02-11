<script setup lang='ts'>

import { ref, reactive, onMounted, watch, computed } from 'vue';
import { Movies, InfoMovie } from '../interfaces/movies';
import { useMoviesData } from '../composable/useMovieData';
import getMoviesOptions from '../helpers/getMoviesOptions'
import getMovieById from '../helpers/getMovieById'

import Header from '../components/Header.vue'
import Card from '../components/Card.vue'
import ExtendCard from '../components/ExtendCard.vue'
import Modal from '../components/ui/Modal.vue'
import Title from '../components/ui/Title.vue'
import Spinner from '../components/ui/Spinner.vue'
import SimplePagination from '../components/ui/SimplePagination.vue'

const {search,type,currentPage, totalFound, updatecurrentPage} = useMoviesData()

const moviesArr = ref<Movies[] | any>([])
const movieInfo = ref<InfoMovie>()

const currentTab = ref<string>('tab1');
const tabs:  { [key: string]: string | typeof ExtendCard }   =  { 
  tab1: "",
  tab2: ExtendCard
}

onMounted(() => getMoviesArray())

const getMoviesArray = async () => {   
  moviesArr.value = await getMoviesOptions(search.value)
}

const changeCurrentPage = (value:number)=> {
  updatecurrentPage(value)
}

const lastElement = computed(()=>{
  let numberTo = currentPage.value * 10
  if (currentPage.value * 10 > totalFound.value) {
      numberTo = currentPage.value * 9 + (totalFound.value - currentPage.value * 9) 
  }
  return numberTo
})

const openModal = async (imdbID:string, componentName:string): Promise<void> => {
  currentTab.value = componentName
  movieInfo.value = await getMovieById(imdbID)

}
const closeModal = (imdbID:string):void => {
 currentTab.value = 'tab1';
}

watch([search, type,currentPage], ([newSearch, newType, newCurrentPage]) => {
  getMoviesArray()
});

</script>

<template >
  <Modal
    v-if="tabs[currentTab] !== ''"
    @close="closeModal"
    title="component.title"
  >
    <component
      :is="tabs[currentTab]"
      :key="tabs[currentTab]"
      :movie="movieInfo"
    />
  </Modal>
  <Header />
  <SimplePagination 
    :totalPage='totalFound'
    :currentPage='currentPage'
    @pagechanged='changeCurrentPage'
  />
  <div v-if="moviesArr.Error" class="courses">
    <div class="container">
      <Title> <h2>{{moviesArr?.Error}}</h2> </Title>
      <div class="container__image">
        <img src="../assets/images/images.jpg" alt="try again">
      </div>
    </div>
  </div>
  <div v-else class="courses">
    <div v-if="moviesArr.length < 1">
      <Spinner />
    </div>
    <div v-else>
      <Title> <h2>Results: {{totalFound}}</h2> </Title>
      <Title> 
        <h3>showing results from {{currentPage * 10 -9 }} to {{lastElement }} </h3>
      </Title>
      <section class="courses__grid">
        <Card 
          v-for ='movie in moviesArr'
          :movies="movie"
          :key="movie.imdbID"
            @click="openModal(movie.imdbID,'tab2')"
        /> 
      </section>
    </div>
  </div>   
</template>

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
  .container{
    padding: 4rem;
    margin: auto;

    &__image{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
    }
    img {
      height: 60vh;
    }
  }
}

@media (max-width: 470px) {
  .courses__grid {
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr)) ;
  }
  .courses{
    height: 85vh;
  }
   img {
      height: 40vh !important;
    }
}
</style>
