// TODO: 待整理

const regExps = {
  name: /^[\u4E00-\u9FA5A-Za-z0-9~!@#$%^&*()_+{}|:"<>?[\]\\;',./\s]+$/,
  noSigns: /^[\u4E00-\u9FA5|\w|\d|a-zA-Z|\-|_]+$/,
  number: /^([0-9]){0,20}$/,
  integer: /^[0-9]\d*$/,
  normalSign: /^[~!@#$%^&*()_+{}|:"<>?[\]\\;',./\s]*$/,
  mamdarin: /^[\u4E00-\u9FA5]*$/, // 符合中文
  alphebat: /^[a-zA-Z]*$/,
  numeric: /^[-]?[0-9]+(.)?[0-9]*$/,
  numericAndDot: /^[0-9.]*$/,
  alphebatOrNumeric: /^[a-zA-Z0-9]*$/,
  integerAlphebatNormalSign: /^[0-9a-zA-Z~!@#$%^&*()_+{}|:"<>?[\]\\;',./\s]*$/,
  mamdarinIntegerAlphebatNormalSign: /^[\u4E00-\u9FA50-9a-zA-Z~!@#$%^&*()_+{}|:"<>?[\]\\;',./\s]*$/,
  email: /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,

  url: /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/g,
  pwd: /^[A-Za-z0-9\s\-~!@#$%^&*()_+{}|:"<>?[\]\\;',./]+$/,
  ip: /^([0,1]?\d{1,2}|2([0-4][0-9]|5[0-5]))(\.([0,1]?\d{1,2}|2([0-4][0-9]|5[0-5]))){3}$/,
  YMD: /\d{4}-\d{2}-\d{2}/, // 日期格式必須是 'YYYY-MM-DD'
  mobile: /^09\d{8}$/,
  english: /[a-zA-Z]/g,
  passwordLength: /.{6,16}/, // 密碼長度，長度需要時在自訂
  passwordMix: /^(?=.*\d)(?=.*[a-z])/, // 密碼可用字元(數字與大小寫字母)
  passwordLetter: /[A-Z]/, // 至少一個大寫字母
  passwordContent: /^(?=.{6,16})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/, // 密碼組合(必須有數字與大小寫字母)
  isEnglishNorNumber: /[^A-Za-z0-9]/, // 不是英文也不是數字
  normalSignAndAlpabat: /^[\u4E00-\u9FA5\w~!@#$%^&*()_+{}|:"<>?[\]\\;',. /]+$/,
};

export default regExps;
