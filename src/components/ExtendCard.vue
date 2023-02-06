<template>
  <h3 class="card__title">
    {{ movie?.Title }}
  </h3>
  <article class="card">
    <strong class="card__meta">Release year: {{ movie?.Year }}</strong>
    <strong class="card__meta">Genre: {{ movie?.Genre }}</strong>
    <strong class="card__meta">Rated : {{ movie?.Rated  }}</strong>
    <strong class="card__meta">Director: {{ movie?.Director }}</strong>
    <strong class="card__meta">Actors: {{ movie?.Actors }}</strong>
    <strong class="card__meta">Language: {{ movie?.Language }}</strong>
    <img class="card__img" :alt="movie?.Title" :src="movie?.Poster" />
    <slot />
  </article>
</template>

<script setup lang='ts'>
import { InfoMovie } from '../interfaces/movies'

defineProps<{
  movie: InfoMovie
}>()

</script>

<style lang="scss" scoped>
@use "../assets/styles/settings/_variables.scss";

.card {
  padding: 1rem;
  color: variables.$text-muted-color;
  background: variables.$background-lighter-color;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  &__img {
    display: block;
    width: calc(100% + 2rem);
    max-width: none;
    margin: 1rem  0 -1rem -1rem;
    border-radius: 0 0 5px 5px ;
  }

  &__title {
    margin-bottom: 0.5rem;
    font-weight: 400;
    font-size: variables.$fs-lead;
    line-height: 1.3;
    color: black;

    a {
      text-decoration: none;
    }
  }

  &__meta {
    display: block;
    margin-bottom: 0.5rem;
    
  }
}

</style>
