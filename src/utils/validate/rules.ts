import regExps from '@/utils/validate/regExps';
import type { TRulesKey, asyncRuleType, ruleType } from '@/utils/validate/interface';

export const vldRequired: ruleType = (value) => {
  if (value) {
    return true;
  }

  return false;
};

export const vldRadio: ruleType = (value) => {
  if (value) {
    return true;
  }

  return false;
};

export const vldCheckbox: ruleType = (value) => {
  if (Array.isArray(value)) {
    if (value.length > 0) {
      return true;
    }
  }

  return false;
};

export const vldLengthMoreThen: ruleType = (value, args) => {
  if (value.length >= args.min) {
    return true;
  }

  return false;
};

export const vldEnglish: ruleType = (value) => {
  if (regExps.english.test(value)) {
    return true;
  }

  return false;
};

export const vldAsyncFn: asyncRuleType = async () => {
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     console.log('222');
  //     resolve(true);
  //     resolve(false);
  //   }, 1000);
  // });

  return await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
    return response.status === 200;
    // return response.status === 200 ? false : true;
  });
};

export const vldPassword: ruleType = (value) => {
  if (value) {
    const condtion1 = regExps.alphebatOrNumeric.test(value);
    const condtion2 = value.length >= 8;

    return condtion1 && condtion2;
  }

  return false;
};

export const vldConfirmPassword: ruleType = (value, args, options) => {
  const { password } = options.relatedValue();

  if (value === password) {
    return true;
  }

  return false;
};

export const vldMobile: ruleType = (value) => {
  if (value) {
    return regExps.mobile.test(value);
  }

  return false;
};

export const vldEmail: ruleType = (value) => {
  if (value) {
    return regExps.email.test(value);
  }

  return false;
};

const allRules = {
  vldRequired,
  vldRadio,
  vldCheckbox,
  vldLengthMoreThen,
  vldEnglish,
  vldAsyncFn,
  vldPassword,
  vldConfirmPassword,
  vldMobile,
  vldEmail,
};

export type TAllRulesKeys = keyof typeof allRules;

export default allRules;
