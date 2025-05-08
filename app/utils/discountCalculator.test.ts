import { calculatePrice, type Membership } from "./discountCalculator";

describe("할인 계산기", () => {
    test("기본 가격에 할인이 적용되지 않아야 함 (5만원 미만)", () => {
        const price = 30000;
        const customer = { membership: "regular" as Membership };
        const finalPrice = calculatePrice(price, customer);
        expect(finalPrice).toBe(30000);
    });

    test('5만원 이상 구매 시 5% 할인이 적용되어야 함', () => {
        const price = 50000;
        const customer = { membership: 'regular' as Membership };
        const finalPrice = calculatePrice(price, customer);
        expect(finalPrice).toBe(47500); // 50,000 * 0.95
    });
    
    test('10만원 이상 구매 시 10% 할인이 적용되어야 함', () => {
        const price = 100000;
        const customer = { membership: 'regular' as Membership };
        const finalPrice = calculatePrice(price, customer);
        expect(finalPrice).toBe(90000); // 100,000 * 0.9
    });
    
    test('20만원 이상 구매 시 20% 할인이 적용되어야 함', () => {
        const price = 200000;
        const customer = { membership: 'regular' as Membership };
        const finalPrice = calculatePrice(price, customer);
        expect(finalPrice).toBe(160000); // 200,000 * 0.8
    });

    test('정액 쿠폰이 적용되어야 함', () => {
        const price = 100000;
        const customer = { membership: 'regular', coupon: {type: 'fixed', value: 5000 } }
        const finalPrice = calculatePrice(price, customer);
        expect(finalPrice).toBe(85000); // (100,000 * 0.9) - 5,000
    });

    test('비율 쿠폰이 적용되어야 함', () => {
        const price = 100000;
        const customer = { membership: 'regular', coupon: {type: 'percentage', value: 10 } }
        const finalPrice = calculatePrice(price, customer);
        expect(finalPrice).toBe(81000); // (100,000 * 0.9) - 10%
    });
});