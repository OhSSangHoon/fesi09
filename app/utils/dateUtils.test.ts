import { formatDate, daysDifference, isWeekend } from './dateUtils';

describe('dateUtils 함수', () => {
    describe('formatDate 함수', () => {
        test('날짜를 YYYY-MM-DD 형식으로 포맷팅해야 함', () => {
            const date = new Date(2023, 0, 1);
            expect(formatDate(date)).toBe('2023-01-01');
        });

        test('다른 구분자를 사용할 수 있어야 함', () => {
            const date = new Date(2023, 0, 1);
            expect(formatDate(date, '/')).toBe('2023/01/01');
        });

        test('10월 이상의 월과 10일 이상의 날짜도 올바르게 포맷팅해야 함', () => {
            const date = new Date(2023, 9, 12);
            expect(formatDate(date)).toBe('2023-10-12');
        });

        test('날짜가 유효하지 않으면 빈 문자열을 반환해야 함', () => {
            expect(formatDate(new Date('invalid'))).toBe('');
            expect(formatDate("2023-01-01")).toBe('');
        });
    });
});
