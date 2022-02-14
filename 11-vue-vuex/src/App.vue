<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{ counter }} ({{ doubleCounter }})</h2>
      <button class="btn primary" @click="add">Добавить</button>
      <button class="btn dagner" @click="incrementAsync({value: 10,delay: 200})">Добавить 10</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from "vuex"
import TheNavbar from './TheNavbar'
export default {
  // data() {
  //   return {
  //     counter: 0
  //   }
  // },
  //computed возвращает объект, mapGetters тоже поэтому можно без spread-оператора
  //Если появятся другие computed свойства то можно будет написать {...mapGetters()}
  computed: mapGetters(['counter', 'doubleCounter']),
  methods: {
    ...mapMutations({
      'add': 'increment'
    }),
    ...mapActions(['incrementAsync']),
  },
  components: {TheNavbar}
}
</script>
