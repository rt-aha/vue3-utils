import { addChildrenMeta } from '@/router/addMeta';
import type { RouteRecordRawWithMeta } from '@/interface/router';

const children: RouteRecordRawWithMeta[] = [
  {
    path: 'cus-storage',
    name: 'cus-storage',
    component: () => import(/* webpackChunkName: "CusStoarge" */ '@/views/encapsulation/CusStorage.vue'),
    meta: {
      title: '封裝 LocalStoarge',
      showInMenu: true,
    },
  },
];

const routes: RouteRecordRawWithMeta = {
  path: '/encapsulation',
  name: 'encapsulation',
  component: () => import(/* webpackChunkName: "Baselayout" */ '@/layout/Lo.vue'),
  children: addChildrenMeta(children, { category: 'encapsulation' }),
  meta: {
    title: '再封裝',
    showInMenu: true,
  },
};

export default routes;
export { children };
