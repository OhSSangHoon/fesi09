import LoginForm from "./LoginForm";
import { userEvent } from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/react";


// test("로그인 버튼을 클릭하면 로그인 성공 메세지가 콘솔에 출력되는지 확인", () => {
//     render(<LoginForm />);

//     const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

//     const emailInput = screen.getByRole("textbox", { name: "이메일:" });
//     fireEvent.change(emailInput, { target: { value: "gnsdkaos99@test.com" } });

//     const loginButton = screen.getByRole("button", { name: "로그인" });
//     fireEvent.click(loginButton);

//     expect(consoleSpy).toHaveBeenCalledWith("로그인 성공");

//     consoleSpy.mockRestore();
// });

test("로그인 버튼을 클릭하면 로그인 메시지가 출력되는지 확인", () => {
    render(<LoginForm />);

    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});

    const emailInput = screen.getByRole("textbox", { name: "이메일:" });
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });

    const passwordInput = screen.getByLabelText("비밀번호:");
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(alertSpy).toHaveBeenCalledWith("로그인 성공 test@test.com password123");
    
    alertSpy.mockRestore();
})


test("이메일 입력 시 input 요소의 값이 변경되는지 확인", () => {
    render(<LoginForm />);

    const emailInput = screen.getByRole("textbox", { name: "이메일:" });
    const passwordInput = screen.getByLabelText("비밀번호:");

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput).toHaveValue("test@test.com");
    expect(passwordInput).toHaveValue("password123");
});