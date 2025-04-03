import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/computedEx',
      name: 'computedEx',
      children: [
        {
          path: '/computedEx/computedEx1',
          name: 'computedEx1',
          component: () => import('../views/computedEx/ComputedEx1.vue'),
        },
        {
          path: '/computedEx/computedEx2',
          name: 'computedEx2',
          component: () => import('../views/computedEx/ComputedEx2.vue'),
        },
        {
          path: '/computedEx/computedEx3',
          name: 'computedEx3',
          component: () => import('../views/computedEx/ComputedEx3.vue'),
        },
        {
          path: '/computedEx/computedEx4',
          name: 'computedEx4',
          component: () => import('../views/computedEx/ComputedEx4.vue'),
        },
        {
          path: '/computedEx/computedEx5',
          name: 'computedEx5',
          component: () => import('../views/computedEx/ComputedEx5.vue'),
        },
      ],
    },
  ],
});

export default router;
