import allRules from '@/utils/validate/rules';
import errorMessage from '@/utils/validate/errorMessage';
import type {
  IValidator,
  valiateType,
} from '@/utils/validate/interface';

const validator: IValidator = {
  vldList: [],

  async vld(value, ruleData) {
    const { name, args, options } = ruleData;
    const isPass = await allRules[name](value, args, options);

    if (!isPass) {
      return this.handleErrorMessage(ruleData);
    }
  },

  // 回傳錯誤訊息
  handleErrorMessage(ruleData) {
    const { name, cusError } = ruleData;
    const errName = cusError || name;
    const errorMessage = this.getErrorMessage(errName, ruleData);

    return {
      rule: name,
      errorMessage,
      isPass: false,
    };
  },

  // 取得錯誤訊息
  getErrorMessage(name, ruleData) {
    return errorMessage[name](ruleData);
  },

  // 開始驗證
  async start() {
    for (const fn of this.vldList) {
      const msg = await fn();

      if (msg) {
        return msg;
      }
    }

    this.cleanRuleList();
    return {
      isPass: true,
    };
  },

  // 將驗證規則加入陣列
  add(value, ruleInfo) {
    const { label, ruleList, options } = ruleInfo;

    this.vldList = ruleList.map((r) => {
      const data = {
        ...r,
        label,
        options,
      };
      return this.vld.bind(this, value, data);
    });
  },

  cleanRuleList() {
    this.vldList = [];
  },
};

// , ruleError = {}, options,

const validate: valiateType = (value = '', { label, ruleList = [], options }) => {
  validator.add(value, {
    ruleList,
    label,
    options,
  });

  return new Promise((resolve) => {
    try {
      const result = validator.start();
      resolve(result);
    }
    catch (e: any) {
      resolve({
        isPass: false,
        rule: '',
        errorMessage: e,
      });
    }
  });
};

export default validator;
export { validate };
