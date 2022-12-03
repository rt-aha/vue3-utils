import { describe, expect, it } from 'vitest';
import addCommas from '@/utils/addCommas';

const postiveTestCase = [
  {
    testDesc: '0.1 應為 \'0.1\'',
    input: 0.1,
    output: '0.1',
  },
  {
    testDesc: '0.01 應為 \'0.01\'',
    input: 0.01,
    output: '0.01',
  },
  {
    testDesc: '0.001 應為 \'0.001\'',
    input: 0.001,
    output: '0.001',
  },
  {
    testDesc: '0.0001 應為 \'0.0001\'',
    input: 0.0001,
    output: '0.0001',
  },
  {
    testDesc: '0.12345678 應為 \'0.12345678\'',
    input: 0.12345678,
    output: '0.12345678',
  },
];

const postiveDecimalTestCase = [
  {
    testDesc: '-1 應為 \'-1\'',
    input: -1,
    output: '-1',
  },
  {
    testDesc: '-10 應為 \'-10\'',
    input: -10,
    output: '-10',
  },
  {
    testDesc: '-100 應為 \'-100\'',
    input: -100,
    output: '-100',
  },
  {
    testDesc: '-1000 應為 \'-1000\'',
    input: -1000,
    output: '-1,000',
  },
  {
    testDesc: '-12345678 應為 \'-12,345,678\'',
    input: -12345678,
    output: '-12,345,678',
  },
];

const negativeTestCase = [
  {
    testDesc: '1 應為 \'1\'',
    input: 1,
    output: '1',
  },
  {
    testDesc: '10 應為 \'10\'',
    input: 10,
    output: '10',
  },
  {
    testDesc: '100 應為 \'100\'',
    input: 100,
    output: '100',
  },
  {
    testDesc: '1000 應為 \'1000\'',
    input: 1000,
    output: '1,000',
  },
  {
    testDesc: '12345678 應為 \'12,345,678\'',
    input: 12345678,
    output: '12,345,678',
  },
];

const negativeDecimalTestCase = [
  {
    testDesc: '-0.1 應為 \'-0.1\'',
    input: -0.1,
    output: '-0.1',
  },
  {
    testDesc: '-0.01 應為 \'-0.01\'',
    input: -0.01,
    output: '-0.01',
  },
  {
    testDesc: '-0.001 應為 \'-0.001\'',
    input: -0.001,
    output: '-0.001',
  },
  {
    testDesc: '-0.0001 應為 \'-0.0001\'',
    input: -0.0001,
    output: '-0.0001',
  },
  {
    testDesc: '-0.12345678 應為 \'-0.12345678\'',
    input: -0.12345678,
    output: '-0.12345678',
  },
];

describe('addCommas 正數', () => {
  postiveTestCase.forEach((params) => {
    it(params.testDesc, () => {
      expect(addCommas(params.input)).toBe(params.output);
    });
  });
});

describe('addCommas 正小數', () => {
  postiveDecimalTestCase.forEach((params) => {
    it(params.testDesc, () => {
      expect(addCommas(params.input)).toBe(params.output);
    });
  });
});

describe('addCommas 負數', () => {
  negativeTestCase.forEach((params) => {
    it(params.testDesc, () => {
      expect(addCommas(params.input)).toBe(params.output);
    });
  });
});

describe('addCommas 負小數', () => {
  negativeDecimalTestCase.forEach((params) => {
    it(params.testDesc, () => {
      expect(addCommas(params.input)).toBe(params.output);
    });
  });
});
