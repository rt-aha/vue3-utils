import type { RouteRecordRaw } from 'vue-router';

interface routeMeta {
  meta: {
    title: string
    showInMenu: boolean
  }
}

export type RouteRecordRawWithMeta = RouteRecordRaw & routeMeta;

const r: RouteRecordRawWithMeta = {
  path: '',
  meta: {
    title: '',
    showInMenu: '',
  },
};
