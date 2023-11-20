import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import './assets/style.css'
import App from './App.vue'
import * as ConfirmDialog from 'vuejs-confirm-dialog'

const app = createApp(App)
app.use(Toast)
app.use(ConfirmDialog)
app.mount('#app')

