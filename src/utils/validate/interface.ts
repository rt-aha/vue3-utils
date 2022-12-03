import type { TAllErrorMessage } from '@/utils/validate/errorMessage';
import type { TAllRulesKeys } from '@/utils/validate/rules';

export type IerrorMessage = (d: IRuleData) => string;
export type TerrorMessageAndCusErrorMessage = TAllErrorMessage | TAllRulesKeys;

export interface IValidateRuleListItem {
  name: TAllRulesKeys
  cusError?: TerrorMessageAndCusErrorMessage
}

export interface IRuleInfo {
  label: string
  ruleList: IValidateRuleListItem[]
  options?: { [key: string]: any }
}

export interface IValidateResult {
  isPass: boolean
  rule?: TAllRulesKeys | ''
  errorMessage?: string
}

export interface IRuleData {
  name: TAllRulesKeys // rule 名
  args: any
  label: string
  options: {
    args: any
    [key: string]: any
  }
  cusError?: TerrorMessageAndCusErrorMessage
}

export type ruleType = (value: any, args: any, options: any) => boolean;
export type asyncRuleType = (value: any, args: any, options: any) => Promise<boolean>;
export type vldFuncType = (value: any, ruleData: IRuleData) => Promise<any>;
export type valiateType = (value: any, info: IRuleInfo) => Promise<IValidateResult>;

export interface IValidator {
  vldList: Function[]
  vld: vldFuncType
  handleErrorMessage: (ruleData: IRuleData) => IValidateResult
  getErrorMessage: (name: TerrorMessageAndCusErrorMessage, ruleData: IRuleData) => string
  start: () => Promise<IValidateResult>
  add: (value: any, ruleInfo: IRuleInfo) => void
  cleanRuleList: () => void
}

export interface IValidatorParams {
  value: any
  label: string
}

export type TParamTrigger = Array<'input' | 'change'>;
export type TValidateRuleShortcutFn = (trigger: TParamTrigger, ...args: never[]) => {
  trigger: TParamTrigger
  validator: (args: IValidatorParams) => Promise<IValidateResult>
};
