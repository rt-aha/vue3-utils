interface IAddMeta {
  children: any[],
  key: string,
  data: string
}

const addMeta: (children: any[], key: string, data: string) => any = (children, key, data) => {
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
