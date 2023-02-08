<template>
  <div v-if="showPagination" class="pagination">
    <button 
      type="button"
      class="action pagination"
      @click="onClickPreviousPage"
      :disabled="currentPage < 2"
    >
      <span><i class="arrow left"></i></span>
    </button>
    <div class="current-page">
      {{ currentPage }}
    </div>
    <button
      type="button"
      class="action pagination"
      @click="onClickNextPage"
      :disabled="!showPagination || activeNextPage"
    >
      <span><i class="arrow right"></i></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  currentPage:number
  totalPage:number,
}>()

const emit = defineEmits<{
  (e: 'pagechanged', page: number): void
}>()

const showPagination = computed(() => {
  return props.totalPage > 0
})  

const onClickPreviousPage = () => {
  emit("pagechanged",  - 1)
}

const onClickNextPage = () => {
  emit("pagechanged",  + 1)
}
const activeNextPage = computed(() => {
  return props.totalPage < props.currentPage * 10
})
</script>

<style scoped lang="scss">
@use "../../assets/styles/settings/_variables.scss";

.pagination {
    margin: 1rem 0;
    padding: 0.25rem;
    display: flex;
    justify-content: center;
    background-color:  variables.$background-light-color;
  button {
    height: 2rem;
    padding: 0.5rem;
    margin-right: 0.3rem;
    background: #fff;
    border: none;
    border-radius: 4px;
    color: #333;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background:variables.$text-highlighted-color;
      color: #fff;
      .icon::before {
          color: #fff !important;
      }
    }

    &:disabled {
      color: #fff;
      cursor: default;
    }
  }
}

.action {
  .icon::before {
    font-size: 1rem !important;
    color: #333 !important;
  }
}

.current-page {
  padding: 0 1rem;
  color: #333;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
button.pagination {
  &:disabled {
    background-color: #80808059;
    opacity: .4;
    cursor: default;

      &:hover {
      background-color: #80808059;

      .icon::before {
          color: #333 !important;
      }
    }
  }
}
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>
