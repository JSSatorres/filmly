<template>
  <div class="loading">
  <!-- Add to control load-->
  <!-- <div class="loading" v-if="loading"> -->
    <span>Loading</span>
    <div class="spinner" />
  </div>
</template>

<script setup lang="ts">

defineProps<{
  loading: boolean
}>()

</script>

<style lang="scss" scoped>
@use "../../assets/styles/settings/_variables.scss";

.loading{
display:flex;
align-items:center;

 &.position {
   position: absolute;
 }

span{
  margin-right:1rem;
  font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
}

.spinner {
    border: 4px solid variables.$background-darker-color;
    border-left-color: transparent;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    animation: spin 1s linear infinite;
}
}
@keyframes spin {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
</style>