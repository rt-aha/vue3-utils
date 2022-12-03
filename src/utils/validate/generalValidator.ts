import { validate } from '@/utils/validate/validator';
import type { IValidatorParams, TValidateRuleShortcutFn } from '@/utils/validate/interface';

export const checkRequired: TValidateRuleShortcutFn = (trigger = ['input']) => {
  return {
    trigger,
    validator: ({ value, label }: IValidatorParams) => {
      return validate(value, {
        label,
        ruleList: [
          {
            name: 'vldRequired',
            cusError: 'vldRequiredWithLabel',
          },
        ],
      });
    },
  };
};

export const checkRadio: TValidateRuleShortcutFn = (trigger = ['change']) => {
  return {
    trigger,
    validator: ({ value, label }: IValidatorParams) => {
      return validate(value, {
        label,
        ruleList: [
          {
            name: 'vldRadio',
            cusError: 'vldSelectWithLabel',
          },
        ],
      });
    },
  };
};

export const checkEmail: TValidateRuleShortcutFn = (trigger = ['input']) => {
  return {
    trigger,
    validator: ({ value, label }: IValidatorParams) => {
      return validate(value, {
        label,
        ruleList: [
          {
            name: 'vldEmail',
          },
        ],
      });
    },
  };
};

export const checkMobile: TValidateRuleShortcutFn = (trigger = ['input']) => {
  return {
    trigger,
    validator: ({ value, label }: IValidatorParams) => {
      return validate(value, {
        label,
        ruleList: [
          {
            name: 'vldMobile',
          },
        ],
      });
    },
  };
};

export const checkPassword: TValidateRuleShortcutFn = (trigger = ['input']) => {
  return {
    trigger,
    validator: ({ value, label }: IValidatorParams) => {
      return validate(value, {
        label,
        ruleList: [
          {
            name: 'vldPassword',
          },
        ],
      });
    },
  };
};

export const checkConfirmPassword: TValidateRuleShortcutFn = (trigger = ['change'], relatedValue: Function) => {
  return {
    trigger,
    validator: ({ value, label }: IValidatorParams) => {
      return validate(value, {
        label,
        ruleList: [
          {
            name: 'vldPassword',
          },
          {
            name: 'vldConfirmPassword',
          },
        ],
        options: {
          relatedValue,
        },
      });
    },
  };
};
