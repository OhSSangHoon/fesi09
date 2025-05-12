import { test, expect } from "@playwright/test";

test.describe("상품 페이지 E2E 테스트", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:3000/products");
    });

    test("두 번째 장바구니 버튼을 가져온다", async ({ page }) => {
        const secondAddToCarButton = page
        .getByRole("listitem")
        .filter({ hasText: "상품2" })
        .getByRole("button", { name: "장바구니 담기" });

        await expect(secondAddToCarButton).toBeVisible();
    });
});
