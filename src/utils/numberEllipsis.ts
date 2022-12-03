import addCommas from '@/utils/addCommas';

const numberEllipsis = (val: number, limit = 99, comma = true): string => {
  if (val === 0) {
    return '0';
  }

  const plusSign = val > limit ? '+' : '';
  const numVal = val > limit ? limit : val;

  if (comma) {
    const valStr = addCommas(numVal) + plusSign;
    return valStr;
  }

  return String(numVal) + plusSign;
};

export default numberEllipsis;
