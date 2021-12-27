<template>
  <div class="container">
    <div class="card">
      <h2 v-color="myColor">Разговор про директивы</h2>

      <div class="form-control">
        <label for="inp">Активный по умолчанию</label>
        <input v-focus type="text" id="inp">
      </div>

      <button class="btn" @click="myColor = 'darkblue'">Сделать синим</button>
    </div>
  </div>
</template>

<script>
import focusDirective from './focusDirective'
import colorDirective from './colorDirective'

export default {
  data() {
    return {
      myColor: 'darkred'
    }
  },
  directives: {
    focus: focusDirective,
    color: colorDirective
  }
}
</script>

