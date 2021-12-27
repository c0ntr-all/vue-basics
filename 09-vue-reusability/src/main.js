import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'

createApp(App)
  // В дальнейшем эта директива будет доступна как v-focus
  // Как и миксины, лучше делать локально
  // .directive('focus', {
  //   mounted(el) {
  //     el.focus()
  //   }
  // })
  .mount('#app')
