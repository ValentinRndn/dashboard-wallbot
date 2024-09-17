import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Analysis from './views/Analysis.vue';
import Preview from './views/Preview.vue';
import Ticket from './views/Ticket.vue';
import Role from './views/Role.vue';
import Moderation from './views/Moderation.vue';
import Logs from './views/Logs.vue';
import Experience from './views/Experience.vue';
import Disconnect from './views/Disconnect.vue';

// Définir vos routes
const routes = [
  {
    path: '/',
    component: Analysis // Définissez le composant par défaut à afficher pour la route '/'
  },
  {
    path: '/analysis',
    component: Analysis,
  },
  {
    path: '/preview',
    component: Preview,
  },
  {
    path: '/ticket',
    component: Ticket,
  },
  {
    path: '/role',
    component: Role,
  },
  {
    path: '/moderation',
    component: Moderation,
  },
  {
    path: '/logs',
    component: Logs,
  },
  {
    path: '/experience',
    component: Experience,
  },
  {
    path: '/disconnect',
    component: Disconnect,
  },
];

// Créer l'instance du routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
