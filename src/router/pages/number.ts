import { addChildrenMeta } from '@/router/addMeta';
import type { RouteRecordRawWithMeta } from '@/interface/router';

const children: RouteRecordRawWithMeta[] = [
  {
    path: 'add-commas',
    name: 'add-commas',
    component: () => import(/* webpackChunkName: "AddCommas" */ '@/views/number/AddCommas.vue'),
    meta: {
      title: '數字加千分為逗號',
      showInMenu: true,
    },
  },
  {
    path: 'numberEllipsis',
    name: 'numberEllipsis',
    component: () => import(/* webpackChunkName: "NumberEllipsis" */ '@/views/number/NumberEllipsis.vue'),
    meta: {
      title: '數字省略',
      showInMenu: true,
    },
  },
];

const routes: RouteRecordRawWithMeta = {
  path: '/number',
  name: 'number',
  component: () => import(/* webpackChunkName: "Lo" */ '@/layout/Lo.vue'),
  children: addChildrenMeta(children, { category: 'number' }),
  meta: {
    title: '數字',
    showInMenu: true,
  },
};

export default routes;
export { children };
