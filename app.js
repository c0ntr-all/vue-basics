const App = {
  data() {
    return {
      placeholderString: 'Введите название заметки',
      title: 'Список заметок',
      inputValue: '',
      notes: ['Заметка 1', 'Заметка 2']
    }
  },
  methods: {
    addNewNote() {
      if(this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    toUpperCase(item) {
      return item.toUpperCase()
    },
    removeNote(idx, event) {
      this.notes.splice(idx, 1)
    }
  },
  computed: {
    /*Этот метод будет вызван в том случае, если будет изменена переменная this.notes*/
    doubleCountComputed() {
      console.log('doubleCountComputed')
      return this.notes.length * 2
    }
  },
  /*Отслеживание изменений переменных*/
  watch: {
    /*Название метода должно совпадать с названием отслеживаемой переменной*/
    inputValue(value) {
      if(value.length > 10) {
        this.inputValue = ''
      }
    }
  }
}

Vue.createApp(App).mount('#app')