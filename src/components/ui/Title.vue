<template>
  <component :is="tag" class="title">
    <slot />
  </component>
</template>

<script setup lang="ts" >
interface Props {
  tag?: string
}
const props = withDefaults(defineProps<Props>(),{
   tag: "h3"
})

</script>

<style lang="scss" scoped>
 @use "../../assets/styles/settings/_variables.scss";
 @use "../../assets/styles/settings/_typography.scss";

.title {
  text-align: center;
}
</style>   
