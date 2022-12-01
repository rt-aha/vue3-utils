import { fruitOptions } from '@/testData/global';

const listToMapping = fruitOptions.reduce((obj, item) => {
  const key = item.value;
  obj[key] = item.label;

  return obj;
}, {} as Record<string, string>);

console.log('listToMapping', listToMapping);

interface Person {
  name: string
  age: number
}

type PersonName = Person['name'];
type PersonKeys = Person[keyof Person];

export { fruitOptions };
