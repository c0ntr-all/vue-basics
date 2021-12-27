<template>
  <div class="container">
    <div class="card">
      <h2>Разговор про директивы</h2>

      <div class="form-control">
        <label for="inp">Активный по умолчанию</label>
        <input v-focus type="text" id="inp">
      </div>
    </div>
  </div>
</template>

<script>
import focusDirective from './focusDirective'

export default {
  //Директивы также можно записать в компоненте, а можно вывести в файл
  // directives: {
  //   focus: {
  //     mounted(el) {
  //       el.focus()
  //     }
  //   }
  // }
  directives: {
    focus: focusDirective
  }
}
</script>

