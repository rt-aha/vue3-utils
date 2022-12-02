// 先封裝起來，若有其他操作需求，可直接新增
type basicType = string | number | boolean | { [key: string]: any };
type itemValueType = basicType | basicType[];

interface IStorage {
  prefix: string
  setItem: (key: string, val: itemValueType, options?: { callback?: Function }) => void
  getItem: (key: string) => void
  removeItem: (key: string, options?: { callback?: Function }) => void
  removeListOfItem: (keyList: string[]) => void
  removeExcludeListOfItem: (keyList: string[]) => void
  clear: (options?: { callback?: Function }) => void
}

const cusLocalStorage: IStorage = {
  prefix: 'cus_',
  setItem(key, val, options = {}) {
    const jsonVal = JSON.stringify(val);
    localStorage.setItem(`${this.prefix}${key}`, jsonVal);

    if (options.callback) {
      options.callback();
    }
  },
  getItem(key) {
    const parseVal = localStorage.getItem(`${this.prefix}${key}`) || '';
    return parseVal !== '' ? JSON.parse(parseVal) : null;
  },
  removeItem(key, options = {}) {
    localStorage.removeItem(`${this.prefix}${key}`);

    if (options.callback) {
      options.callback();
    }
  },
  removeListOfItem(keyList) {
    keyList.forEach((key) => {
      this.removeItem(key);
    });
  },
  removeExcludeListOfItem(keyList) {
    const localStorageKeys = Object.keys(localStorage);
    const keyListWithPrefix = keyList.map(key => `${this.prefix}${key}`);
    const removeKeys = localStorageKeys.filter((item) => {
      return !keyListWithPrefix.includes(item);
    });

    removeKeys.map(key => key.replace(this.prefix, '')).forEach((key) => {
      this.removeItem(key);
    });
  },
  clear(options = {}) {
    localStorage.clear();

    if (options.callback) {
      options.callback();
    }
  },
};

const cusSessionStorage: IStorage = {
  prefix: 'cus_',
  setItem(key, val, options = {}) {
    const jsonVal = JSON.stringify(val);
    sessionStorage.setItem(`${this.prefix}${key}`, jsonVal);

    if (options.callback) {
      options.callback();
    }
  },
  getItem(key) {
    const parseVal = sessionStorage.getItem(`${this.prefix}${key}`) || '';
    return parseVal !== '' ? JSON.parse(parseVal) : null;
  },
  removeItem(key, options = {}) {
    sessionStorage.removeItem(`${this.prefix}${key}`);

    if (options.callback) {
      options.callback();
    }
  },
  removeListOfItem(keyList) {
    keyList.forEach((key) => {
      this.removeItem(key);
    });
  },
  removeExcludeListOfItem(keyList) {
    const sessionStorageKeys = Object.keys(sessionStorage);
    const keyListWithPrefix = keyList.map(key => `${this.prefix}${key}`);
    const removeKeys = sessionStorageKeys.filter((item) => {
      return !keyListWithPrefix.includes(item);
    });

    removeKeys.map(key => key.replace(this.prefix, '')).forEach((key) => {
      this.removeItem(key);
    });
  },
  clear(options = {}) {
    sessionStorage.clear();

    if (options.callback) {
      options.callback();
    }
  },
};

const cusStorage: Omit<IStorage, 'getItem'> = {
  prefix: 'cus_',
  setItem(key: string, val: itemValueType, options = {}) {
    cusSessionStorage.setItem(key, val);
    cusLocalStorage.setItem(key, val);

    if (options.callback) {
      options.callback();
    }
  },
  removeItem(key: string, options = {}) {
    cusSessionStorage.removeItem(key);
    cusLocalStorage.removeItem(key);

    if (options.callback) {
      options.callback();
    }
  },
  removeListOfItem(keyList) {
    cusSessionStorage.removeListOfItem(keyList);
    cusLocalStorage.removeListOfItem(keyList);
  },
  removeExcludeListOfItem(keyList) {
    cusSessionStorage.removeExcludeListOfItem(keyList);
    cusLocalStorage.removeExcludeListOfItem(keyList);
  },
  clear(options = {}) {
    cusSessionStorage.clear();
    cusLocalStorage.clear();

    if (options.callback) {
      options.callback();
    }
  },
};

export {
  cusLocalStorage, // 針對 localStorage 操作
  cusSessionStorage, // 針對 sessionStorage 操作
  cusStorage, // 同時對 localStorage 和 sessionStorage 操作
};
