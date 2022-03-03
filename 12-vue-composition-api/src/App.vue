<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <hr>
      <p>Название: <strong>{{ name }}</strong></p>
      <p>Версия: <strong>{{ version }} ({{ doubleVersion }}</strong></p>

      <button class="btn" @click="change">Изменить</button>
    </div>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  isRef,
  isReactive,
  computed,
  watch
} from 'vue'

export default {
  //Setup объединяет в себе data(), methods, watch
  setup() {
    const name = ref('VueJS')
    const version = ref(3)

    console.log(isRef(name)) //true
    console.log(isRef(version.value)) //false

    //Если в ref Работаем с объектом, то в последующих операциях используем его целиком дабы сохранить реактивность
    const framework = reactive({
      name: 'VueJS',
      version: 3
    })

    const doubleVersion = computed(() => version.value * 2)

    // console.log(isRef(doubleVersion))

    // console.log(isReactive(framework))
    // console.log(isReactive(framework.name))

    watch([doubleVersion, name], (newValues, oldValues) => {
      console.log('new version', newValues[0])
      console.log('new name', newValues[1])
      console.log('old version', oldValues[0])
      console.log('old name', oldValues[1])
    })

    function changeInfo() {
      //Для reactive value не нужен
      name.value = 'Vue JS !',
      version.value = 42
    }

    //В setup всегда возвращается объект
    return {
      name: name,
      version: version,
      change: changeInfo,
      doubleVersion
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
  // computed: {
  //   doubleVersion() {
  //     return this.version * 2
  //   }
  // }
  // watch: {
  //   doubleVersion(newValue) {
  //
  //   }
  // }
}
</script>