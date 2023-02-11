<template>
  <div class="modal-container">
    <div class="modal-body-container" @keydown.esc="closeModal()" tabindex="0">
      <div class="modal-header">

        <span class="close" @click="closeModal">&times;</span>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang='ts'>
const emit = defineEmits<{(e: 'close', component: string): void }>()

const closeModal = () => {
  emit("close", "")
}

</script>

<style scoped lang="scss">
.modal-container {
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.8);
    height: 100vh;
    justify-content: center;
    position: fixed;
    width: 100%;
    z-index: 11;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;

    .modal-header {
        display: flex;
        justify-content: end;
    }

    .modal-body-container {
        padding: 2rem;
        border-radius: 2rem;
        width: 50%;
        background: rgb(117, 161, 161);
        max-width: 95%;
        max-height: 97vh;
        overflow: auto;
    }
}
.close {
  font-size: 45px;
  font-weight: 600;
  display: inline-block;
  cursor: pointer;
}

</style>
