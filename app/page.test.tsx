import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./page";

test("5글자 이상 입력하면 에러 메시지가 사라진다", async () => {
  render(<Home />);
  const errorMessage = screen.getByText("5글자 이상 입력하세요");
  expect(errorMessage).toBeInTheDocument();

  const input = screen.getByPlaceholderText("아무거나 입력하세요");
  fireEvent.change(input, { target: { value: "12345" } });

  await waitFor(() => {
    expect(errorMessage).not.toBeInTheDocument();
  });
});
