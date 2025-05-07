export function calculateDiscount(price: number, discountRate: number) {
    // 가격이 숫자가 아니거나 할인율이 숫자가 아닌 경우 0으로 처리
    if (typeof price !== 'number' || typeof discountRate !== 'number') throw new Error('Invalid input');
    // 가격이 음수인 경우, 할인율이 음수인 경우, 할인율이 100% 초과인 경우 0으로 처리
    if (price < 0 || discountRate < 0 || discountRate > 100) return 0;
    
    // 할인율이 100% 초과인 경우 100%로 처리
    return price * (1 - discountRate / 100);
  }