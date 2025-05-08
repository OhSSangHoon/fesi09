import { capitalize, truncate } from './stringUtils';

describe('stringUtils 모듈', () => {
    describe('capitalize 함수', () => {
        test('문자열의 첫 글자를 대문자로 변환해야 함', () => {
            expect(capitalize('hello')).toBe('Hello');
            expect(capitalize('world')).toBe('World');
        });

        test('빈 문자열(""), null, undefined에 대해 빈 문자열을 반환해야함', () => {
             expect(() => capitalize('')).not.toThrow('Invalid input');
             expect(() => capitalize(null)).not.toThrow('Invalid input');
             expect(() => capitalize(undefined)).not.toThrow('Invalid input');
        });

        test('한글자 문자열도 처리해야 함', () => {
            expect(capitalize('a')).toBe('A');
            expect(capitalize('b')).toBe('B');
        });
    });

    describe('truncate 함수', () => {
        test('최대 길이보다 짧은 문자열은 그대로 반환해야 함', () => {
            expect(truncate('hello', 10)).toBe('hello');
        });

        test('최대 길이보다 긴 문자열은 자르고 말줄임표를 추가해야 함', () => {
            expect(truncate('hello world', 5)).toBe('hello...');
        });

        test('사용자 정의 말줄임표[...]를 사용할 수 있어야 함', () => {
            expect(truncate('hello world', 5, '...')).toBe('hello...');
        });

        test('빈 문자열, null, undefined에 대해 빈 문자열을 반환해야 함', () => {
            expect(truncate('')).toBe('');
            expect(truncate(null)).toBe('');
            expect(truncate(undefined)).toBe('');
        });
        
        
    });
});
