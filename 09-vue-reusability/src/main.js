import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import traslatePlugin from './translatePlugin'

const app = createApp(App)

app.use(traslatePlugin)

app.mount('#app')
