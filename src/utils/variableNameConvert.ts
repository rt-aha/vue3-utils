import { isArray, isPlainObject } from 'lodash-es';

// 首字母大寫
export const firstLetterUpperCase = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1);
};

// 首字母小寫
// export const fistLetterLowerCase = (str: string): string => {
//   return str[0].toLowerCase() + str.slice(1);
// };

// kebab-case to camelCase
export const kebabCaseToCamelCase = (str: string) => {
  // 驗證格式對不對
  const regExp = /[^A-Za-z-]/;
  const isValidate = regExp.test(str);
  if (isValidate) {
    throw new Error('格式錯誤');
  }

  return str.replace(/-\w/g, matchValue => matchValue.slice(1).toUpperCase());
};

export const camelToSnakeCase = (str: string): string => {
  return str.replace(/[A-Z]/g, (letter: string) => `_${letter.toLowerCase()}`);
};

const toSnakeCasePayload = (paylaod: { [key: string]: any }) => {
  const keys: string[] = Object.keys(paylaod);

  const snakeCasePayload = keys.reduce((obj, key: string) => {
    const snakeCaseKey: string = camelToSnakeCase(key);

    if (isPlainObject(paylaod[key])) {
      obj[snakeCaseKey] = toSnakeCasePayload(paylaod[key]);
    }
    else if (isArray(paylaod[key])) {
      obj[snakeCaseKey] = paylaod[key].map((item) => {
        if (isPlainObject(item)) {
          return toSnakeCasePayload(item);
        }

        return item;
      });
    }
    else {
      obj[snakeCaseKey] = paylaod[key];
    }

    return obj;
  }, {});

  return snakeCasePayload;
};

export default toSnakeCasePayload;
