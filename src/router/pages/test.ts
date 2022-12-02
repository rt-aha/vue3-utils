import { addChildrenMeta } from '@/router/addMeta';
import type { RouteRecordRawWithMeta } from '@/interface/router';

const children: RouteRecordRawWithMeta[] = [
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

const routes: RouteRecordRawWithMeta = {
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
