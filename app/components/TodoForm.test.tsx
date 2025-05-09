import { render, screen, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

//input에 할 일을 입력하면 상태가 업데이트 되어야 함
test("할 일 입력 시 input 요소의 값이 변경되는지 확인", () => {
    render(<TodoForm />);

    const inputElement = screen.getByLabelText("할 일:");
    expect(inputElement).toHaveValue(""); //input 요소의 값이 비어있는지 확인

    fireEvent.change(inputElement, { target: { value: "새로운 할 일" } });

    expect(inputElement).toHaveValue("새로운 할 일"); //input 요소의 값이 변경되었는지 확인
})
