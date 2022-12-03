// $&: inserts the matched substring
// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

const addCommas = (val: number) => {
  const regexp = /\d(?=(\d{3})+$)/g;
  const valueStr = String(val);

  if (valueStr.includes('.')) {
    const [integer, decimal] = valueStr.split('.');
    return `${integer.replace(regexp, '$&,')}.${decimal}`;
  }

  return valueStr.replace(regexp, '$&,');
};

export default addCommas;
