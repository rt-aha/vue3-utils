import type { RouteRecordRaw } from 'vue-router';

const addMeta = (children: RouteRecordRaw[], key: string, data: string): RouteRecordRaw[] => {
  return children.map((item) => {
    const meta = item.meta || {};

    return {
      ...item,
      meta: {
        ...meta,
        [key]: data,
      },
    };
  });
};

export default addMeta;
