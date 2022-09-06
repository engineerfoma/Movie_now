import { createApp } from 'vue'
import App from './App'
import router from './router/router'
import './vendor/fonts/fonts.css'

const app = createApp(App)
app
    .use(router)
    .mount('#app')
