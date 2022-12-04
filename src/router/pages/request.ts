import { addChildrenMeta } from '@/router/addMeta';
import type { RouteRecordRawWithMeta } from '@/interface/router';

const children: RouteRecordRawWithMeta[] = [
  {
    path: 'restful',
    name: 'restful',
    component: () => import(/* webpackChunkName: "Restful" */ '@/views/request/Restful.vue'),
    meta: {
      title: 'Restful 請求',
      showInMenu: true,
    },
  },
];

const routes: RouteRecordRawWithMeta = {
  path: '/request',
  name: 'request',
  component: () => import(/* webpackChunkName: "Lo" */ '@/layout/Lo.vue'),
  children: addChildrenMeta(children, { category: 'request' }),
  meta: {
    title: '請求',
    showInMenu: true,
  },
};

export default routes;
export { children };
