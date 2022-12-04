const validate = (type, value) => {
  if (value === '') {
    throw new Error(`${type} can't be empty`);
  }

  console.log('type', type);
  console.log('value', value);
  const valueStr = String(value).toLowerCase();
  const allowedMethods = ['get', 'post', 'put', 'patch', 'delete'];

  switch (type) {
    case 'apiUrlDomain':
      if (typeof value !== 'string') {
        throw new TypeError(`expect ${type} should be given!`);
      }
      break;
    case 'method':

      if (!allowedMethods.includes(valueStr)) {
        throw new Error(`${type} must be one of get, post, put, patch, delete!`);
      }
      break;
    default:
      throw new Error('You\'d give a wrong type, type must be init or methods');
  }
};

export default validate;
