<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="open">
      {{ isNewsOpen ? 'Закрыть' : 'Открыть'}}
    </button>
    <div v-if="isNewsOpen">
      <hr>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, tempora.</p>
      <button v-if="!wasRead" class="btn primary" @click="mark">Прочесть новость</button>
      <button class="btn danger" v-if="wasRead" @click="$emit('unmark', id)">
        Отметить непрочитанной
      </button>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['title'],
  props: {
    wasRead: Boolean,
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number, //Proxy, Array, Promise etc...
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        return value === true || value === false
      }
    }
  },
  // emits: ['open-news'], //Список эмитов для понимания. Особой роли этот элемент не играет
  emits: {
    //Валидация эмитов
    // 'open-news'(num) {
    //   if(num) {
    //     return true
    //   }
    //   console.warn('no data in open-news emit')
    //   return false
    // },
    'open-news': null, //Нет валидации
    'read-news'(id) {
      if(id) {
        return true
      }
      console.warn('нет параметра id для emit read-news')
      return false
    },
    unmark: null
  },
  data() {
    return {
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen //Это плохая практика т.к. данные должны передаваться в одностороннем порядке
      if(this.isNewsOpen) {
        this.$emit('open-news', 42)
      }
    },
    mark() {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    },
    // unmark() {
    //   this.$emit('unmark', this.id)
    // }
  }
}
</script>