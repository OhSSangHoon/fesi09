import { test, expect } from "@playwright/test";

test("신규 유저 대환영 모달 테스트", async ({ page }) => {
    await page.goto("http://localhost:3000/main");

    //가입 버튼 클릭
    await page.getByRole("button", { name: "지금 가입하면 이득" }).click();
    //이메일 입력
    await page.getByRole("textbox", { name: "이메일" }).fill("abc@naver.com");

    //비밀번호 입력
    await page.getByRole("textbox", { name: "비밀번호", exact: true }).fill("12345678");

    //비밀번호 확인 입력
    await page.getByRole("textbox", { name: "비밀번호 확인" }).fill("12345678");

    //회원가입 버튼
    await page.getByRole("button", { name: "회원가입" }).click();

    //신규 가입자 확인
    await expect(page.getByText("신규 가입자시군요! 쿠폰이 발급됐어요!")).toBeVisible();
});
