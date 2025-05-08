import { uniqueItems, chunk, intersection } from './arrayUtils';

describe('uniqueItems 함수', () => {
    test('중복된 항목이 제거되어야 함', () => {
        expect(uniqueItems([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('중복이 없는 배열은 그대로 반환되어야 함', () => {
        expect(uniqueItems([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('빈 배열은 빈 배열을 반환해야 함', () => {
        expect(uniqueItems([])).toEqual([]);
    });

    test('배열이 아닌 값이 주어지면 빈 배열을 반환해야 함', () => {
        expect(uniqueItems(null)).toEqual([]);
        expect(uniqueItems(undefined)).toEqual([]);
        expect(uniqueItems('string')).toEqual([]);
        expect(uniqueItems('')).toEqual([]);
        expect(uniqueItems({})).toEqual([]);
    });
});

describe('chunk 함수', () => {
    test('배열을 지정된 크기의 청크로 나눠야 함', () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
        expect(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
    });

    test('크기가 배열 길이보다 크면 하나의 컹츠만 반환해야 함', () => {
        expect(chunk([1, 2, 3, 4, 5], 10)).toEqual([[1, 2, 3, 4, 5]]);
    });

    test('크기가 0이하이면 빈 배열을 반환해야 함', () => {
        expect(chunk([1, 2, 3, 4, 5], 0)).toEqual([[1, 2, 3, 4, 5]]);
        expect(chunk([1, 2, 3, 4, 5], -1)).toEqual([[1, 2, 3, 4, 5]]);
    });

    test('빈 배열은 빈 배열을 반환함', () => {
        expect(chunk([])).toEqual([]);
    });

    test('배열이 아닌 값이 주어지면 빈 배열을 반환해야 함', () => {
        expect(chunk(null, 2)).toEqual([]);
        expect(chunk(undefined, 2)).toEqual([]);
        expect(chunk('string', 2)).toEqual([]);
        expect(chunk({}, 2)).toEqual([]);
    });
});

describe('intersection 함수', () => {
    test('두 배열의 공통 요소를 반환해야 함 & 공통 요소가 없으면 빈 배열을 반환해야 함', () => {
        expect(intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])).toEqual([3, 4, 5]);
        expect(intersection([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).toEqual([]);
    });

    test('빈 배열이 주어지면 빈 배열을 반환해야 함', () => {
        expect(intersection([], [1, 2, 3])).toEqual([]);
        expect(intersection([1, 2, 3], [])).toEqual([]);
        expect(intersection([], [])).toEqual([]);
    });

    test('배열이 아닌 값이 주어지면 빈 배열을 반환해야 함', () => {
        expect(intersection(null, 'string')).toEqual([]);
        expect(intersection(undefined, 'string')).toEqual([]);
        expect(intersection(null, null)).toEqual([]);
        expect(intersection(undefined, undefined)).toEqual([]);
        expect(intersection(null, undefined)).toEqual([]);
        expect(intersection(undefined, null)).toEqual([]);
        expect(intersection(null, 1)).toEqual([]);
        expect(intersection(undefined, 1)).toEqual([]);
        expect(intersection(1, null)).toEqual([]);
        expect(intersection(1, undefined)).toEqual([]);
    });
});
