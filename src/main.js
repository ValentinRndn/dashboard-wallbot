import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Analysis.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/analysis',
            component: Home
        }
    ]
})

createApp(App).use(router).mount('#app')
