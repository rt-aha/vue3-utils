import type { Ioption } from '@/testData/global';

interface PlainObject { [k: string]: any }

export const listToMapping = (arr: PlainObject[], key: string) => {
  return arr.reduce((obj, item) => {
    const keyName = item[key] as string;
    obj[keyName] = item;

    return obj;
  }, {} as Record<string, PlainObject>);
};

export const optionsToMapping = (arr: Ioption[]) => {
  return arr.reduce((obj, item) => {
    obj[item.value] = item.label;

    return obj;
  }, {} as Record<string, string>);
};
