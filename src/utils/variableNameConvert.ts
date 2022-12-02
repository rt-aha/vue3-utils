import { isArray, isPlainObject } from 'lodash-es';

// 首字母大寫
export const firstLetterToUpperCase = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1);
};

export const firstLetterToLowerCase = (str: string): string => {
  return str[0].toLowerCase() + str.slice(1);
};

// kebab-case 轉為其他格式
// kebab-case to camelCase
export const kebabCaseToCamelCase = (str: string) => {
  // 驗證格式對不對
  // const regExp = /[^A-Za-z-]/;
  // const isValidate = regExp.test(str);
  // if (isValidate) {
  //   throw new Error('格式錯誤');
  // }

  return str.replace(/-\w/g, (matchValue) => {
    return matchValue.slice(1).toUpperCase();
  });
};

// kebab-case to PascalCase
export const kebabCaseToPascalCase = (str: string) => {
  const words = str.split('-');

  return words.reduce((str: string, w: string) => {
    str += firstLetterToUpperCase(w);
    return str;
  }, '');
};

// camelCase to SnakeCase
export const kebabCaseToSnakeCase = (str: string) => {
  return str.replace(/-/g, '_');
};

// snake_case 轉為其他格式
// snake_case to camelCase
export const SnakeCaseToCamelCase = (str: string) => {
  return str.replace(/_\w/g, (matchValue) => {
    return matchValue.slice(1).toUpperCase();
  });
};

// snake_case to PascalCase
export const SnakeCaseToPascalCase = (str: string) => {
  const words = str.split('_');

  return words.reduce((str: string, w: string) => {
    str += firstLetterToUpperCase(w);
    return str;
  }, '');
};

// snake_case to kebab-case
export const SnakeCaseToKebabCase = (str: string) => {
  return str.replace(/_/g, '-');
};

// camelCase 轉為其他格式
// camelCase to kebab-case
export const camelCaseToKebabCase = (str: string) => {
  return str.replace(/[A-Z]/g, (matchValue: string) => `-${matchValue.toLowerCase()}`);
};

// camelCase to snake_case
export const camelCaseToSnakeCase = (str: string) => {
  return str.replace(/[A-Z]/g, (matchValue: string) => `_${matchValue.toLowerCase()}`);
};

// camelCase to PascalCase
export const camelCaseToPascalCase = (str: string): string => {
  return firstLetterToUpperCase(str);
};

// PascalCase 轉為其他格式

export const pascalCaseToKebabCase = (str: string) => {
  const lowerLetter = firstLetterToLowerCase(str);
  return lowerLetter.replace(/[A-Z]/g, (matchValue: string) => `-${matchValue.toLowerCase()}`);
};

// PascalCase to snake_case
export const pascalCaseToSnakeCase = (str: string) => {
  const lowerLetter = firstLetterToLowerCase(str);
  return lowerLetter.replace(/[A-Z]/g, (matchValue: string) => `_${matchValue.toLowerCase()}`);
};

// PascalCase to CamelCase
export const pascalCaseToCamelCase = (str: string): string => {
  return firstLetterToLowerCase(str);
};

// export const camelCaseToSnakeCase = (str: string): string => {
//   return firstLetterToUpperCase(str);
// };

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
