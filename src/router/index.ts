import { createRouter, createWebHistory } from 'vue-router';
import common from '@/router/pages/common';


// console.log('routes..', pages);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
    },
    ...common,
  ],
});

router.beforeEach((to, from, next) => {
  const scrollEle = document.querySelector('#app');
  if (scrollEle) {
    scrollEle.scrollTo({
      top: 0,
      left: 0,
    });
  }

  next();
});

export default router;
