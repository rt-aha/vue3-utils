import type { RouteRecordRaw } from 'vue-router';
import { addChildrenMeta } from '@/router/addMeta';

const children: RouteRecordRaw[] = [
  {
    path: 't',
    name: 't',
    component: () => import(/* webpackChunkName: "Test" */ '@/views/test/Test.vue'),
    meta: {
      title: 'Test',
      showInMenu: true,
    },
  },
];

const routes: RouteRecordRaw = {
  path: '/test',
  name: 'test',
  component: () => import(/* webpackChunkName: "Baselayout" */ '@/layout/Lo.vue'),
  children: addChildrenMeta(children, { category: 'test' }),
  meta: {
    title: '測試',
    showInMenu: true,
  },
};

export default routes;
export { children };
