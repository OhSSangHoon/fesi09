const applyPriceDiscount = (price: number) => {
    //5만원 이상 10만원 미만
    if (price >= 50000 && price < 100000) {
        return price * 0.95;
    }
    //10만원 이상 20만원 미만
    if (price >= 100000 && price < 200000) {
        return price * 0.9;
    }
    //20만원 이상
    if (price >= 200000) {
        return price * 0.8;
    }
    //5만원 미만
    if (price < 50000) {
        return price;
    }
}

export type Membership = "regular" | "silver" | "gold" | "vip";

export type Coupon = { type: "fixed" | "percentage"; value: number};

export const applyCouponDiscount = (price: number, coupon?: Coupon) => {
    if (!coupon) return price;

    // 정액 쿠폰
    if (coupon.type === "fixed") {
        return price - coupon.value;
    }

    // 비율 쿠폰
    if (coupon.type === "percentage") {
        return price * (1 - coupon.value / 100);
    }
    return price;
}

export const applyMembershipDiscount = (price: number, membership: Membership) => {
    const discountRates = {
        silver: 0.98, // 2%
        gold: 0.95, // 5%
        vip: 0.9, // 10%
        regular: 1, // 0%
    }

    return price * (discountRates[membership] || 1);
};

export const calculatePrice = (
    price: number,
    customer: {
      membership: Membership;
      coupon?: Coupon;
    }
  ) => {
    // 1. 총 가격에 대한 할인 적용
    const priceAfterPriceDiscount = applyPriceDiscount(price);
    // 2. 멤버십에 따른 할인 적용
    const priceAfterMembershipDiscount = applyMembershipDiscount(
      priceAfterPriceDiscount,
      customer.membership
    );
    // 3. 쿠폰에 따른 할인 적용
    const priceAfterCouponDiscount = applyCouponDiscount(
      priceAfterMembershipDiscount,
      customer.coupon
    );
    // 4. 최종 가격 반환
    return priceAfterCouponDiscount;
  };
  
