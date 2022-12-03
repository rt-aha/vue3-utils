import { describe, expect, it } from 'vitest';
import addCommas from '@/utils/addCommas';

// 正數
describe('addCommas', () => {
  it('1 should be \'1\'', () => {
    expect(addCommas(1)).toBe('1');
  });
});

describe('addCommas', () => {
  it('10 should be \'10\'', () => {
    expect(addCommas(10)).toBe('10');
  });
});

describe('addCommas', () => {
  it('100 should be \'100\'', () => {
    expect(addCommas(100)).toBe('100');
  });
});

describe('addCommas', () => {
  it('1000 should be \'1,000\'', () => {
    expect(addCommas(1000)).toBe('1,000');
  });
});

describe('addCommas', () => {
  it('12345678 should be \'12,345,678\'', () => {
    expect(addCommas(12345678)).toBe('12,345,678');
  });
});

// 正小數
describe('addCommas', () => {
  it('0.1 should be \'0.1\'', () => {
    expect(addCommas(0.1)).toBe('0.1');
  });
});

describe('addCommas', () => {
  it('0.01 should be \'0.01\'', () => {
    expect(addCommas(0.01)).toBe('0.01');
  });
});

describe('addCommas', () => {
  it('0.001 should be \'0.001\'', () => {
    expect(addCommas(0.001)).toBe('0.001');
  });
});

describe('addCommas', () => {
  it('0.0001 should be \'0.0001\'', () => {
    expect(addCommas(0.0001)).toBe('0.0001');
  });
});

describe('addCommas', () => {
  it('0.12345678 should be \'0.12345678\'', () => {
    expect(addCommas(0.12345678)).toBe('0.12345678');
  });
});

// 負數
describe('addCommas', () => {
  it('-1 should be \'1\'', () => {
    expect(addCommas(-1)).toBe('-1');
  });
});

describe('addCommas', () => {
  it('-10 should be \'-10\'', () => {
    expect(addCommas(-10)).toBe('-10');
  });
});

describe('addCommas', () => {
  it('-100 should be \'-100\'', () => {
    expect(addCommas(-100)).toBe('-100');
  });
});

describe('addCommas', () => {
  it('-1000 should be \'-1,000\'', () => {
    expect(addCommas(-1000)).toBe('-1,000');
  });
});

describe('addCommas', () => {
  it('-12345678 should be \'-12,345,678\'', () => {
    expect(addCommas(-12345678)).toBe('-12,345,678');
  });
});

// 負小數
describe('addCommas', () => {
  it('-0.1 should be \'0.1\'', () => {
    expect(addCommas(0.1)).toBe('0.1');
  });
});

describe('addCommas', () => {
  it('-0.01 should be \'0.01\'', () => {
    expect(addCommas(0.01)).toBe('0.01');
  });
});

describe('addCommas', () => {
  it('-0.001 should be \'0.001\'', () => {
    expect(addCommas(0.001)).toBe('0.001');
  });
});

describe('addCommas', () => {
  it('-0.0001 should be \'0.0001\'', () => {
    expect(addCommas(0.0001)).toBe('0.0001');
  });
});

describe('addCommas', () => {
  it('-0.12345678 should be \'-0.12345678\'', () => {
    expect(addCommas(-0.12345678)).toBe('-0.12345678');
  });
});
