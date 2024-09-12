import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Analysis.vue'
import Preview from './views/Preview.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/analysis',
            component: Home
        },
        {
            path: '/preview',
            component: Preview
        }
    ]
})

createApp(App).use(router).mount('#app')
