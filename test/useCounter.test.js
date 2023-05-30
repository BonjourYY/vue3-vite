import { useCounter } from '@/untils/useCounter';
import { expect, test } from 'vitest';
test('断言useCounter函数', () => {
  const { count, increment } = useCounter();
  expect(count.value).toBe(0);
  increment();
  expect(count.value).toBe(1);
});
