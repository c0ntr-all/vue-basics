<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>
    </div>

    <app-block>
      <p>Это самый важный текст для нового блока</p>
      <!-- # - сокращенное выражение slot-->
      <template #header>
        <h3>Это заголовок!</h3>
      </template>

      <template v-slot:footer>
        <hr>
        <small>Это footer</small>
      </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from './AppBlock'
export default {
  components: {AppBlock}
}
</script>

<style scoped>
</style>
