import TodoItem from "./TodoItem";
import { render, screen } from "@testing-library/react";

test("할 일 항목 상태 테스트", () => {
    render(<TodoItem task="리액트 공부하기" completed={true} />);

    // 할 일 텍스트 요소 찾기
    const taskText = screen.getByText("리액트 공부하기");
    // 할 일 텍스트 요소가 화면에 있는지 확인
    expect(taskText).toHaveTextContent("리액트 공부하기");

    // 체크박스 요소 찾기
    const checkbox = screen.getByRole("checkbox");
    // 체크박스 요소가 화면에 있는지 확인
    expect(checkbox).toBeChecked();
});
