<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3>Это заголовок модалки</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita obcaecati tempore. Accusantium aliquid beatae deleniti, enim iusto perferendis sit.</p>
  </div>
</template>

<script>
export default {
  emits: ['close']
}
</script>

<style scoped>

</style>