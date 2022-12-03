import { describe, expect, it } from 'vitest';
import { firstLetterToUpperCase } from '@/utils/variableNameConvert.ts';

const textWord = 'textWord';

// 正數
describe('variableNameConvert', () => {
  it('1 should be \'1\'', () => {
    expect(firstLetterToUpperCase(textWord)).toBe('TextWord');
  });
});
