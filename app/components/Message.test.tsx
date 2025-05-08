import Message from "./Message";
import { render, screen } from "@testing-library/react";

test("Message 컴포넌트가 제대로 렌더링되는지 확인", () => {
    render(<Message isError={false} />);
    
    // 에러가 없는 경우 에러 메세지가 보이지 않는지 확인
    const errorMessage = screen.queryByText("오류가 발생했습니다");
    // 에러 메세지가 보이지 않는지 확인
    expect(errorMessage).toBeNull();
});

test("오류 메시지가 화면에 표시되는지 확인", () => {
    render(<Message isError={true} />);
    
    // 오류 메시지가 화면에 표시되는지 확인
    const errorMessage = screen.getByText("오류가 발생했습니다");
    // 오류 메시지가 화면에 있는지 확인
    expect(errorMessage).toBeInTheDocument();
    // 오류 메시지가 error 클래스를 가지는지 확인
    expect(errorMessage).toHaveClass("error");
});
