import { createRouter, createWebHashHistory } from 'vue-router';
import toDos from '../toDos.vue';

const routes = [
  {
    path: '/',
    name: 'toDos',
    component: toDos,

  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
