export const statusCode = {
  401: '帳號或密碼不正確',
  403: '此Email已註冊過',
  500: 'Oops!出錯了!',
};

export const mapping = <T, U>(key: string,
  mappingList: Record<string, T>,
  defaultError?: U): T | U | undefined => {
  if (!mappingList[key]) {
    if (defaultError) {
      return defaultError;
    }

    return undefined;
  }

  return mappingList[key];
};

export enum responseStatus {
  error = 0,
  success = 1,
}

type responseStatusType = keyof typeof responseStatus;

export const mappingConst = (key: responseStatusType): number => {
  return responseStatus[key];
};

interface IPerson {
  name: string
  age: number
}

const person: IPerson = {
  name: '',
  age: 0,
};

export const setPersonValue = <T extends keyof IPerson>(key: T, val: IPerson[T]): void => {
  person[key] = val;
};
