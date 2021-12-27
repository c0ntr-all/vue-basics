import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'

/*Такой вариант использования миксина нежелателен т.к. это создаст проблемы для масштабирования проекта*/
//import alertMixin from './alertMixin'

createApp(App)
  //.mixin(alertMixin)
  .mount('#app')
