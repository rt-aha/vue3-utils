import type { IerrorMessage } from '@/utils/validate/interface';

// --- test start (自定義錯誤測試)
export const cusVldEnglish: IerrorMessage = () => '要打英文啊~';
export const vldAsyncFn: IerrorMessage = () => '非同步測試錯誤';
// --- test end

// --- custom start
export const vldRequiredWithLabel: IerrorMessage = d => `請輸入${d.label}`;
export const vldSelectWithLabel: IerrorMessage = d => `請選擇${d.label}`;
// --- custom end

export const vldRequired: IerrorMessage = () => '此為必填選項';
export const vldSelect: IerrorMessage = () => '請選擇';
export const vldCheck: IerrorMessage = () => '請勾選';
export const vldMutliRadio: IerrorMessage = () => '請選擇';
export const vldCheckMultiple: IerrorMessage = d => `請選擇至少${d.args.min}個`;
export const vldReportSelect: IerrorMessage = () => '請選擇';
export const vldSelectMultiple: IerrorMessage = () => '請選擇';
export const vldLengthMoreThen: IerrorMessage = d => `長度需大於${d.args.min}位數`;
export const vldEnglish: IerrorMessage = () => '請輸入英文';
export const vldPhone: IerrorMessage = () => '請留空或輸入電話號碼（數字）';
export const vldEmail: IerrorMessage = () => '請填寫正確格式的 Email';
export const vldMobile: IerrorMessage = () => '請填寫正確格式的手機';
export const vldAllEmail: IerrorMessage = () => '所有輸入框都必須符合 Email 格式';
export const vldOnlyOneAvatar: IerrorMessage = () => '請上傳一張照片';

export const vldNumberMoreThen: IerrorMessage = d => `請輸入大於${d.args.min}的數字`;
export const vldRadio: IerrorMessage = () => '請勾選';
export const vldCheckbox: IerrorMessage = d => `請選擇至少${d.args.min}個`;
export const vldBoughtCustomer: IerrorMessage = () => '請填寫以下內容';
export const vldNotBuyCustomer: IerrorMessage = () => '請填寫以下內容';
export const vldStayMins: IerrorMessage = () => '小時為0時，分不可為0';

export const vldReportCitySelect: IerrorMessage = () => '請選擇';
export const vldReportRegionSelect: IerrorMessage = () => '請選擇';
export const vldCheckboxWithOthers: IerrorMessage = () => '若勾選其他，請填寫內容';
export const vldRadioWithOthers: IerrorMessage = () => '若勾選其他，請填寫內容';
export const vldHasSelectCounties: IerrorMessage = () => '若選擇';
export const vldOneOfOptions: IerrorMessage = () => '請在媒體中至少選擇一個';
export const vldTextareaWordLimit: IerrorMessage = d => `內容輸入上限為${d.args.limit}字`;
export const vldConfirmPassword: IerrorMessage = () => '請輸入相同密碼';
export const vldPassword: IerrorMessage = () => '請輸入至少8位英文數字組合的密碼';

const allErrorMessage = {
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
  cusVldEnglish,
  vldRequiredWithLabel,
  vldSelectWithLabel,
  vldSelect,
  vldCheck,
  vldMutliRadio,
  vldCheckMultiple,
  vldReportSelect,
  vldSelectMultiple,
  vldPhone,
  vldAllEmail,
  vldOnlyOneAvatar,
  vldNumberMoreThen,
  vldBoughtCustomer,
  vldNotBuyCustomer,
  vldStayMins,
  vldReportCitySelect,
  vldReportRegionSelect,
  vldCheckboxWithOthers,
  vldRadioWithOthers,
  vldHasSelectCounties,
  vldOneOfOptions,
  vldTextareaWordLimit,

};

export type TAllErrorMessage = keyof typeof allErrorMessage;

export default allErrorMessage;
