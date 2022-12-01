import type { RouteRecordRaw } from 'vue-router';
import addMeta from '@/router/addMeta';

const children: RouteRecordRaw[] = [
  {
    path: 't',
    name: 't',
    component: () => import(/* webpackChunkName: "Test" */ '@/views/test/Test.vue'),
    meta: {
      title: 'Test',
    },
  },
];

const routes: RouteRecordRaw = {
  path: '/test',
  name: 'test',
  component: () => import(/* webpackChunkName: "Baselayout" */ '@/layout/Lo.vue'),
  children: addMeta(children, 'category', 'test'),
};

export default routes;
export { children };
