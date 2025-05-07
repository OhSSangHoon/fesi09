import { calculateDiscount } from './discount';

test('정상적인 가격과 할인율에 대한 계산', () => {
  expect(calculateDiscount(1000, 50)).toBe(500);
  expect(calculateDiscount(4000, 10)).toBe(3600);
  expect(calculateDiscount(2500, 20)).toBe(2000);
});

test('가격이 음수인 경우 0으로 처리', () => {
  expect(calculateDiscount(-2000, 10)).toBe(0);
  expect(calculateDiscount(-3500, 20)).toBe(0);
});

test('할인율이 100%를 초과하거나 음수인 경우 0으로 처리', () => {
  expect(calculateDiscount(1000, 150)).toBe(0);
  expect(calculateDiscount(1000, -10)).toBe(0);
});

test('가격이나 할인율이 숫자가 아닌 경우 0으로 처리', () => {
  expect(() => calculateDiscount('1000', 10)).toThrow('Invalid input');
  expect(() => calculateDiscount(1000, '10')).toThrow('Invalid input');
  expect(() => calculateDiscount(null, undefined)).toThrow('Invalid input');
});