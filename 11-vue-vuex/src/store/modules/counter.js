export default {
  state() {
    return {
      counter: 1
    }
  },
  //Мутации должны быть полностью синхронны
  mutations: {
    //state - это стэйт из кода выше
    increment(state) {
      state.counter++
    },
    //payload - данные, которые можно передать из компонента
    add(state, payload) {
      state.counter += payload.value
    }
  },
  actions: {
    //context содержит весь набор методов: commit, dispatch, getters и т.д. Здесь можно получить доступ ко всей информации
    //в store
    incrementAsync({ commit }, payload) {
      setTimeout(() => {
        commit('add', payload)
      }, payload.delay)
    }
  },
  //Через геттеры можно манипулировать отображением данных не трогая стэйт, например добавить восклицательный знак
  getters: {
    counter(state) {
      // if(state.counter > 50) {
      //   return state.counter + '!'
      // }
      return state.counter
    },
    //Первым прааметром принимается state, вторым getters. Если state не используется то можно ставить _.
    doubleCounter(_, getters) {
      return getters.counter * 2
    }
  }
}