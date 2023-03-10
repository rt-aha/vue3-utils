import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRawWithMeta } from '@/interface/router';

const modules = import.meta.glob('./pages/*.ts', { eager: true });
const allRoutes = [];
for (const path in modules) {
  allRoutes.push(modules[path].default);
}

// console.log(`output->allRoutes`,allRoutes)

const routes: RouteRecordRawWithMeta[] = [
  {
    path: '',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
    meta: {
      title: '首頁',
      showInMenu: false,
    },
  },
  ...allRoutes,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
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

// console.log('all router', router.getRoutes());

export default router;
export { routes };
