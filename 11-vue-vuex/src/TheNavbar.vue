<template>
  <header class="navbar">
    <strong>Счетчик {{ counter }}</strong>

    <button class="btn" @click="add">Добавить 5</button>
  </header>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"

export default {
    computed: {
      // counter() {
      //   return this.$store.getters.counter
      // },
      //Такой подход заменяет конструкцию выше. Мы сразу забираем из vuex все, что касается counter
      ...mapGetters(['counter'])
    },
    methods: {
      //Поскольку мутации - это методы, то мы можем через map вывести все мутации как методы здесь
      //Отсюда доступен метода add из мутаций в кнтексте this
      ...mapMutations({
        addFive: 'add'
      }),
      add() {
        this.addFive({value: 5})
      // this.add({value: 5})
      //   this.$store.commit('add', {
      //     value: 5
      //   })
      //   this.$store.commit({
      //     type: 'add',
      //     value: 5
      //   })
      }
    }
  }
</script>
