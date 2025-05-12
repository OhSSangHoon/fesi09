import { test, expect } from "@playwright/test";

test("로그인 후 구매까지의 시나리오", async ({ page }) => {
    // 로그인 페이지로 이동
    await page.goto("http://localhost:3000/auth/login");

    //이메일 입력
    await page.getByRole("textbox", { name: "이메일" }).fill("abc@naver.com");
    //비밀번호 입력
    await page.getByRole("textbox", { name: "비밀번호", exact: true }).fill("12345678");

    //로그인 버튼
    await page.getByRole("button", { name: "로그인" }).click();

    //상품 페이지로 이동
    await expect(page).toHaveURL("http://localhost:3000/products");

    // 첫번 째 상품 렌더링 확인
    const firstProduct = page.locator('[data-testid^="product-"]').first();
    await expect(firstProduct).toBeVisible();

    // 첫번 째 상품의 id 확인
    const productId = await firstProduct.getAttribute("data-product-id");

    // 첫번 째 상품 클릭
    await firstProduct.click();

    // 상품 상세 페이지로 이동
    await expect(page).toHaveURL(`http://localhost:3000/products/${productId}`);

    // 수량 증가 버튼 2회 클릭
    await page.getByRole("button", { name: "+" }).click();
    await page.getByRole("button", { name: "+" }).click();

    //구매 버튼
    await page.getByRole("button", { name: "구매" }).click();

    //구매 완료 페이지로 이동
    await expect(page).toHaveURL("http://localhost:3000/purchase/complete");
    
    await expect(page.getByText("구매가 완료되었습니다.")).toBeVisible();
});
