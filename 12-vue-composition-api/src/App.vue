<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <hr>
      <p>Название: <strong>{{ framework.name }}</strong></p>
      <p>Версия: <strong>{{ framework.version }}</strong></p>

      <button class="btn" @click="change">Изменить</button>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  //Setup объединяет в себе data(), methods, watch
  setup() {
    // const name = ref('VueJS')
    // const version = ref(3)

    //Если в ref Работаем с объектом, то в последующих операциях используем его целиком дабы сохранить реактивность
    const framework = ref({
      name: 'VueJS',
      version: 3
    })

    function changeInfo() {
      //Создаваемые переменные в setup -это объекты, значения которых хранятся в свойстве value, но в интерполяции
      //Composition API автоматически подставит value, поэтому можно его не указывать
      // name.value = 'Vue JS !'
      // version.value = 42
      framework.value.name = 'Vue JS !'
      framework.value.version = 42
    }

    //В setup всегда возвращается объект
    return {
      name: framework.value.name,
      version: framework.value.version,
      framework: framework,
      change: changeInfo
    }
  },
  // data() {
  //   return {
  //     name: 'VueJS',
  //     version: 3
  //   }
  // },
  // methods: {
  //   changeInfo() {
  //     this.name = 'Vue JS!'
  //     this.version = 4
  //   }
  // }
}
</script>