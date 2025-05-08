import RegistrationForm from "./RegistrationForm";
import { fireEvent, render, screen } from "@testing-library/react";

test("회원가입 폼이 제대로 렌더링되는지 확인", () => {
    render(<RegistrationForm />);

    // <h2>회원가입</h2> 요소를 찾기
    const heading = screen.getByRole("heading", { name: "회원가입" });
    // <input> 요소를 찾기
    const usernameInput = screen.getByRole("textbox", { name: "사용자 이름:" });
    // <button> 요소를 찾기
    const submitButton = screen.getByRole("button", { name: "가입하기" });

    const passwordInput = screen.getByLabelText("비밀번호:");

    // 요소가 화면에 있는지 확인
    expect(heading).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});

test("사용자 이름 입력 필드에 값을 입력하면 값이 표시되는지 확인", () => {
    render(<RegistrationForm />);
    
    const usernameInput = screen.getByRole("textbox", { name: "사용자 이름:" });
    fireEvent.change(usernameInput, { target: { value: "홍길동" } });

    expect(usernameInput).toHaveValue("홍길동");
});