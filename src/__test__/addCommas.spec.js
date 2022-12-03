import { describe, expect, it } from 'vitest';
import addCommas from '@/utils/addCommas';

describe('addCommas 正數1', () => {
  it('1 should be \'1\'', () => {
    expect(addCommas(1)).toBe('1');
  });
});

describe('addCommas 正數2', () => {
  it('10 should be \'10\'', () => {
    expect(addCommas(10)).toBe('10');
  });
});

describe('addCommas 正數3', () => {
  it('100 should be \'100\'', () => {
    expect(addCommas(100)).toBe('100');
  });
});

describe('addCommas 正數4', () => {
  it('1000 should be \'1,000\'', () => {
    expect(addCommas(1000)).toBe('1,000');
  });
});

describe('addCommas 正數5', () => {
  it('12345678 should be \'12,345,678\'', () => {
    expect(addCommas(12345678)).toBe('12,345,678');
  });
});

describe('addCommas 正小數1', () => {
  it('0.1 should be \'0.1\'', () => {
    expect(addCommas(0.1)).toBe('0.1');
  });
});

describe('addCommas 正小數2', () => {
  it('0.01 should be \'0.01\'', () => {
    expect(addCommas(0.01)).toBe('0.01');
  });
});

describe('addCommas 正小數3', () => {
  it('0.001 should be \'0.001\'', () => {
    expect(addCommas(0.001)).toBe('0.001');
  });
});

describe('addCommas 正小數4', () => {
  it('0.0001 should be \'0.0001\'', () => {
    expect(addCommas(0.0001)).toBe('0.0001');
  });
});

describe('addCommas 正小數5', () => {
  it('0.12345678 should be \'0.12345678\'', () => {
    expect(addCommas(0.12345678)).toBe('0.12345678');
  });
});

describe('addCommas 負數1', () => {
  it('-1 should be \'1\'', () => {
    expect(addCommas(-1)).toBe('-1');
  });
});

describe('addCommas 負數2', () => {
  it('-10 should be \'-10\'', () => {
    expect(addCommas(-10)).toBe('-10');
  });
});

describe('addCommas 負數3', () => {
  it('-100 should be \'-100\'', () => {
    expect(addCommas(-100)).toBe('-100');
  });
});

describe('addCommas 負數4', () => {
  it('-1000 should be \'-1,000\'', () => {
    expect(addCommas(-1000)).toBe('-1,000');
  });
});

describe('addCommas 負數5', () => {
  it('-12345678 should be \'-12,345,678\'', () => {
    expect(addCommas(-12345678)).toBe('-12,345,678');
  });
});

describe('addCommas 負小數1', () => {
  it('-0.1 should be \'0.1\'', () => {
    expect(addCommas(0.1)).toBe('0.1');
  });
});

describe('addCommas 負小數2', () => {
  it('-0.01 should be \'0.01\'', () => {
    expect(addCommas(0.01)).toBe('0.01');
  });
});

describe('addCommas 負小數3', () => {
  it('-0.001 should be \'0.001\'', () => {
    expect(addCommas(0.001)).toBe('0.001');
  });
});

describe('addCommas 負小數4', () => {
  it('-0.0001 should be \'0.0001\'', () => {
    expect(addCommas(0.0001)).toBe('0.0001');
  });
});

describe('addCommas 負小數5', () => {
  it('-0.12345678 should be \'-0.12345678\'', () => {
    expect(addCommas(-0.12345678)).toBe('-0.12345678');
  });
});
