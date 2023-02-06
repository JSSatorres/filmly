<template>
  <div class="demo">
    <form class="form-search" @submit.prevent>
      <input
        class="form-control form-text"
        maxlength="128"
        :placeholder="title"
        size="15"
        type="text"
        v-model="search"
      />
      <button
        class="btn"
        @click.prevent="filter"
      >
        Search
      </button>
    </form>
  </div>
</template>

<script setup lang='ts'>
import { ref } from "vue"

const search = ref("")

const props = defineProps<{
  title: string
}>()

const emit = defineEmits<{
  (e: 'filtered', search: string): void
}>()

const filter = () => {
  emit("filtered",search.value)
  search.value = ""
}

</script>

<style lang='scss'>
@use "../../assets/styles/settings/_variables.scss";
.demo {
    position:relative;
    height:5rem;
    min-width:2rem;
}

.demo .form-search {
    height: 100%;
    display: flex;
    align-items: center;
}

.demo .form-search input[type=text] {
    -webkit-appearance: textfield;
    background-color: variables.$background-light-color;
    border-top-left-radius:0.8rem;
    border-bottom-left-radius:0.8rem;
    font-family: inherit;
    font-size: 100%;
    border: solid 1px #ccc;
    padding: 0.45rem;
    width: 8rem;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    transition: all .5s;
}

.demo .form-search input[type=text]:focus {
    width: 11rem;
    background-color: #fff;
}

.demo .form-search button.btn {
    background-color:variables.$primary-color ;
    padding:0.6rem 0.2rem;
    border-top-right-radius:0.8rem;
    border-bottom-right-radius:0.8rem;
    margin-right: 0.2rem;
    color: variables.$text-dark-color ;
    cursor:pointer;
}

.demo .form-search button.btn:hover {
    background-color:variables.$text-highlighted-color ;
    color: variables.$text-inverted-color ;
}

@media (max-width: 470px) {
  .demo{
    height: 1.5rem;
    margin-bottom: 1rem;
  }
}
</style>