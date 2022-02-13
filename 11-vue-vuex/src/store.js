import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      counter: 1
    }
  },
  mutations: {
    //state - это стэйт из кода выше
    increment(state) {
      state.counter++
    },
    add(state, payload) {
      state.counter += payload.value
    }
  }
})