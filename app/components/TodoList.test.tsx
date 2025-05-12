import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./TodoList";

describe("할 일 목록 페이지 테스트", () => {
    // 각 테스트 전에 실행되는 함수
    beforeEach(() => {
        render(<Home />);
    });

    test("할 일이 없을 때 텍스트가 표시된다", () => {
        
        screen.getByText("할 일이 없습니다");
        screen.getByText("총 0개의 할 일이 있습니다");

        expect(screen.getByText("할 일이 없습니다")).toBeInTheDocument();
        expect(screen.getByText("총 0개의 할 일이 있습니다")).toBeInTheDocument();
    });

    test("새로운 할 일을 추가하면 할 일 목록에 추가되어야 한다.", () => {
        // 컴포넌트 렌더링
        
        //입력 필드에 값 입력
        const inputElement = screen.getByPlaceholderText("할 일을 입력하세요");
        fireEvent.change(inputElement, { target: { value: "새로운 할 일" } });

        //추가 버튼 클릭
        fireEvent.click(screen.getByText("추가"));

        //결과 검증
        expect(screen.getByText("새로운 할 일")).toBeInTheDocument();
        expect(screen.getByText("총 1개의 할 일이 있습니다")).toBeInTheDocument();
        expect(screen.getByText("완료: 0개")).toBeInTheDocument();
    });

    test("할 일을 완료했을 때 완료 상태가 반영되는지 확인", () => {
        // 할 일 추가한 후 체크박스를 클릭하면 체크박스가 선택됨
        const inputElement = screen.getByPlaceholderText("할 일을 입력하세요");
        fireEvent.change(inputElement, { target: { value: "새로운 할 일" } });
        fireEvent.click(screen.getByText("추가"));

        const checkboxElement = screen.getByRole("checkbox");
        fireEvent.click(checkboxElement);
        expect(checkboxElement).toBeChecked();

        // 완료 상태 확인
        expect(screen.getByText("새로운 할 일")).toHaveClass("line-through");
        expect(screen.getByText("완료: 1개")).toBeInTheDocument();
    })
});
