import { validateUsername } from './stringValidator';

test('유효한 사용자 이름이면 true', () => {
  expect(validateUsername('user_name123')).toBe(true);
  expect(validateUsername('sanghun_99')).toBe(true);
});


test('유효하지 않은 사용자 이름이면 false', () => {
  expect(validateUsername('상훈')).toBe(false);
  expect(validateUsername('user-name')).toBe(false);
  expect(validateUsername('name12345!!')).toBe(false);
});


test('길이 제한을 벗어난 사용자 이름이면 false', () => {
  expect(validateUsername('a'.repeat(21))).toBe(false);
  expect(validateUsername('a'.repeat(2))).toBe(false);
});


test('null, undefined, number 등 잘못된 타입에 대해 false', () => {
  expect(validateUsername(null)).toBe(false);
  expect(validateUsername(undefined)).toBe(false);
  expect(validateUsername(123)).toBe(false);
});
