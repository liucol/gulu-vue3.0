import { createApp } from 'vue'
import App from './App.vue'

import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'

import Pearl from './components/pearl.vue'
import Pearl2 from './components/pearl2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Pearl},
        {path: '/xxx', component: Pearl2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
