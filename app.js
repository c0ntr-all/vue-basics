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
        inputChangehandler(event) {
            this.inputValue = event.target.value
        }
    }
}

Vue.createApp(App).mount('#app')