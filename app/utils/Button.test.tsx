import Button from "./Button";
import { render, screen,fireEvent } from "@testing-library/react";

test("버튼이 화면에 표시되는지 확인", () => {
  render(<Button onClick={() => {}}>버튼내용</Button>);
  const button = screen.getByText("버튼내용");
  expect(button).toBeInTheDocument();
});

test("버튼이 클릭되면 함수가 호출되는지 확인", () => {
  // 함수 생성
  const handleClick = jest.fn();
  // 버튼 렌더링
  render(<Button onClick={handleClick}>버튼내용</Button>);
  // 버튼 요소 찾기
  const button = screen.getByText("버튼내용");
  // 버튼 클릭
  fireEvent.click(button);
  // 함수가 호출되었는지 확인
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("버튼이 비활성화 상태인지 확인", () => {
  render(<Button onClick={() => {}} disabled>버튼내용</Button>);
  const button = screen.getByText("버튼내용");
  expect(button).toBeDisabled();
});